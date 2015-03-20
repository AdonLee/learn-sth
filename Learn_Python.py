#数据类型
#整数，浮点数，字符串，布尔值(True/False, and/not/or)，空值(None)
#python 视0、''，None为False
#list 有序可变数组
  list = []
  list.pop(index || end)
  list.append(val)
  list.insert(index, val)
  list[index]  #可用负数
  list.join()
#tuple 有序不可变数组
  #当只有一个元素是后面加','避免歧义(1,)
  tuple = ()
  tuple[index]
#dict 无序键值对集合，键唯一且不可变，速度快，耗内存
  dict = {}
  dict['key'] = value
  dict.get('key')
  dict.values()       #value list
  dict.itervalues()   #对应生成器
  dict.items()        #tuple(key,value) list
  dict.iteritems()    #对应生成器
  'key' in dict
  for(key in dict)

#set 无序不重复集合， 只能用in判断是否存在或for in遍历
  set = set([]) #传入一个list
  set.add()     #存在？不添加：添加
  set.remove()  #存在？移除：报错（keyError）

#切片 list、tuple、String都可
  list[start=0:end=len:step=1] #start->end-1,step可为负，表示方向切片
#生成列表
  range(start, end, step=1) # start->end-1
  [x*x for x in range(start, end, step=1) if condition]
  [x*x for ... for... if condition]
#格式化字符串
  'kkd%skdkk%sds'%(a, b)
  '{},{}'.format('kzc',18)          #==>'kzc,18'    2.7+
  '{0},{1}'.format('kzc',18)        #==>'kzc,18'    2.6+
  '{1},{0},{1}'.format('kzc',18)    #==>'18,kzc,18' 2.6+
  '{name},{age}'.format(age=18,name='kzc') #==>'kzc,18'

#魔术方法和属性
  __name__ #被当作模块引入是=模块名，直接运行则='__main__'

#if 语句
if [not] condition : pass
elif condition : pass
else : pass

#for 语句
for var in vars: pass

#while 语句
while condition: pass

#类
class child(parents):     #支持多重继承
  __slots__ = (attrs)     # 用tuple定义允许动态绑定的属性名称
  def __init__(self,args):    #构造函数
    self.attr = arg       #公有属性
    self.__attr = arg     #私有属性（前缀两个下划线为私有）
  def __do__(self,args):    #调用方法：对象作为参数传入 do(object)
    pass
  def __call__(self):     #直接执行实例时调用的方法 instance()
    pass
  #属性标志，使方法可当作属性使用，兼顾封装与可用性
  @property     
  def attr(self):       #getter
    return self.attr
  @attr.setter(self, value):  #setter
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
  如果包含yeild语句则生成器

#库目录
/usr/lib64/python2.7

#获取网页
>>> import urllib.request as urlreq
>>> filename, headers = urlreq.urlretrieve('http://python.org/'[, filename])
>>> html = open(filename)
>>> html.close()

#json
import json
  string = json.dumps(json)
  json =  json.loads(string)
  
#bytes to string
  bytes = string.encode(encoding='utf-8')
  string = bytes.decode(encoding='utf-8')

#re
  import re
  m = re.match(re, str)
  m.group(n)

  #获取分组
  re.compile("a(\d{1,3})b").findall('a343bkda43bsk') ==>['343','43']


  os.path.getsize(local_filename)

repr(obj) #return printable representation of object

#os
os.rename(old, new)
os.remove(file)
os.listdir(path)
os.getcwd()               #current working directory
os.chdir(newdir)
os.makedirs(r"c:\python \test")   #多级目录
os.mkdir("test")
os.removedirs(r"c:\python") #删除所给路径最后一个目录下所有空目录。
os.rmdir("test")          
os.stat(file)             #文件属性
os.chmod(file)            
os.system("dir")          #执行系统命令
os.exec(),  os.execvp()   #启动新进程：
osspawnv()                #在后台执行程序
os.exit(),  os._exit()
os.path.splitext(r"c:\python\hello.py") --> ("c:\\python\\hello", ".py")
os.path.split(r"c:\python\hello.py")  --> ("c:\\python", "hello.py")
os.path.join("c:\python", "hello.py") --> "c:\python\hello.py"
os.path.dirname(r"c:\python\hello.py")  --> "c:\\python"
os.path.basename(r"r:\python\hello.py") --> "hello.py"
os.path.exists(r"c:\python\hello.py")   --> True
os.path.isabs(r".\python\")       --> False     # absolute path
os.path.isdir(r"c:\python")       --> True    
os.path.isfile(r"c:\python\hello.py")   --> True
os.path.islink(r"c:\python\hello.py")   --> False
os.path.getsize(local_fname)    #os.stat(local_fname).st_size
os.path.walk(dir)           #searh all files in dir

