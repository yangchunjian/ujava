#!/bin/bash

e
echo -e "\033[32mCheckout to main\033[0m"
git checkout main

echo -e "\033[32mMerge v7-main branch\033[0m"
git merge v7-main -m 'Release'

echo -e "\033[32mPush to origin main\033[0m"
git push origin main
