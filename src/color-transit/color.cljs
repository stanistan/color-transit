(ns color-transit.color)

(defn style 
  [r g b]
  (str "rgb(" r "," g "," b ")"))

(defn delta
  [[r1 g1 b1] [r2 g2 b2]]
  [(- r2 r1)
   (- g2 g1)
   (- b2 b1)])

