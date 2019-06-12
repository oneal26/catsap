#!/bin/bash

git pull origin feature
git checkout master
git add .
git commit -m "merging master please hold..."
git push origin master
