(ns color-transit.core
  (:require [color-transit.color :as color]
            [color-transit.interval :refer [swap-interval!]]
            [color-transit.canvas :refer [ctx id->Canvas fill-style
                                          fill-rect linear-gradient-with-colors]]))

(defonce app-state (atom {:interval nil 
                          :color-sets []}))

(defn draw-rect
  [canvas color]
  (-> canvas
      (ctx fill-style color)
      (ctx fill-rect 0 0 (:w canvas) (:h canvas))))

(defn draw-rect-gradient
  [canvas colors]
  (let [gradient (linear-gradient-with-colors (:ctx canvas)
                                              colors
                                              0 0 0 (:h canvas))]
    (draw-rect canvas gradient)))


(defn run-loop
  "Executes drawing every whatever time we defined."
  [canvas app-state]
  (let [old-sets (:color-sets @app-state)
        new-sets (map #(color/compute-next-state % (:steps @app-state)) old-sets)
        colors (->> new-sets
                    (map :current-color)
                    (map color/style))]
    (swap! app-state assoc :color-sets new-sets)
    (draw-rect-gradient canvas colors)))

(defn colors->color-sets
  [colors num-sets]
  (assert (zero? (mod (count colors) num-sets)) 
          (str "colors: " colors " should be divisible by num-sets: " num-sets))
   (map (fn [color-set]
          {:color-queue [] 
           :colors color-set 
           :current-color (first color-set)})
        (map #(shuffle colors) (range num-sets))))

(defn run-app!
  [colors fps]
  (swap! app-state merge {:steps 200
                          :color-sets (colors->color-sets colors 2)})
  (swap-interval! app-state
                  #(run-loop (id->Canvas "myCanvas") app-state)
                  fps))

(enable-console-print!)

(run-app! 
  [[0 10 0], [200 155 255], [40 40 40], [255 0 0], [0 255 255], [100 233 67]]
  (/ 1000 60))
