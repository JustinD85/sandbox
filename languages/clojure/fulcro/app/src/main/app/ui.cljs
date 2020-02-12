(ns app.ui
  (:require
   [app.mutations :as api]
   [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
   [com.fulcrologic.fulcro.dom :as dom :refer [div p ul li h4 h5]]))

(defsc Person [this {:person/keys [id name age] :as props} {:keys [onDelete]}]
  ;; ^ the above simply a macro that results in React-styled Js
  ;; 3rd argument is a map that store computed values from using the comp/computed function

  ;;Below sets a local db value(similar to using localStorage)
  ;;This is viewable in Fulcro inspect
  {:query [:person/id :person/name :person/age]
   :ident (fn [] [:person/id (:person/id props)])
   :initial-state (fn [{:keys [id name age] :as params}] {:person/id id :person/name name :person/age age})}
  (li
   (h5 (str name " (age: " age ")"))
   (dom/button {:onClick #(onDelete id)} "X")))

(def ui-person (comp/factory Person {:keyfn :person/id}))

(defsc PersonList [this {:list/keys [id label people] :as props}]
  {:query [:list/id :list/label {:list/people (comp/get-query Person)}]
   :ident (fn [] [:list/id (:list/id props)])
   :initial-state (fn [{:keys [id label]}]
                    {:list/id id
                     :list/label label
                     :list/people (if (= id :friends)
                                    [(comp/get-initial-state Person {:id 1 :name "Sally" :age 32})
                                     (comp/get-initial-state Person {:id 2 :name "Billy" :age 29})]
                                    [(comp/get-initial-state Person {:id 3 :name "ESally" :age 23})
                                     (comp/get-initial-state Person {:id 4 :name "EBilly" :age 92})])})}
  (let [delete-person (fn [person-id] (comp/transact! this [(api/delete-person {:list/id id :person/id person-id})]))]
    (div
   (h4 label)
   (ul
    (map (fn [p] (ui-person (comp/computed p {:onDelete delete-person}))) people)))))

(def ui-person-list (comp/factory PersonList))

(defsc Root [this {:keys [friends enemies]}]
  ;;Real magic, this is where the check if there is state and if not sets a local db, chain reaction
  {:query [{:friends (comp/get-query PersonList)}
           {:enemies (comp/get-query PersonList)}]
   :initial-state (fn [params] {:friends (comp/get-initial-state PersonList {:id :friends :label "Friends"})
                                :enemies (comp/get-initial-state PersonList {:id :enemies :label "Enemies"})})}
      (div
     (ui-person-list friends)
     (ui-person-list enemies)))
