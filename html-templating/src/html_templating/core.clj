(ns html-templating.core
  (:require [selmer.parser :as selmer]))

;;Basic usage of selmer, the context maps would normally live in separate files
(def hi (selmer/render "Hi, {{name}}" {:name "Justin"}))
(defn hi-fn [name]
  (selmer/render "Hi, {{name}}" {:name name}))


