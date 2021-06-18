#!/bin/bash
mogrify -resize "1920" *.JPG
for file in *.JPG
do
	NFILE="$(echo "$file" | sed 's/\([0-9]*\).JPG/\1-th.jpg/')"
	convert $file -resize "x120" $NFILE
done
