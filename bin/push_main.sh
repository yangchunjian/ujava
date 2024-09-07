#!/bin/bash

echo -e "\033[32mCheckout to v7-main\033[0m"
git checkout v7-main

echo -e "\033[32mMerge v7-dev branch\033[0m"
git merge v7-dev -m 'Prepare release'

echo -e "\033[32mPush to origin v7-main\033[0m"
git push origin v7-main

