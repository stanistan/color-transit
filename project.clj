(defproject color-transit "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]]
  :plugins [[lein-figwheel "0.5.0-1"]]
  :clean-targets ^{:protect false} [:target-path "out" "resources/public/js"]
  :cljsbuild { :builds [ {:id "dev"
                          :source-paths ["src"]
                          :figwheel true
                          :compiler {:main color-transit.core
                                     :asset-path "js/out"
                                     :output-to "resources/public/js/main.js"
                                     :output-dir "resources/public/js/out" } }] })
