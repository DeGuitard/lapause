#!/bin/bash

NEWFILE=$1
INCREMENT=$2

for file in `ls|grep -v th|sort -g -r`
do
    filename=$(basename "$file")
    extension=${filename##*.}
    filename=${filename%.*}
    filename=${filename/-th}

    if [ $filename -ge $NEWFILE ];
    then
        mv "$file" "$(($filename + $INCREMENT))".$extension
        mv "${filename}-th.jpg" "$((${filename} + $INCREMENT))-th".jpg
    fi
done
