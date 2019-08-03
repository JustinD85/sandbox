#!/bin/sh
# DO NOT FORGET TO MAKE THESE EXECUTABLE!!
#These should be littered throughout the playground for getting some context on
#what I am doing or important notes for this directory

echo "\n\nFrom 'Programming in Scala 3rd' Martin Odersky et al\n"
echo "Give me a term to search for:> "

#Start of search
while :
do
  printf ":=> " && read SEARCH_TERM
  FOUND_TERM=false 

  case $SEARCH_TERM in 
    list)
      echo "List Definition!"
      ;;
    tuple)
      echo "Tuple Definition"
      ;;
    exit)
      echo "Seeya!"
      break
      ;;
    --help)
      echo "Command \t Outcome \n\n
  list \t\t Definition \n
  tuple \n 
  exit \t\t Exits program"
      ;;
    *) echo "Sorry, I don't understand. Type --help for commands"
      ;;
  esac
done

echo "End of Program"

  #[ $SEARCH_TERM = "List" ] && echo "List defintion" && FOUND_TERM=true

