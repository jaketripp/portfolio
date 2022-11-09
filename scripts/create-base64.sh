#!/usr/bin/env sh

# resize images to size 20
rm -rf ../public/images/cards/tiny
bash resize-images.sh &>/dev/null

cd ../public/images/cards

mkdir tiny
# resize
# find . -type f \( -name "*.jpg" -o -name "*.png" \) -exec bash -c 'sips -Z 20 {} -o tmp/{}' \;
cd tmp
# encode to base64
find . -type f \( -name "*.jpg" -o -name "*.png" \) -exec bash -c 'base64 {} > ../tiny/{}.b64' \;
cd ../tiny
# add data prefix
find . -type f \( -name "*.b64" \) -exec bash -c 'echo -e "data:image/jpeg;base64,$(cat {})" > {}' \;
cd ..
# cleanup
rm -rf tmp


