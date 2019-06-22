#!/bin/bash

#Print to command line
MESSAGE="Scripting isn't that bad so far!"
echo "Leveling up my scripting. $MESSAGE"

sleep 1

#Prints name of host machine
HOST=$(hostname)
echo "This script is running on $HOST"

sleep 1

#Checks a file on the host system
FILE=~/etc/shadow

if [ -e $FILE ]
then
    echo "Shadow passwords are enabled"
    if [ -w $FILE ]
    then
        echo "You can write to the shadow file"
    else
        echo "You can NOT write to the shadow file"
    fi
fi

#Utilizes loops
NAMES="man bear pig dog cat sheep"

for NAME in $NAMES
do
    echo $NAME
done

