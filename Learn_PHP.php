<?php 
//SPL Standard PHP Libary
  SplDoublyLinkedList:
    SplStack;
    SplQueue;
    bottom
    top
    current
    next    //topword
    prev    //bottomward
    push    //add to top
    unshift //add to bottom
    pop     //pop and delete top
    shift   //get and delete bottom
    valide  //exist
    isEmpty //
    rewind  //repoint to botttom

//字符串处理
  int ord ( string ):Returns the ASCII value of the first character of string.
          ↓↑ 
  string chr ( int $ascii ):Returns a one-character string containing the character specified by ascii. 
  strrev(string) //字符串反转
  strpos strrpos stripos strripos

  str_
    replace()
    ireplace()


//类
  class ClassTest{
    const CONSTVAL = 'constval'; //常量
    static $staticVal = 'static'; //

    //属性
    var       $var = 'value'; //等同于public  在PHP5-5.1.3中使用会报E_STRICT warning
    public    $pub = 'public';
    protected $prot = 'protected';  //实例不可见，子孙类内部可见
    private   $priv = 'private';    //实例不可见，仅限当前类内部使用

    //方法
    public function __construct(){}
    public function myMethod(){}        //实例方法
    public static function myStaticMethod(){}   //静态方法（类方法）
    final   function youCannotOverrideMe(){}    //不可覆盖

    //魔术方法
    public function __get($key){} //调用属性是会调用
    public function __set($key, $val){} //为属性赋值时会调用
  }
  //类继承、实现接口
  class ClassChild extends ClassTest implements Inter1,Inter2{
    //extends,单继承，只一个
    //implements,可多个
  }  
//接口, 一个声明块，用于统一对象方法
  interface Inter1{
    public function dosomething(); //只声明，无函数体
  }
  interface Inter2{
    public function dootherthing(); //只声明，无函数体
  }
  //接口扩展（一个或多个）
  interface ExInter extends Inter1,Inter2{
    public function dowhatever();
  }
//特征（5.4.0开始） ，一个函数块，提高代码复用率
  trait TraitTest {
    public function dosomething(){}
  }
  class ClassTest{
    use TraitTest
  }
//命名空间
  // 类会被默认的放在全局命名空间中，可以被一个\来显式调用
  $cls = new \MyClass();

  // 为一个文件设置一个命名空间
  namespace My\Namespace;
  class MyClass{}
  
  // (或者从其他文件中)
  $cls = new My\Namespace\MyClass;

  //或者从其他命名空间中
  namespace My\Other\Namespace;
  use My\Namespace\MyClass;
  $cls = new MyClass();

  // 你也可以为命名空间起一个别名
  namespace My\Other\Namespace;
  use My\Namespace as SomeOtherNamespace;
  $cls = new SomeOtherNamespace\MyClass();

//require and include
  require()在PHP程序执行前读入,不能在循环体中根据条件的不同而包含不同的文件。只会在第一次执行时调用它所包含的文件中的内容替换本身这条语句，当再次被执行时只能执行第一次所包含的语句。出错时结束执行
  include()在被执行时才会读入,语句可以在循环体中来包含不同的文件。出错时只提醒，继续执行。
  require_once(),include_once():只包含一次，防止重复包含。

//@错误抑制符：表示@符号后的语句如果有错误会忽略,不会提示
  1. 保存当前的error_reporting值, 并设置error_reporting(0); //关闭错误输出
  2. 恢复之前保存的error_reporting值. 

//变量作用域
  1.PHP 中全局变量在函数中使用时必须先申明为全局(globle $var)，这会创建一个到全局变量的引用。

//编码表
  双字节字符编码范围
  1. GBK (GB2312/GB18030)
  \x00-\xff GBK双字节编码范围
  \x20-\x7f ASCII
  \xa1-\xff 中文 gb2312
  \x80-\xff 中文 gbk
  2. UTF-8 (Unicode)
  \u4e00-\u9fa5 (中文)
  \x3130-\x318F (韩文
  \xAC00-\xD7A3 (韩文)
  \u0800-\u4e00 (日文)*/


//正则表达式
  1.后向应用  //后向引用，引用的仅仅是文本内容，而不是正则表达式！
    \n 引用第n个分组 
    \0 整个匹配项
  2.断言
    正先行断言 (?<=X)Y 匹配X在前的Y 
    负先行断言 (?<!X)Y 匹配X不在前的Y
    正后行断言 Y(?=X)  匹配X在后的Y
    负后行断言 Y(?!X)  匹配X不在后的Y

//PHP性能分析工具
  1.XHPorf 源自Fackbook的PHP性能分析工具
  2.ab 压力测试Apache
  3.vld opcode代码分析

//回调, 类似javascript，但是用外部变量需用use显式声明
$var,
function dosomething(function($paras) use($var/*副本*/, &$var/*引用*/){ 
  //dosomething;
})