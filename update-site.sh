#!/bin/bash
echo "Starting site update..."

git pull --rebase

# sudo -u www-data npm i
# sudo -u www-data npm run build
npm run build

rm -Rf ./dist_prod
mkdir dist_prod
cp -R ./build/* ./dist_prod
cp ./static/img/favicon.ico ./dist_prod

echo "Site updated"
