#!/bin/bash
echo "Starting site update..."

git pull --rebase

sudo -u www-data npm i
sudo -u www-data npm run build

# nginx config is pointing to dist_prod
# copy is almost instant
cp -R ./dist/ ./dist_prod

echo "Site updated"
