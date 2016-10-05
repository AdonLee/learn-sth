//配置
npm config
    get
      userconfig/globleconfig #查看用户/全局配置文件路径（内置配置文件为npm下的npmrc文件）
      <key> #查看配置项

    set
      <key> <value> [-g | --global] #设置
    delete
      <key> #删除
    list
    edit

//配置指向源
npm config set registry http://registry.cnpmjs.org

//安装express
npm install  -g expresss express-generator
  express4.0版本中将命令工具分家出来了,需同时安装express-generator
express  projname   //创建项目
cd projname         //进入工作目录
npm install         //添加依赖
npm start           //启动

npm install mongoose connect-


//child_process 及进程通信
child = require('child_process');

// 1.调用系统shell，执行一段脚本
exec = child.exec('command line', function (err, stdout, stderr) {})

// 2.调用系统shell，执行一个脚本文件
exec = child.execFile('command file', [args], function (err, stdout, stderr) {})

// 3.fork一个nodejs进程，执行一个js文件,会在父进程与子进程直接建立一个IPC管道
fork = child.fork('**.js');

// 4.执行指定程序
spawn = child.spawn('process', [args], {options});
// 通过把options参数的stdio设为['ipc']，可在父子进程之间建立IPC管道

//监听子程序输出
child.stderr.setEncoding('utf8');
child.stderr.on('data', function(data){})
child.stdout.on('data', function(data){})

//IPC(InterProcessCommunicate)管道，用于父子进程之间的通信。
//监听、发送子进程消息
parent.on('message', function(msg){})
parent.send({})
//子进程中发送接收信息
process.on('message', function(msg){})
process.send({});
