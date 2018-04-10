#! /bin/bash

rm app/images/*

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
    
    magick output.png -crop "${width}x1+0+0@" +repage +adjoin "app/images/$filename.png"
    rm output.png
    echo "    case '$filename': return $width;" >> app/frame-counts.ts 
done

echo "    default: return 0;" >> app/frame-counts.ts
echo "  }" >> app/frame-counts.ts
echo "}" >> app/frame-counts.ts
