#数据类型
	#list 
	list.pop(index || end)
	list.insert(index, val)
	list[index]  
	#tuple	('a', 'b', 'c')
	tuple[index]
	#dic (key-value)

	#set

#类
class child(parents):			#支持多重继承
	__slots__ = (attrs)			# 用tuple定义允许动态绑定的属性名称
	def __init__(self,args):   	#构造函数
		self.attr = arg				#公有属性
		self.__attr = arg			#私有属性（前缀两个下划线为私有）
	def __do__(self,args):   	#调用方法：对象作为参数传入 do(object)
		pass
	def __call__(self):			#直接执行实例时调用的方法 instance()
		pass
	#属性标志，使方法可当作属性使用，兼顾封装与可用性
	@property 		
	def attr(self):				#getter
		return self.attr
	@attr.setter(self, value):	#setter
		self.attr  = value

	#方法定义是第一个参数必须是self，用于对自身的引用，方法调用时忽略

	#动态绑定方法
		from types import MethodType
		s.set_age = MethodType(set_age, s, Student) # 给实例绑定一个方法
		Student.set_score = MethodType(set_score, None, Student)#给类绑定方法
dir(object)  #获取对象所有属性与方法


#高级函数(可传入传出函数作为参数的函数)
	#映射
	map(func, list)  => [func(i) for i in list]
	reduce(func, list) => func(...func(func(list[0], list[1]),list[2])...)
	sorted(list [, func(pre, next)])  # pre, next = next, pre if return >0

#匿名函数
	lambda args：statements #没有return语句，statements结果即为输出

#库目录
/usr/lib64/python2.7

#获取网页
>>> import urllib.request
>>> filename, headers = urllib.request.urlretrieve('http://python.org/'[, filename])
>>> html = open(filename)
>>> html.close()

#json
import json
	string = json.dumps(json)
	json =	json.loads(string)
	

#bytes to string
	bytes = string.encode(encoding='utf-8')
	string = bytes.decode(encoding='utf-8')
#re
	import re
	m = re.match(re, str)
	m.group(n)


	os.path.getsize(local_filename)

repr(obj) #return printable representation of object

#os
os.rename(old, new)
os.remove(file)
os.listdir(path)
os.getcwd()    						#current working directory
os.chdir(newdir)
os.makedirs(r"c:\python \test")		#多级目录
os.mkdir("test")
os.removedirs(r"c:\python") 		#删除所给路径最后一个目录下所有空目录。
os.rmdir("test")					
os.stat(file)						#文件属性
os.chmod(file)						
os.system("dir")					#执行系统命令
os.exec(), 	os.execvp()				#启动新进程：
osspawnv()							#在后台执行程序
os.exit(), 	os._exit()
os.path.splitext(r"c:\python\hello.py") --> ("c:\\python\\hello", ".py")
os.path.split(r"c:\python\hello.py") 	--> ("c:\\python", "hello.py")
os.path.join("c:\python", "hello.py")	--> "c:\python\hello.py"
os.path.dirname(r"c:\python\hello.py") 	--> "c:\\python"
os.path.basename(r"r:\python\hello.py") --> "hello.py"
os.path.exists(r"c:\python\hello.py") 	--> True
os.path.isabs(r".\python\") 			--> False 		# absolute path
os.path.isdir(r"c:\python") 			--> True		
os.path.isfile(r"c:\python\hello.py") 	--> True
os.path.islink(r"c:\python\hello.py") 	--> False
os.path.getsize(filename)				#get file size
os.path.walk(dir)						#searh all files in dir

1.重命名：					
2.删除：					
3.列出目录下的文件 ：		
4.获取当前工作目录：		
5.改变工作目录：			
6.创建多级目录：			
7.创建单个目录：			
8.删除多个目录：			
9.删除单个目录：			
10.获取文件属性：			
11.修改文件权限与时间戳：	
12.执行操作系统命令：		
13.启动新进程：				
14.在后台执行程序：
15.终止当前进程：			
16.分离文件名：				
17.分离扩展名：				
18.获取路径名：				
19.获取文件名：				
20.判断文件或目录是否存在：	
21.判断是否是绝对路径：		
22.判断是否是目录：			
23.判断是否是文件：			
24.判断是否是链接文件：		
25.获取文件大小：			
26.搜索目录下的所有文件：	