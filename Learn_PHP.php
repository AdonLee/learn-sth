//SPL Standard PHP Libary
	SplDoublyLinkedList:
		SplStack;
		SplQueue;
		bottom
		top
		current
		next  	//topword
		prev  	//bottomward
		push  	//add to top
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
//可见性（默认为public）
用var声明变量等同于public  在PHP5-5.1.3中使用会报E_STRICT warning
	private.protect实例对象不可访问，只能类内部调用，neither parent nor child。
	子类中private不可见，protected可见不可访问
	父子类中同public属性会发生覆盖，且只维护最后的值。private属性由于父子类隔离，故独立存在根据调用对象动态决定。
	protected共同继承的兄弟类可访问

//覆盖规则
	1.覆盖函数名和参数需相同
	2.final方法不可覆盖
	3.private 方法参加覆盖，其子类不可见

//require and include
	require()在PHP程序执行前读入,不能在循环体中根据条件的不同而包含不同的文件。只会在第一次执行时调用它所包含的文件中的内容替换本身这条语句，当再次被执行时只能执行第一次所包含的语句。出错时结束执行
	include()在被执行时才会读入,语句可以在循环体中来包含不同的文件。出错时只提醒，继续执行。
	require_once(),include_once():只包含一次，防止重复包含。

//@错误抑制符：表示@符号后的语句如果有错误会忽略,不会提示

使用@时的实际操作为：
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
	1.后向应用	//后向引用，引用的仅仅是文本内容，而不是正则表达式！
		\n 引用第n个分组 
		\0 整个匹配项
	2.断言
		正先行断言	(?<=X)Y	匹配X在前的Y	
		负先行断言	(?<!X)Y 匹配X不在前的Y
		正后行断言	Y(?=X)	匹配X在后的Y
		负后行断言	Y(?!X)	匹配X不在后的Y

//PHP性能分析工具
	1.XHPorf 源自Fackbook的PHP性能分析工具
	2.ab 压力测试Apache
	3.vld opcode代码分析