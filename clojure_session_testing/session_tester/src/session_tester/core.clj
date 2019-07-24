(ns session-tester.core
  (:require [expiring-map.core :as em])
  (:gen-class))

(def cache  (em/expiring-map 10))
(em/assoc! cache :love "leeeeee")
(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!")
  (println (get cache :love)))
