FROM clojure:openjdk-8-slim-buster
WORKDIR /usr/app

COPY project.clj .
RUN lein deps
RUN lein figwheel :check-config
