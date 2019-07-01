(ns ring-app.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.response :as r]))

(defn handler [request-map]
  (r/response
   (str "<html><body> your IP is: "
        (:remote-addr request-map)
        "<div> reqeust-map contains: "
        request-map
        "<div/></body></html>")))

(defn -main []
  (jetty/run-jetty
   handler
   {:port 3000
    :join? false}))
