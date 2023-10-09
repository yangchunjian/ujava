#!/bin/bash

UJAVA_SCRIPT_VERSION=3.0.4


# the usage
usage()
{
    echo "
Usage:
    $0 [-h] [--help]
       [-d] [--deploy]
       [-v <value>] [--version <value>]
       [-p] [--package]
       [--doc] [--install]

Options and Arguments:
 -h,--help                      Print usage
 -d,--deploy                    deploy to central repository
 -v,--version <value>           update version to value
 -p,--package                   Make jar package by Maven
    --doc                       Generate Java doc api for UJava, you can see it in target dir
    --install                   Install UJava to your local Maven repository
EXAMPLES:
  ./ujava.sh --help
  ./ujava.sh --deploy
  ./ujava.sh --version 3.0.4
  ./ujava.sh --package
  ./ujava.sh --doc
  ./ujava.sh --install

WIKI:
  https://ujava.cn/
"
}

# exit shell with err_code
# $1 : err_code
# $2 : err_msg
exit_on_err()
{
    [[ ! -z "${2}" ]] && echo "${2}" 1>&2
    exit ${1}
}


parse_arguments()
{
    #没有参数返回提示信息
    if [ $# -eq 0 ]; then
            usage
            exit 0
    fi
    #有参数做解析
    POSITIONAL=()
    while [[ $# -gt 0 ]]
    do
    key="$1"

    case $key in
        -h|--help)
        usage
        exit 0
        ;;
        --install)
        bin/install.sh
        exit 0
        ;;
        --doc)
        bin/doc.sh
        exit 0
        ;;
        -p|--package)
        bin/package.sh
        exit 0
        ;;
        -v|--version)
        if [ ! -n "$2" ]; then
                echo "ERROR: 新版本不存在，请指定参数2"
                exit
        fi
        #升级版本号
        bin/version_update.sh $2
        exit 0
        ;;
        --deploy)
        #上传制品库
        bin/deploy.sh
        exit 0
        ;;
        *)    # unknown option
        echo -e "\033[33m\033[01m\033[05m unknown option $1,please make option right \033[0m"
        POSITIONAL+=("$1") # save it in an array for later
        shift # past argument
        ;;
    esac
    done
    set -- "${POSITIONAL[@]}" # restore positional parameters
}


# the main
main(){
    ./bin/logo.sh
    echo "UJava script version: $UJAVA_SCRIPT_VERSION"
    parse_arguments "${@}" \
        || exit_on_err 1 "$(usage)"
}

main "${@}"