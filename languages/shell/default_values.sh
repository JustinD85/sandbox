#!/bin/bash
#setting some default vals

echo "Hi there."
sleep  1
echo "What is your name? [ bobby brown ] "
sleep 1
read username
sleep 1
printf "You said..:> ${username:=bobby brown}\n"
