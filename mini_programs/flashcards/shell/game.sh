#!/bin/bash
# flash card game

#while read question answer category 
#do 
#  echo -e "\e[1;33m$category \
#    =====================\e[0m\n\
#    question : \t $question\n\
#    answer : \t $answer\n"
#done < $1

declare -A resultset
dataset=`cat data.csv`

read_question(){
  question=$1
  answer=$2
  category=$3
    printf "What is this in english? $question\n:> " && read user_response
  [ resultset[$category] ] || resultset[$category]=0 
  [ $user_response != $answer ] && resultset[$category]=$(("${resultset[$category]}"+1))

printf "\n\n"
}

# read line 
while : 
do 
  for line in $dataset 
  do
    OLDIFS=$IFS
    IFS=","
    read_question $line
    IFS=OLDIFS
  done
  break
done
# present question to user
#printf "What is this meaning in English :> \n"
#[ resultset[$category] ] || resultset[$category]=0
#read something
#printf "$category :> ${resultset[$category]}\n"
#resultset[$category]=$(("${resultset[$category]}"+1))
#done < $1
#
#for key in resultset 
#do 
#  echo "${resultset[$key]}"
#done

# increase count of question for category
# handle branch right/wrong
  #right -> nothing
  #wrong -> increment wrong counter with -A resultset[$count]=(increment count)
# once all questions are answered tally score
 #present result set

