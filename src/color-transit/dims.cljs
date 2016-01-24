(ns color-transit.dims)

(defn offset
  [el]
  [(.-offsetWidth el) (.-offsetHeight el)])

(defn inner
  [el]
  [(.-innerWidth el) (.-innerHeight el)])
