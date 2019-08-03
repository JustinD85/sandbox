#some global variables are available to give context for 
# the environment in which a program is ran

# So: $0-9 and $# are reserved

echo "Reserved variables, type --help for list of cmds"

while :
  do
   printf ":> " && read COMMAND

   case $COMMAND in 
     exit)
       echo "exiting..."
       break
       ;;
     --help)
       echo "type 'exit' to quit"
       ;;
     *)
       echo "your command was $COMMAND"
       ;;
   esac
 done
