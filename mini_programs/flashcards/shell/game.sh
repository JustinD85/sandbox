#!/bin/bash
# flash card game

G_IFS=$IFS 
IFS="\$" #-E option on cat puts $ to indicate newline, set IFS to match
tabs 4 #sane default for this, stays for the scope of this script 
declare -A resultset #associative array, ver ver fancy
dataset=`cat -E data.csv` #some default data read from current dir, add $ for newline

take_turn(){
  question=$1
  answer=$2
  category=$3
    printf "What is this in english? $question\n:> " && read user_response
  [ resultset[$category] ] || resultset[$category]=0 
  [ ${user_response:=b} != $answer ] && #:= shell parameter expansion... if user_response is unset, set it to 'b'
    resultset[$category]=$(("${resultset[$category]}"+1)) &&
    echo -e "\e[0;33m\n\n\
    =========================\n\
    \t\tBooBoo!\n \t\tAdd 1 to wrong count.\n\
    =========================\n\n\e[0m" ||
    echo -e "\e[92m\n\n\
    ========================\n\
    \t ***Correct***\n\
    ========================\n\n\e[0m"
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

  echo -e "\e[33m\t\t\t$key Summary \n\
    ============================\n\t\
    Correct\t:\t`bc <<< "$max-$wrong"`\n\t\
    Incorrect\t:\t$wrong \n\
    ========Percentage==========\n\t\
    Correct\t:\t${percentage}%\n\t\
    Incorrect\t:\t${percentage}%\n\
    ============================\n\n\e[0m"
done
echo -e "\n Hope you enjoyed the Game! Report any bugs to: \e[33m madfunctionaltech@gmail.com\e[0m"
exit 0
