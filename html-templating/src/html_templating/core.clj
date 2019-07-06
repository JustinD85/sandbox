(ns html-templating.core
  (:require [selmer.parser :as selmer]))

;;Basic usage of selmer, the context maps would normally live in separate files
(def hi
  (selmer/render "Hi, {{name}}" {:name "Justin"}))

(defn hi-fn [name]
  (selmer/render "Hi, {{name}}" {:name name}))

(def hello-from-template
  (selmer/render-file "hello.html" {:name "Joe" :items (range 13)}))

;;Changes location to look for html files
(defn hello-from-another-template []
  ;;look into setting relative path instead
  ;; or, setting project path so I don't have to give absolute path
  (selmer/set-resource-path! "home/falsemotive/Projects/Clojure/playground/html-templating/layouts/html/")
  (selmer/render-file "hello.html" {:name "Joe" :items (range 13)}))
