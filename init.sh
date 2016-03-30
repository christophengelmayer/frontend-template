#!/bin/bash

### VARS ###
repository=git@github.com:slashadmin/frontend-template.git
npmcmd="npm install --save-dev"
npm_dependencies=( \
    'glob' 'grunt' 'jit-grunt' \
    'grunt-contrib-watch' \
    'grunt-contrib-uglify' \
    'grunt-contrib-jshint' \
    'grunt-contrib-imagemin' \
    'grunt-newer' \
    'grunt-sass' \
    'grunt-rsync' \
    'grunt-browser-sync' \
    'grunt-postcss' \
    'autoprefixer' \
    )
bowercmd="bower install -S"
bower_dependencies=( \
    'inuit-starter-kit' \
    )
tmp_folder=_tmp_frontend_template
current_folder=${PWD##*/}


### FUNCTIONS ###
ask () {
    read -p "$1 ($2): " value
    value=${value:-$2}
    echo $value
}


### ASK FOR INPUT ###
variables=( 'project_name' 'src_path' 'dist_path')
project_name=$(ask "Project name" "$current_folder")
src_path=$(ask "Src path" "src")
dist_path=$(ask "Dist path" "dist")

### CLONE TEMPLATE FILES ###
echo "Cloning Repository"
git clone $repository $tmp_folder #DEV: cp -r ../frontend-template ./$tmp_folder

### SET VARIABLES IN TEMPLATES ###
echo "Setting variables"
findcmd="find -E ./$tmp_folder -type f -regex '.*\.(js|json|scss)' -exec sed -i ''"
for element in ${variables[@]}
do
    findcmd="$findcmd -e 's,__${element}__,${!element},g'"
done
eval "$findcmd {} +"

### COPY FILES TO THEIR DESTINATION ###
echo "Copy files"
cp $tmp_folder/template/*.* .
mv ./$tmp_folder/template/src ./$src_path
mv ./$tmp_folder/template/dist ./$dist_path
rm -rf $tmp_folder

### INSTALL DEPENDENCIES ###
for element in ${bower_dependencies[@]}
do
    bowercmd="$bowercmd ${element}"
done
eval $bowercmd

for element in ${npm_dependencies[@]}
do
    npmcmd="$npmcmd ${element} "
done
eval $npmcmd

