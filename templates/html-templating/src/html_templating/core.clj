(ns html-templating.core
  (:require [selmer.parser :as selmer]
            [selmer.filters :as filters]))

;; TEMPLATE EXAMPLES
;; default location of .html files is the resources folder
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

(def hello-with-nested-map
  (selmer/render "<p>Hello, {{user.first-name}} {{user.last-name}}.</p>"
                 {:user {:first-name "Joe" :last-name "Buddy"}}))

;; FILTERING EXAMPLES
;; allows for post-processing values before they are rendered (upperCase, etc)
;; syntax {{value|modifier}}

;; create custom filter: (filters/add-filter! :key modifier)
(filters/add-filter! :empty? empty?)
(def no-files
(selmer/render "{% if files|empty? %} no files {% else %} there are files {% endif %}"
               {:files []});;this is a no files example
  )

(def are-files
(selmer/render "{% if files|empty? %} no files {% else %} there are files {% endif %}"
               {:files ['f1 'f2 'f3]});;this is a files example
)

;; TAGS EXAMPLES
;; Template Tags (blocks)
;; where I put clojure code, can use filters here..etc
;; syntax: {{variable}} || {% code %} filler content {% endcode %}
;; BEWARE CACHING DURING DEVELOPMENT!!, turn off with: (selmer/parser/cache-on!/off!)

;;make my own tag
(selmer/add-tag!
 :upcase
 (fn [args context-map content]
   (.toUpperCase (get-in content [:upcase :content])))
 :endupcase)

;;start and end of the block tag are the keys defined here. the fn is given a content-map that is keyed
;; according to the name of the block tag
(selmer/render
 "{% upcase} I pity the {{foo}}, mhm!" {:foo "pErSoN"})
