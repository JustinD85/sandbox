(ns maths.core
  (:gen-class)
  (:require [clojure.string :as str]))

;; send to function library
(def to-num (partial #(Integer/parseInt %)))
(def to-str-arr (comp #(str/split (str %) #"")))

(defn split [number]
   (->> number to-str-arr (map to-num)))

(defn sum [number-arr]
  (reduce + number-arr))

;; Check divisibility
(defn bytwo? [number] (even? number))

(defn bythree? [number]
  (-> number split sum (mod 3) (= 0)))

(defn byfour? [number]
  (-> (->> number split reverse (take 2) (apply str))
      read-string (mod 4) (= 0)))

(defn byfive? [numbers]
  (let [ number (-> numbers split last)]
    (or (= 5 number)
        (= 0 number))))

(defn bysix? [number]
  (and
   (bytwo? number)
   (bythree? number)))

(defn byseven? [number]
  (-> number split last (* 5)
      ;; how to take everything NOT LAST TODO
      (+ (->> number split reverse rest  reverse (apply str) to-num))
      (mod 7) (= 0)))

(defn byeight? [number]
  (->> number split (take-last  3) (apply str) to-num (#(mod % 8)) (= 0)))

(defn bynine? [number]
  (-> number split sum (mod 9) (= 0)))

(defn byten? [number]
  (= (-> number split last) 0))

(defn -main
  "Just a playground to get back into clojure <3"
  [& args]
  (print (bythree? 444)))

