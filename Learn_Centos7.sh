
#Centos7新特性
  #centos最小好化安装没有ifconfig命令
    yum clean all 
    yum install net-tools #ifconfig命令在net-tools软件包里，nslookup,dig在bind-utils中
  #centos使用了systemd来代替sysvinit。systemd的服务管理程序systemctl是最主要的工具。它融合 service 和chkconfig的功能于一体。你可以使用它永久性或只在当前会话中启用/禁用服务。  
    systemd-cgls以树形列出正在运行的进程。它可以递归显示给定控制组内容。
    #foo服务启动/停止/重启/查看状态 
    systemctl (start|stop|restart|status) foo.service 
    #设置开机启动/禁止  
    systemctl (enable|disable) foo.service
    #查看服务是否开机启动：
    systemctl is-enabled iptables.service;echo $?
  #修改运行级别：systemd使用比sysvinit的运行级更为自由的 target 概念作为替代。 
    systemctl isolate (multi-user|runlevel3).target  #后者为前者的符号链接
    systemctl isolate (graphical|runlevel5).target   
  #改变默认运行级别:systemd使用链接来指向默认的运行级别。
    #先删除存在的链接： 
    rm /etc/systemd/system/default.target 
    ln -sf /lib/systemd/system/(multi-user|graphical).target /etc/systemd/system/default.target
  #systemd不使用/etc/inittab文件。 如何查看当下运行级别？ 
    #runlevel命令在systemd下仍然可以工作。你可以继续使用它，尽管systemd使用 'target' 概念(多个的 'target' 可以同时激活)替换了之前系统的runlevel。
    等价的systemd命令是 
    systemctl list-units --type=target
  #使用grub2引导grub2特点：
    1、模块化设计
    不同于Grub的单一内核结构，Grub 2 的功能分布在很多的小模块中，并且能在运行时动态装载和卸除。
    2、支持多体系结构
    Grub 2可支持PC(i386), MAC(powerpc)等不同的体系机构，而且支持最新的EFI架构。
    3、国际化的支持
    Grub 2 可以支持非英语的语言。
    4、内存管理
    Grub 2 有真正的内存管理系统。
    5、脚本语言
    Grub 2 可以支持脚本语言，例如条件，循环，变量，函数等。

#设置IP地址、网关DNS 
  cd  /etc/sysconfig/network-scripts/  #进入网络配置文件目录\
  vi  ifcfg-eno16777736  #编辑配置文件
    HWADDR=00:0C:29:8D:24:73
    TYPE=Ethernet
    BOOTPROTO=static|dhcp  #启用静态|动态IP地址
    DEFROUTE=yes
    PEERDNS=yes
    PEERROUTES=yes
    IPV4_FAILURE_FATAL=no
    IPV6INIT=yes
    IPV6_AUTOCONF=yes
    IPV6_DEFROUTE=yes
    IPV6_PEERDNS=yes
    IPV6_PEERROUTES=yes
    IPV6_FAILURE_FATAL=no
    NAME=eno16777736
    UUID=ae0965e7-22b9-45aa-8ec9-3f0a20a85d11
    ONBOOT=yes        #开启自动启用网络连接
    IPADDR0=192.168.21.128  #设置IP地址
    PREFIXO0=24       #设置子网掩码
    GATEWAY0=192.168.21.2   #设置网关
    DNS1=8.8.8.8        #设置主DNS
    DNS2=8.8.4.4        #设置备DNS
    :wq!            #保存退出
  service network restart     #重启网络
  ping www.baidu.com      #测试网络是否正常

#10步配置linux服务
  #1、配置IP地#址、DNS等
    nmtui               #a TUI (curses-based Text User Interface) for NetworkManager
    service network restart     # ifconfig | grep -A1 flags
    cat /etc/resolv.conf
   
  #2、配置主机名主机名        
    #立即生效
      hostname lz.com 
    #永久生效
      echo lz.com> /etc/hostname
    #配置hosts文件
      echo 192.168.220.111   lz.com>> /etc/hosts        
    #查看验证
      hostname
      cat /etc/hostname
      cat /etc/hosts
   
  #3、查看服务包是否安装        
    rpm -q pkg        
   
  #4、安装服务包使用rpm或者yum源        
    rpm -ivh /media/Packages/pkg*
    yum -y install pkg        
   
  #5、查找配置文件       
    rpm -qc pkg       
   
  #6、重启服务        
    service daemon restart        
   
  #7、设置开机自动启动        
    chkconfig daemon on        
   
  #8、配置防火墙        
    firewall-cmd --permanent --add-service=*
    firewall-cmd --permanent --add-port=*/[tcp|udp]
    service firewalld restart        # firewall-cmd --list-services
   
  #9、如果需要调整selinux        
    setenfore 0
    set -i '/^SELINUX/s/=.*/=permissive/' /etc/selinux/config        
   
  #10、测试验证        
    a、本地测试
    b、网络测试        

#设置主机名为www
  hostname  www     #设置主机名为www
  vi /etc/hostname  #编辑配置文件
    www         #修改localhost.localdomain为www
  vi /etc/hosts #编辑配置文件
    127.0.0.1   localhost  www   #修改localhost.localdomain为www
  shutdown -r now  #重启系统

#设置时区/时间
  date  #查看当前时间
  date -s #修改系统时钟
    date 10110155        #将时间调整为10月11日凌晨1点55分： 
    date -s 2005/08/08   #将系统时间设定成2005年8月8日：    
    date -s 20:12:00     #将系统时间设定成下午8点12分0秒： 
  clock -w  #将系统时间强行写入CMOS。
  #根据提示选择时区 
  tzselect 
  #将系统时区文件指向相应的时区文件
  ln -s /etc/localtime  /usr/share/zoneinfo/$主时区(Asia)/$次时区(Shanghai)

#更新源
yum update

#firewalld
  @PREFIX@/lib/firewalld  #被用于默认和备用配置，
  /etc/firewalld      #被用于用户创建和自定义配置文件。
  #允许httpd网络访问
  firewall-cmd --permanent --zoon=public --add-services=http

#iptables

#putty
  root用户：Access denied
    echo PermitRootLogin yes >> /etc/ssh/sshd_config
    service sshd restart or systemctl restart sshd.service
    重新创建一个putty session

#LAMP
  #安装Apache ：vi /etc/httpd/conf/httpd.conf 
    yum install httpd -y
    #打开防火墙
    firewall-cmd --premanent --add-services= http 
    #重载防火墙
    systemctl restart firewalld.service
    #启动
    systemctl start httpd.service
    #客户端测试
  #安装MariaDB
    yum install mariadb mariadb-server -y  #都是小写
    #拷贝配置文件
    cp /usr/share/mysql/my-huge.cnf /etc/my.cnf
    #设置默认编码模式
    “
    #启动
    systemctl start mariadb.service
    #设置root密码
    mysql_secure_installation #根据提示选择y

    #使用root账户，无密码登录：
      mysql -u root
    #选择mysql database:
      use mysql;
    #为root用户更改密码为： 123456（自行设定）：
      update user set password=PASSWORD("123456") where User = 'root';
    #重启
  #安装PHP： /etc/php.ini
    yum install php 
    #安装PHP组件
    yum install php-mysql php-gd libjpeg* php-ldap php-odbc php-pear php-xml php-xmlrpc php-mbstring php-bcmath php-mhash
    #配置
    vi /etc/php.ini
      date.timezone = PRC
    #重启mariadb、httpd
    权限设置：chown apache.apache -R /var/www/html

#AWK文本分析工具
  #以行为单位，以-F参数指定的域分隔符(默认为空格)将每行分割成多个域
  #$0代表当前读取的行 $n代表第n个域
  awk -F separator '(/pattern/)?{statements} (BEGIN|END){statements}'  file_name（支持管道传输）
    执行过程：开始先执行BEGIN里的语句，再以行为单位解析文本，如果符合pattern则执行后面的语句，解析完最后执行END语句。
    statements支持c常用语法，字符串输出需要双引号。可保存在文件中 有-f参数指定
  #内置变量
  ARGC               命令行参数个数
  ARGV               命令行参数排列
  ENVIRON            支持队列中系统环境变量的使用
  FILENAME           awk浏览的文件名
  FNR                浏览文件的记录数
  FS                 设置输入域分隔符，等价于命令行 -F选项
  NF                 浏览记录的域的个数
  NR                 已读的记录数
  OFS                输出域分隔符
  ORS                输出记录分隔符
  RS                 控制记录分隔符


