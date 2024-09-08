#!/bin/bash

echo -e "\033[32mCheckout to v7-dev\033[0m"
git checkout v7-dev

echo -e "\033[32mAdd to v7-dev\033[0m"
git add .
echo -e "\033[32mCommit to v7-dev\033[0m"
git commit -m "更新成功~"


echo -e "\033[32mPush to origin v7-dev\033[0m"
git push origin v7-dev

