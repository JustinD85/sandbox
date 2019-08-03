#!/bin/bash
# flash card game

#while read question answer category 
#do 
#  echo -e "\e[1;33m$category \
#    =====================\e[0m\n\
#    question : \t $question\n\
#    answer : \t $answer\n"
#done < $1

declare -A resultset #associative array, ver ver fancy
dataset=`cat data.csv` #some default data read from current dir

read_question(){
  question=$1
  answer=$2
  category=$3
    printf "What is this in english? $question\n:> " && read user_response
  [ resultset[$category] ] || resultset[$category]=0 
  [ $user_response != $answer ] && resultset[$category]=$(("${resultset[$category]}"+1)) &&
    printf "Nope!\n I have increased your wrong count by 1."
  printf "\n\n"
}

for line in $dataset 
do
  OLDIFS=$IFS #caching old value of the internal field separator
  IFS="," #redefining the internal field separator temporarily
  read_question $line #gives the whole comma separated line
  IFS=OLDIFS #returns old value to IFS
done

 # once all questions are answered tally score
 #present result set

