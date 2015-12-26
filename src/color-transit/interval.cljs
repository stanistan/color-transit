(ns color-transit.interval)

(defn set-interval
  [f timeout]
  (.setInterval js/window f timeout))

(defn clear-interval
  [interval]
  (when interval (.clearInterval js/window interval)))

(defn swap-interval!
  [state f timeout & [k]]
  (let [k (or k :interval)]
    (clear-interval (k @state))
    (swap! state assoc k (set-interval f timeout))))

