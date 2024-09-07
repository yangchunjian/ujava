#!/bin/bash

echo -e "\033[32mCheckout to v7-dev\033[0m"
git checkout v7-dev

echo -e "\033[32mPush to origin v7-dev\033[0m"
git push origin v7-dev
echo -e "\033[32mPush to osc v7-dev\033[0m"
git push osc v7-dev
