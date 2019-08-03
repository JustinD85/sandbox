#!/bin/bash
# flash card game
G_IFS=$IFS 
IFS="\$"

declare -A resultset #associative array, ver ver fancy
dataset=`cat -E data.csv` #some default data read from current dir
#echo $dataset | grep -c "hospitality" 
read_question(){
  question=$1
  answer=$2
  category=$3
    printf "What is this in english? $question\n:> " && read user_response
  [ resultset[$category] ] || resultset[$category]=0 
  [ ${user_response:=b} != $answer ] && resultset[$category]=$(("${resultset[$category]}"+1)) &&
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

 #reset IFS
 IFS=G_IFS

 for key in "${!resultset[@]}"
 do 
   max=`echo $dataset | grep -c $key`
   wrong="${resultset[$key]}"
   percentage=`bc -l <<< "scale=1; ($wrong/$max)*100"`

   echo -e "\e[1;33m\t$key Summary \n\
     ==========================\e[0;33m\n\
     Correct\t:\t`bc <<< "$max-$wrong"`\n\
     Incorrect\t:\t$wrong \n\e[1;33m\
     ========Percentage========\e[0;33m\n\
     Correct\t:\t${percentage}%\n\
     Incorrect\t:\t${percentage}%\n\e[1;33m\
     ==========================\n\n"
 done
