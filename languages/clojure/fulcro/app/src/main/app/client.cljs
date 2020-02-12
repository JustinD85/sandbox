(ns app.client
  (:require
   [app.application :refer [app]]
   [app.ui :as ui]
   [com.fulcrologic.fulcro.application :as app]))


(defn ^:export init []
  (app/mount! app ui/Root "app")
  (js/console.log "Loaded"))

(defn ^:export refresh []
  ;; re-mounting will cause forced UI refresh, update internals, etc.
  (app/mount! app ui/Root "app")
    (js/console.log "Hot reload"))
