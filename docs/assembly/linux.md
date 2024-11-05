---
title: 组件Linux
icon: laptop-code
category:
  - 设计组件
tag:
  - 组件
---
在 Linux 系统中，有许多常用的命令用于日常操作、文件管理、系统监控、网络管理等。以下是一些常用的 Linux 命令以及它们的简单说明：

### 1. 文件和目录管理

- **`ls`**: 列出目录内容

    ```bash
    ls            # 列出当前目录的文件和文件夹ls -l         # 列出文件的详细信息ls -a         # 列出所有文件，包括隐藏文件
    ```

- **`cd`**: 切换目录

    ```bash
    cd /path/to/directory  # 切换到指定目录cd ..                  # 返回上一级目录cd ~                   # 返回到用户的主目录
    ```

- **`pwd`**: 显示当前工作目录

    ```bash
    pwd  # 显示当前所在的目录
    ```

- **`mkdir`**: 创建新目录

    ```bash
    mkdir mydir            # 创建一个名为 mydir 的目录mkdir -p parent/child  # 创建父目录及其子目录（如果父目录不存在）
    ```

- **`rm`**: 删除文件或目录

    ```bash
    rm file.txt           # 删除文件rm -r directory       # 删除目录及其所有内容rm -f file.txt        # 强制删除文件（无提示）rm -rf /*             # 跑路命令，慎用！！！
    ```

- **`cp`**: 复制文件或目录

    ```bash
    cp file1 file2        # 复制文件cp -r dir1 dir2       # 递归复制目录及其内容
    ```

- **`mv`**: 移动或重命名文件

    ```bash
    mv file1 file2        # 重命名文件mv file1 /path/to/dir # 移动文件到指定目录
    ```

- **`touch`**: 创建空文件或更新文件时间戳

    ```bash
    touch newfile.txt     # 创建新文件或更新现有文件的时间戳
    ```

- **`cat`**: 显示文件内容

    ```bash
    cat file.txt          # 显示文件内容
    ```

- **`more` / `less`**: 分页查看文件内容

    ```bash
    less file.txt         # 分页查看文件内容more file.txt         # 逐页查看文件内容
    ```

- **`find`**: 搜索文件

    ```bash
    find /path -name filename      # 按名称搜索文件find /path -type d -name dir   # 搜索目录
    ```


### 2. 系统管理和监控

- **`top`**: 实时显示系统进程信息

    ```bash
    top                         # 实时查看系统资源和进程
    ```

- **`htop`**: 更友好的进程查看工具（需要单独安装）

    ```bash
    sudo apt install htophtop                         # 启动 htop 进程监控工具
    ```

- **`ps`**: 查看当前正在运行的进程

    ```bash
    ps aux                       # 显示所有正在运行的进程ps -ef                       # 显示详细的进程信息
    ```

- **`kill`**: 终止进程

    ```bash
    kill PID                     # 使用进程 ID（PID）终止进程kill -9 PID                  # 强制终止进程
    ```

- **`df`**: 查看磁盘空间使用情况

    ```bash
    df -h                        # 以人类可读的格式显示磁盘使用情况
    ```

- **`du`**: 查看目录大小

    ```bash
    du -h                        # 显示当前目录下所有文件和文件夹的大小du -sh folder                # 显示指定目录的大小
    ```

- **`free`**: 查看内存使用情况

    ```bash
    free -h                      # 以人类可读的格式显示内存使用情况
    ```

- **`uptime`**: 查看系统运行时间

    ```bash
    uptime                       # 显示系统的运行时间及负载
    ```

- **`uname`**: 显示系统信息

    ```bash
    uname -a                     # 显示完整的系统信息
    ```

- **`shutdown`**: 关闭或重启系统

    ```bash
    sudo shutdown -h now         # 立即关闭系统sudo shutdown -r now         # 立即重启系统
    ```

- **`reboot`**: 重启系统

    ```bash
    sudo reboot                  # 重启系统
    ```


### 3. 权限和用户管理

- **`chmod`**: 修改文件权限

    ```bash
    chmod 755 file      # 设置文件权限为 755，数字表示法使用三个数字来指定权限，每个数字表示用户、组和其他用户的权限。chmod u+x file      # 给文件的所有者添加可执行权限，字母表示法允许你使用字符来添加、移除或设置权限
    ```

- **`chown`**: 更改文件所有者

    ```bash
    sudo chown user:group file   # 更改文件的所有者和组
    ```

- **`useradd`**: 创建用户

    ```bash
    sudo useradd  usernamesudo useradd -M username #不创建用户主目录sudo passwd username # 设置密码
    ```

- **`groupadd`**: 创建用户组

    ```bash
    sudo groupadd groupnamesudo usermod -G groupname username #把用户添加到组，如果已有组会替换sudo usermod -aG groupname username #把用户附加到组，不会替换其他组，一个用户可以在多个组sudo usermod -aG sudo username #这将把用户 username 添加到 sudo 组，从而授予他们超级用户权限，非root用户执行命令可以不用sudo。sudo usermod -aG docker username  #假设安装了docker，这将把用户 username 添加到 docker 组，用户执行docker命令可以不用加sudo。
    ```


### 4. 网络管理

- **`ping`**: 检测网络连接

    ```bash
    ping google.com              # 测试到 google.com 的连通性
    ```

- **`ifconfig`**: 查看或配置网络接口（旧版本中常用）

    ```bash
    ifconfig                     # 查看网络接口信息
    ```

- **`ip`**: 查看或配置网络接口（新版本中推荐）

    ```bash
    ip addr show                 # 显示网络接口和 IP 地址
    ```

- **`netstat`**: 查看网络连接和端口（需要安装 `net-tools`）

    ```bash
    sudo apt install net-toolsnetstat -tuln                # 查看监听的端口
    ```

- **`ss`**: 查看网络连接（`netstat` 的替代工具）

    ```bash
    ss -tuln                     # 查看正在监听的端口
    ```

- **`curl`**: 请求网页或 API

    ```bash
    curl http://example.com      # 发送 HTTP 请求并获取网页内容
    ```

- **`wget`**: 下载文件

    ```bash
    wget http://example.com/file.zip  # 下载文件
    ```


### 5. 软件包管理（基于 Debian/Ubuntu 系统）

- **`apt`**: 管理软件包

    ```bash
    sudo apt update                   # 更新软件包列表sudo apt upgrade                  # 更新所有已安装的软件包sudo apt install package_name     # 安装软件包sudo apt remove package_name      # 删除软件包sudo apt autoremove               # 自动删除不再需要的包
    ```


### 6. 文本处理

- **`grep`**: 搜索文本内容

    ```bash
    grep 'search_term' file.txt       # 在文件中搜索关键词
    ```

- **`sed`**: 文本替换

    ```bash
    sed 's/old/new/g' file.txt        # 将文件中的 old 替换为 new
    ```

- **`awk`**: 文本处理工具

    ```bash
    awk '{print $1}' file.txt         # 打印文件的第一列
    ```

- **`cut`**: 切割文本

    ```bash
    cut -d':' -f1 /etc/passwd         # 按冒号分隔，显示第一列
    ```


### 7. 压缩和解压

- **`tar`**: 压缩和解压 tar 包

    ```bash
    tar -czvf archive.tar.gz /path    # 压缩目录为 tar.gztar -xzvf archive.tar.gz          # 解压 tar.gz 文件
    ```

- **`zip`**: 压缩 zip 包

    ```bash
    zip -r archive.zip /path          # 压缩目录为 zip
    ```

- **`unzip`**: 解压 zip 包

    ```bash
    unzip archive.zip                 # 解压 zip 文件
    ```

