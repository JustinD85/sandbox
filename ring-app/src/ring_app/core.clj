(ns ring-app.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.response :as r]
            [ring.middleware.reload :refer [wrap-reload]]))

(defn handler [request-map]
  (r/response
   (str "<html><body> your IP is: "
        (:remote-addr request-map)
        "<code>request-map contains this: "
        request-map
        "</code></body></html>")))

(defn wrap-nocache [handler]
  (fn [request]
    (-> request
        handler
        (assoc-in [:headers "Pragma"] "no-cache"))))

(defn -main []
  (jetty/run-jetty
   (-> #'handler
       wrap-nocache
       wrap-reload)
   {:port 3000
    :join? false}))
