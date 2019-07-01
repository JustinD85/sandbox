(defproject ring-app "0.1.0-SNAPSHOT"
  :description "Used to get familiar with the configuration of a ring web server"
  :url "madfunctional.tech"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [ring "1.6.3"]]
  :main ring-app.core
  :repl-options {:init-ns ring-app.core})
