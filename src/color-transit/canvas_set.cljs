(ns color-transit.canvas-set
  (:require [color-transit.color :as color]))

(defrecord CanvasSet
  [canvas color-sets])

(defn colors->CanvasSet
  [colors n-per-set partition-fn canvas]
  (->CanvasSet canvas
               (color/->sets colors n-per-set partition-fn)))

