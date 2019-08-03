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
   ["/echo/:value" {:get get-with-value-handler}]
   ["/api"
    {:middleware [wrap-formats]}
    ["/multiply"
     {:post
      (fn [request]
        (r/ok {:result (str request)}))}]]])

(def handler 
  (reitit/routes
   (reitit/ring-handler
    (reitit/router routes))
   (reitit/create-resource-handler
    {:path "/"})
   (reitit/create-default-handler
    {:not-found
     (constantly (r/not-found "404 - Page not found"))
     :method-not-allowed
     (constantly (r/method-not-allowed "405 - Not allowed"))
     :not-acceptable
     (constantly (r/not-acceptable "406 - Not acceptable"))})))

(defn -main []
  (jetty/run-jetty
   (-> #'handler
       wrap-nocache
       wrap-reload)
   {:port 3000
    :join? false}))
