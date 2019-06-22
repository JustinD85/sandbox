#!/bin/bash
#Print to command line
MESSAGE="Scripting isn't that bad so far!"
echo "Leveling up my scripting. $MESSAGE"

HOST=$(hostname)
echo "This script is running on $HOST"

FILE=~/etc/shadow

if [ -e "$FILE" ]
then
    echo "Shadow passwords are enabled"
fi
