(ns ring-app.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.response :as r]))

(defn handler [request-map]
  (r/response
   (str "<html><body> your IP is: "
        (:remote-addr request-map)
        "<code>request-map contains: "
        request-map
        "</code></body></html>")))

(defn add-hello-at-end [handler]
  (fn [request]
    (-> request
        handler
        (assoc :body (str (:body handler) "Hello!!!")))))

(defn -main []
  (jetty/run-jetty
   (-> handler
       add-hello-at-end)
   {:port 3000
    :join? false}))
