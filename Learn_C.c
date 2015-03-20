//字符串（字符数组） 包含在双引号内 存储中尾部附加一个空字符为结尾
  strlen(string);    //标准c后包含在string.h中 ，结果不包含结束字符，sizeof则包含

/*gdb*/  
  run(r)                //从头开始执行
  start                 //开始单步执行
  next(n)               //执行下一步
  step(s)               //执行下一步,如遇函数则进入内部
  finish                //连续运行完当前函数
  continue(c)           //连续执行至下一个断点或结束
  quit(q)               //退出

  set var               //修改变量的值
  print(p) 表达式      //
  info(i) [breakpoints|watchpoints|locals] //断点，观察点，局部变量信息
  backtrace(bt)         //查看各级函数调用及参数
  frame(f) 帧编号        //选择栈帧
  list(l) [行号|函数名]  //列出源代码，每次10行
  x pointer             //打印从pointer开始的内容

  break(b) [行号|函数名] [if] //设置断点
  delete/disable breakpoints 断点号|all //删除/禁用断点号
  enable 断点号
  display 变量名       //跟踪变量
  undisplay 跟踪显示号 //