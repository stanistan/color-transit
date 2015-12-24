(ns color-transit.core
  (:use color-transmit.canvas)
  (:require [color-transmit.color :as color]))

(defonce app-state (atom {}))

(defn set-interval
  [f timeout]
  (.setInterval js/window f timeout))

(defn clear-interval
  [interval]
  (when interval 
    (.clearInterval js/window interval)))

(defn swap-interval
  [state f timeout]
  (clear-interval (:interval @state))
  (swap! state assoc :interval (set-interval f timeout)))

(defn run-loop
  "Executes drawing every whatever time we defined."
  [canvas app-state]
  (-> canvas
      (ctx fill-style (color/style 10 10 10))
      (ctx 0 0 (:w canvas) (:h canvas))))

(def fps (/ 1000 60))

(defn run-app!
  []
  (swap-interval app-state
                 #(run-loop (id->Canvas "myCanvas") app-state)
                 fps)) 

(run-app!)
