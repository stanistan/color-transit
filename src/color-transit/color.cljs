(ns color-transit.color)

(defn style 
  [[r g b]]
  (str "rgb(" r "," g "," b ")"))

(defn delta
  [[r1 g1 b1] [r2 g2 b2] steps]
  [(/ (- r2 r1) steps)
   (/ (- g2 g1) steps)
   (/ (- b2 b1) steps)])

(defn +delta
  [[r g b] [r+ g+ b+] scalar]
  (map Math/floor 
       [(+ r (* scalar r+))
        (+ g (* scalar g+))
        (+ b (* scalar b+))]))

(defn find-next
  "Given a color and the list of colors to choose from, find the 
   next color."
  [current color-list]
  (let [reducer (fn [found-enum c] 
                  (case found-enum
                    nil (if (= current c) true nil)
                    true c
                    found-enum))]
    (let [v (reduce reducer nil color-list)]
      (if (vector? v) v nil))))

(defn create-queue
  [from-color to-color steps]
  (let [d (delta from-color to-color steps)]
    (conj (map #(+delta from-color d %) (range 0 (inc steps))))))

(defn with-color-and-queue
  [color-map c q & [colors]]
  (assoc color-map :color-queue q
                   :current-color c
                   :colors (or colors (:colors color-map))))

(defn compute-next-state
  "Given color settings, return the next [r g b] value."
  [{:keys [color-queue current-color colors] :as color-map} steps]
  (if (not (empty? color-queue))
    (with-color-and-queue color-map (first color-queue) (rest color-queue))
    (let [next-color (find-next current-color colors)
          colors (if (nil? next-color) (shuffle colors) colors)
          next-color (if (nil? next-color) (first colors) next-color)]
      (recur (with-color-and-queue 
               color-map 
               next-color
               (create-queue current-color next-color steps)
               colors)
             steps))))
