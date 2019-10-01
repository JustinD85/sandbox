#!/bin/bash
# flash card game
G_IFS=$IFS
IFS="\$" #-E option on cat puts $ to indicate newline, set IFS to match
tabs 4 #sane default for this
declare -A resultset #associative array, ver ver fancy
dataset=`cat -E data.csv` #some default data read from current dir, add $ for newline

take_turn(){
  question=$1
  answer=$2
  category=$3
    printf "What is this in english? $question\n:> " && read user_response
  [ resultset[$category] ] || resultset[$category]=0
  [ ${user_response:=b} != $answer ] &&
    resultset[$category]=$(("${resultset[$category]}"+1)) &&
    echo -e "\n\n\
    =========================\e[0;33m\n\
    \t\tBooBoo!\n \t\tWrong count by 1.\e[1;33m\n\
    =========================\n\n" ||
    echo -e "\n\n\
    ========================\e[0;34m\n\
    \t ***Correct***\e[1;33m\n\
    ========================\n\n"
}

for line in $dataset #separator is $ still
do
  OLDIFS=$IFS #caching old value of the internal field separator
  IFS="," #redefining the internal field separator temporarily
  take_turn $line #gives the whole comma separated line
  IFS=OLDIFS #returns old value to IFS
done

 IFS=G_IFS #resets internal field separator value to og value

 for key in "${!resultset[@]}"
 do 
   max=`echo $dataset | grep -c $key`
   wrong="${resultset[$key]}"
   percentage=`bc -l <<< "scale=1; ($wrong/$max)*100"`

   echo -e "\e[1;33m\t\t\t$key Summary \n\
     ============================\e[0;33m\n\t\
     Correct\t:\t`bc <<< "$max-$wrong"`\n\t\
     Incorrect\t:\t$wrong \n\e[1;33m\
     ========Percentage==========\e[0;33m\n\t\
     Correct\t:\t${percentage}%\n\t\
     Incorrect\t:\t${percentage}%\n\e[1;33m\
     ============================\n\n"
 done
