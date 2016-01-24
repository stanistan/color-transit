(defproject color-transit "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]]
  :plugins [[lein-figwheel "0.5.0-1"]
            [lein-cljsbuild "1.1.2"]]
  :hooks [leiningen.cljsbuild]
  :clean-targets ^{:protect false} [:target-path "out" "resources/public/js"]
  :cljsbuild {
    :builds {
      :dev {
        :source-paths ["src"]
        :figwheel true
        :compiler {
          :main color-transit.core
          :asset-path "js/dev"
          :output-to "resources/public/js/main.js"
          :output-dir "resources/public/js/dev" }}
      :prod {
        :source-paths ["src"]
        :compiler {
          :warnings true
          :optimizations :whitespace
          :elide-asserts true
          :asset-path "js/out"
          :source-map "resources/public/js/main.js.map"
          :output-dir "resources/public/js/out"
          :output-to "resources/public/js/main.js"
          :main color-transit.core
          :pretty-print true }}}})

