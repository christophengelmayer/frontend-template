#!/bin/bash

### VARIABLES ###
repository=git@github.com:slashadmin/frontend-template.git
current_folder=${PWD##*/}
tmp_folder=_tmp_frontend_template

### FUNCTIONS ###
ask () {

}

replace_variable_with_in_file () {
    sed 's/{{__$1__}}/$2/g' $3 > $3
}

# echo "Project name: ($current_folder)"
# read project_name
# if project_name == '' then
#     project_name=current_folder
# fi

# read -p "Enter: " name
# name=${name:-$current_folder}
# echo $name

### ASK FOR INPUT ###
# project_name=$(ask "Project name" $current_folder)
# echo $project_name

### CLONE AND COPY SOURCE FILES ###
echo "Cloning Repository"
git clone $repository $tmp_folder
echo "Copy files"
cp $tmp_folder/* .

### UPDATE VARIABLES IN TEMPLATES ###
# replace_variable_with_in_file project_name $project_name

