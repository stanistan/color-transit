(ns color-transit.core
  (:require [color-transit.color :as color]
            [color-transit.canvas :refer [ctx id->Canvas fill-style
                                          fill-rect]]))

(defonce app-state (atom {:interval nil 
                          :colors []
                          :current-color nil
                          :color-queue []}))

(defn set-interval
  [f timeout]
  (.setInterval js/window f timeout))

(defn clear-interval
  [interval]
  (when interval 
    (.clearInterval js/window interval)))

(defn swap-interval!
  [state f timeout]
  (clear-interval (:interval @state))
  (swap! state assoc :interval (set-interval f timeout)))

(defn draw-rect
  [canvas color]
  (-> canvas
      (ctx fill-style color)
      (ctx fill-rect 0 0 (:w canvas) (:h canvas))))

(defn compute-color-from-map
  [{:keys [color-queue current-color colors steps] :as color-map}]
  (let [with-color-queue (fn [c q] (assoc color-map :color-queue q :current-color c))]
    (if (not (empty? color-queue))
      (with-color-queue (first color-queue) (rest color-queue))
      (let [next-color (color/find-next current-color colors)]
        (recur (with-color-queue
                 next-color
                 (color/create-queue current-color next-color steps)))))))

(defn compute-color
  [state]
  (let [color-map (compute-color-from-map @state)
        color (color/style (:current-color color-map))]
    (swap! state merge color-map)
    color))

(defn run-loop
  "Executes drawing every whatever time we defined."
  [canvas app-state]
  (let [color (compute-color app-state)] 
    (draw-rect canvas color)))

(defn run-app!
  [colors fps]
  (swap! app-state assoc :steps 30
                         :colors colors
                         :current-color (first colors))
  (swap-interval! app-state
                 #(run-loop (id->Canvas "myCanvas") app-state)
                 fps)) 

(enable-console-print!)

(run-app! 
  [[0 10 0], [200 155 255], [40 40 40], [255 0 0]]
  (/ 1000 30))
