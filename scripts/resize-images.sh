#!/bin/bash
# This script resizes all the images it finds in a folder (and its subfolders) and resizes them
# The resized image is placed in the /resized folder which will reside in the same directory as the image
#
# Usage: > ./batch_resize.sh

initial_folder="../public/images/cards" # You can use "." to target the folder in which you are running the script for example
resized_folder_name="tmp"

all_images=$(find -E $initial_folder -iregex ".*\.(jpg|gif|png|jpeg)")

while read -r image_full_path; do
    filename=$(basename "$image_full_path");
    source_folder=$(dirname "$image_full_path");
    destination_folder=$source_folder"/"$resized_folder_name"/";
    destination_full_path=$destination_folder$filename;

    if [ ! -z "$image_full_path" -a "$image_full_path" != " " ] &&
        # Do not resize images inside a folder that was already resized
        [ "$(basename "$source_folder")" != "$resized_folder_name" ]; then 

        mkdir "$destination_folder";
        sips -Z 20 "$image_full_path" --out "$destination_full_path";

    fi

done <<< "$all_images"