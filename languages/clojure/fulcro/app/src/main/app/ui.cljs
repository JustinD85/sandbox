(ns app.ui
  (:require
   [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
   [com.fulcrologic.fulcro.dom :as dom :refer [div p ul li h5 h4]]))

(defsc Person [this {:person/keys [name age]}]
  (li
   (h5 (str name " (age: " age ")"))))

(def ui-person (comp/factory Person {:keyfn :person/name}))

(defsc PersonList [this {:list/keys [label people]}]
  (div
   (h4 label)
   (ul
    (map ui-person people))))

(def ui-person-list (comp/factory PersonList))

(defsc Root [this {:keys [ui/react-key]}]
  (let [ui-data {:friends {:list/label "Friends" :list/people
                           [{:person/name "Bobby" :person/age 28}
                            {:person/name "Beth" :person/age 82}]}
                 :enemies {:list/label "Enemies" :list/people
                           [{:person/name "EBobby" :person/age 82}
                            {:person/name "EBeth" :person/age 28}]}}]

    (div
     (ui-person-list (:friends ui-data))
     (ui-person-list (:enemies ui-data)))))
