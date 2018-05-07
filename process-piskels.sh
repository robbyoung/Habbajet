#! /bin/bash

echo "Creating red habbajets..."

rm -rf app/images/habbajets/*
mkdir app/images/habbajets/red
mkdir app/images/habbajets/blue
mkdir app/images/habbajets/green

echo "export function frameCounts(state: string): number {" > app/frame-counts.ts
echo "  switch(state) {" >> app/frame-counts.ts

files=piskel/*.piskel
for f in $files; do
    filename=$(basename $f .piskel)
    echo "Processing $filename"

    awk 'BEGIN { FS = "\"" } { print $37 }' < $f > one.png
    awk 'BEGIN { FS = "\\" } { print $1 }' < one.png > two.png
    magick inline:two.png output.png
    rm one.png
    rm two.png
    
    width=$(magick identify -format '%w' output.png)
    width=$(($width/300))
    
    magick output.png -crop "${width}x1+0+0@" +repage +adjoin "app/images/habbajets/red/$filename.png"
    rm output.png
    echo "    case '$filename': return $width;" >> app/frame-counts.ts 
done

echo "    default: return 0;" >> app/frame-counts.ts
echo "  }" >> app/frame-counts.ts
echo "}" >> app/frame-counts.ts

normalRed="#EA2929"
darkRed="#8B0F0F"
lightRed="#EF6F6F"

normalBlue="#1D4AA3"
darkBlue="#07193C"
lightBlue="#6489D4"

normalGreen="#298D23"
darkGreen="#0B2F08"
lightGreen="#91981E"

echo "Converting to blue..."
magick mogrify -path app/images/habbajets/blue -format png -fill $normalBlue -opaque $normalRed app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/blue -format png -fill $lightBlue -opaque $lightRed app/images/habbajets/blue/*.png
magick mogrify -path app/images/habbajets/blue -format png -fill $darkBlue -opaque $darkRed app/images/habbajets/blue/*.png

echo "Converting to green..."
magick mogrify -path app/images/habbajets/green -format png -fill $normalGreen -opaque $normalRed app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/green -format png -fill $lightGreen -opaque $lightRed app/images/habbajets/green/*.png
magick mogrify -path app/images/habbajets/green -format png -fill $darkGreen -opaque $darkRed app/images/habbajets/green/*.png
