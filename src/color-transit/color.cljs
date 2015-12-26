(ns color-transit.color)

(defn style 
  [[r g b]]
  (str "rgb(" r "," g "," b ")"))

(defn delta
  [[r1 g1 b1] [r2 g2 b2] steps]
  [(/ (- r2 r1) steps)
   (/ (- g2 g1) steps)
   (/ (- b2 b1) steps)])

(defn find-next
  "Given a color and the list of colors to choose from, find the 
   next color.  
   
   Returns the default value if the current color is not found 
   in the list."
  [current color-list]
  (let [reducer (fn [found-enum c] 
                  (case found-enum
                    nil (if (= current c) true nil)
                    true c
                    found-enum))]
    (let [v (reduce reducer nil color-list)]
      (if (vector? v) 
        v
        (first color-list)))))

(defn +delta
  [[r g b] [r+ g+ b+] scalar]
  (map Math/floor 
       [(+ r (* scalar r+))
        (+ g (* scalar g+))
        (+ b (* scalar b+))]))

(defn create-queue
  [from-color to-color steps]
  (let [d (delta from-color to-color steps)]
    (conj (map #(+delta from-color d %) (range 0 (inc steps))))))

(defn with-color-and-queue
  [color-map c q]
  (assoc color-map :color-queue q
                   :current-color c))

(defn compute-next-state
  "Given color settings, return the next [r g b] value."
  [{:keys [color-queue current-color colors steps] :as color-map}]
  (if (not (empty? color-queue))
    (with-color-and-queue color-map (first color-queue) (rest color-queue))
    (let [next-color (find-next current-color colors)]
      (recur (with-color-and-queue 
               color-map 
               next-color
               (create-queue current-color next-color steps))))))
