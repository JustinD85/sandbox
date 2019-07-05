(ns ring-app.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.http-response :as r]
            [ring.middleware.reload :refer [wrap-reload]]
            [muuntaja.middleware :refer [wrap-format]]
            [reitit.ring :as reitit]))

(defn wrap-nocache [handler]
  (fn [request]
    (-> request
        handler
        (assoc-in [:headers "Pragma"] "no-cache"))))

(defn wrap-formats [handler]
  (wrap-format handler))

(defn response-handler [request]
  (r/ok
   (str "<html><body> your IP is: "
        request
        "</body></html>")))

(defn post-handler [request]
  (r/ok
   (str (:query-string request))))

(defn get-with-value-handler [{{x :value} :path-params}]
  (r/ok
   (str "<p>the value is: " x "</p>")))

(def routes
  [["/" {:get response-handler
         :post post-handler}]
   ["/echo/:value" {:get get-with-value-handler}]])

(def handler 
  (reitit/ring-handler
   (reitit/router routes)))

(defn -main []
  (jetty/run-jetty
   (-> #'handler
       wrap-nocache
       wrap-reload)
   {:port 3000
    :join? false}))
