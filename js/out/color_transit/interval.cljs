(ns color-transit.interval)

(defn set-interval
  [f timeout]
  (.setInterval js/window f timeout))

(defn clear-interval
  [interval]
  (when interval (.clearInterval js/window interval)))

(defn swap-interval!
  [state f timeout & stuff]
  (clear-interval (:interval @state))
  (swap! state
         merge
         (-> (apply hash-map stuff)
             (assoc :interval (set-interval f timeout)))))

