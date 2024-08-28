v=`cat loop.txt`
for loop in $v
do
        host $loop | grep "has address" | cut  -d " " -f4
done
