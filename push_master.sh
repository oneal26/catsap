#!/bin/bash

git checkout master
git merge feature
git add .
git commit -m "merging master please hold..."
git push origin master
git checkout feature
git pull origin master