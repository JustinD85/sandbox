(ns fullstack_graphdb.ui.root
  (:require
    [fulcro.client.dom :as dom :refer [div ul li p h3]]
    [fulcro.client.primitives :as prim :refer [defsc]]
    [fullstack_graphdb.model.user :as user]
    [fullstack_graphdb.ui.components :as comp]
    [taoensso.timbre :as log]))

(defsc User [this {:user/keys    [name]
                   :address/keys [street city]}]
  {:query [:user/id :user/name :address/street :address/city]
   :ident [:user/id :user/id]}
  (li :.ui.item
    (div :.content
      (str name (when street (str " of " street ", " city))))))

(def ui-user (prim/factory User {:keyfn :user/id}))

(defsc Root [this {:keys [all-users]}]
  {:query         [{:all-users (prim/get-query User)}]
   :initial-state {:all-users []}}
  (div :.ui.segments
    (div :.ui.top.attached.segment
      (h3 :.ui.header
        "Welcome to Fulcro!")
      ;; TODO add this to the docs at git@github.com:fulcrologic/fulcro/tree/develop/docs
      (p
        "This is full-stack demo content that shows off some of the power of Pathom when used with Fulcro.  The
        'add user' button will randomly generate a user's id/name, and transact it with the server via a mutation join
        (a transaction that can read after writing) which returns the
        newly created user with additional autogenerated server details (in this case address info).")
      (p
        "The resolvers and mutations are in model/user.clj(s).  The UI will query for all users on start, so after you
        add some, be sure to reload the page and see it come back.")
      (p
        "Make sure you've installed Fulcro Inspect, and your Chrome devtools will let you examine all of the details
        of the running fullstack_graphdb!"))
    (div :.ui.attached.segment
      (div :.content
        (div "Your system has the following users in the database:")
        (ul :.ui.list
          (map ui-user all-users)))
      (dom/button :.ui.icon.button
        {:onClick (fn []
                    (let [id (str (random-uuid))]
                      (log/info "Adding user")
                      ;; NOTE: The lack of quoting works because we're using declare-mutation from incubator. see model.cljs
                      ;; NOTE 2: This is a "mutation join".  The mutation is sent with a query, and on success it
                      ;; returns the user.  This allows the server to tack on an address without us specifying it,
                      ;; and also have the local database/ui update with it.
                      (prim/transact! this [{(user/upsert-user {:user/id   id
                                                                :user/name (str "User " id)})
                                             (prim/get-query User)}])))}
        (dom/i :.plus.icon)
        "Add User"))))