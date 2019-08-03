#some global variables are available to give context for 
# the environment in which a program is ran

# So: $0-9 and $# and $@ are reserved

printf "\t\t***Reserved variables***\n type --help for list of cmds\n"

while :
  do
   printf ":> " && read COMMAND

   case $COMMAND in 
     exit)
       printf "exiting...\n"
       break
       ;;
     --help)
       printf "\n\n"
       printf "type 'exit' to quit\n\n"
       printf ":Commands:\t \t :Description: \n"
       printf "\n"
       printf " \$0 \t\t lists the program that invoke this script\n"
       printf " \$# \t\t lists the number of parameters passed\n"
       printf " \$1..9 \t\t returns the corresponding parameter in position 1-9\n"
       printf " \$@ \t\t returns all parameters passed\n"
       printf " shift \t\t shifts parameters to the left, leftmost is derefenced\n"
       printf " \$? \t\t contains exit value of last command ran 0=no-err 1=err\n"
       printf " \$\$ \t\t contains the PID of the currently running shell\n"
       printf " \$! \t\t contains the PID of the last ran background process\n"
       ;;
     shift)
       echo "The value of parameters have been shifted!" && shift 
       echo "Check the values of \$1-\$9, \$# and \$@"
       ;;
     \$\$)
       echo "The PID of the current shell is $$"
       ;;
     \$\!)
       echo "The PID of the last ran background process is $!"
       ;;
     \$\?)
       echo "The exit status of the last ran command was $?"
       ;;
     \$0)
       echo "The program that invoked me was $0"
       ;;
     \$#)
       echo "I was called with $# parameters"
       ;;
     \$@)
       echo "All the parameters passed to me were:> $@"
       ;;
     \$1)
       echo "The first parameter passed was $1"
       ;;
     \$2)
       echo "The second parameter passed was $2"
       ;;
     \$3)
       echo "The third parameter passed was $3"
       ;;
     \$4)
       echo "The fourth parameter passed was $4"
       ;;
     \$5)
       echo "The fifth parameter passed was $5"
       ;;
     \$6)
       echo "The sixth parameter passed was $6"
       ;;
     \$7)
       echo "The seventh parameter passed was $7"
       ;;
     \$8)
       echo "The eighth parameter passed was $8"
       ;;
     \$9)
       echo "The ninth parameter passed was $9"
       ;;
     *)
       echo "I do not respond to  $COMMAND, type --help for commands"
       ;;
   esac
 done
