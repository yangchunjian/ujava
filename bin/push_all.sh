#!/bin/bash

echo -e "\033[32mpush_dev success~\033[0m"
sh bin/push_dev.sh
echo -e "\033[32mpush_main success~\033[0m"
sh bin/push_main.sh
echo -e "\033[32mpush success~\033[0m"
sh bin/push.sh
