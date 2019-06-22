#echo "Type the location of a FILE to check: "
#read FILE

#Takes filename as argument
FILE=$0

[ -f $FILE ] && echo "This is a file"
[ -d $FILE ] && echo "This is a directory"

if [ -d $FILE ]
then
    echo ""
    echo "Contents of Directory: "
    echo ""
    ls $FILE
fi
