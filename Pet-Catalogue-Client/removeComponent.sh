#!/bin/bash
if [ "$#" -ne 1 ]; then
    echo "Input a component to delete"
    exit 1
fi

# finds folder with component name and deletes
find . -type d -name $1 | xargs rm -rf

# removes lines referencing the component from app.module.ts
grep -v $1 app.module.ts > temp
mv temp app.module.ts

componentName=$1
componentName+="Component"

grep -v -i $componentName app.module.ts > temp
mv temp app.module.ts