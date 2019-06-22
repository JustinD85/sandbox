echo "Type the location of a file to check: "
read file

[ -f $file ] && echo "This is a file"
[ -d $file ] && echo "This is a directory"

if [ -d $file ]
then
    echo ""
    echo "Contents of Directory: "
    echo ""
    ls $file
fi
