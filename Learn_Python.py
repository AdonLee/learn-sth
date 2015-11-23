#数据类型
#整数，浮点数，字符串，布尔值(True/False, and/not/or)，空值(None)
    str.capitalize()    # upper first letter, and lower the rest
    str.title()         # capitalize all word
    str.lower/upper()
    str.casefold()      # Return a version of S suitable for caseless comparisons.
    str.swapcase()      # reverse letter case

    str.encode(encoding="utf-8", errors="strict")
    str.expandtabs(tabsize=8) # convert tab to spaces
    str.replace(old, new[, count])    #
    str.[l|r|]strip(chars=' ')              # kind of special replace
    str.[l|r]just(width[, fillchar=' '])    # pad with fillchar to the len of width
    str.zfill(width:int)                    # str.ljust(width, '0')
    str.center(width[, fillchar=' '])       # Return S centered in a string of length width
    str.[r|]find(sub[, start[, end]]):int   # return -1 on failure
    str.[r|]index                           # raise error on failure
    str.[r|]partition(sep):(before, sep, after)
    str.[r|]split(sep=None, maxsplit=-1)    # empty strings are removed from the result
    str.splitlines(keepend:bool)
    str.join(iterable)
    str.format()
    str.format_map()
    str.count(sub[, start=0[, end=len]])
    str.maketrans()        # static method to create table used by translate
        # (dict)              # replace dict.key with dict.vlaue
        # (old:str, new:str)  # replace old[i] with new[i]
    str.translate(table[, deletechars])   # letter in deletechars was supports being deleted

    str.isalnum()
    str.isalpha()
    str.isdecimal()
    str.isdigit()
    str.isidentifier() # 是否关键字
    str.isnumeric()
    str.isprintable()
    str.isspace()
    str.istitle()
    str.islower/upper()
    str.[end|start]swith()

    int.bit_length()

#python 视0、''，None为False
#list 有序可变数组
    list = [] = list([list])
    list[index:int]  #可用负数
    list.pop(index=END)
    list.append(val)
    list.remove(val)
    list.insert(index:int, val)
    list.extend(iterable)
    list.count(val)
    list.index(value, [start, [stop]])
    list.reverse()
    list.sort(key=None, reverse=False)
    list.copy()
    list.clear()
    'spe'.join(list)

#tuple 有序不可变数组
    #当只有一个元素是后面加','避免歧义(1,)
    tuple = ()
    tuple[index]
    tuple.count(val)
    tuple.index(val, [start, [stop]])
#dict:iterable 无序键值对集合，键唯一且不可变，速度快，耗内存
    dict = {} = dict([mapping|dict|(one=1,two=2)])  # new dictionary
    dict['key'] = value     # wranning: dict.key(js-style )is not support
    dict.get(key[, default])
    dict.pop(key[, default])
    dict.popitem()      # (key, value), raise error if dict is empty
    dict.update(dict...)
    dict.keys()         # dict_keys([key...])
    dict.values()       # dict_values([val...]),  instead of itervalues() in py2 which return iterable
    dict.items()        # dict_items([(key,value)...]),  instead of iteritems() in py2 which return iterable
    dict.copy()         # dict eq copy, but not is
    dict.clear()

#set 无序不重复集合， 只能用in判断是否存在或for in遍历
    set = set([]) #传入一个list
    set.add(value)
    set.pop(val)       # raise KeyError if the set is empty instead of return val
    set.remove(val)    # raise KeyError if val is not member

    set.discard(other)        # discard ele in other
    set.union                 # return A|B
    set.difference            # return A - A&B
    set.intersection          # return A&B
    set.symmetric_difference  # return A|B - A&B
    set.update                # A = A|B
    set.difference_update     # A = A - A&B
    set.intersection_update   # A = A&B
    set.symmetric_difference_update # A = A|B - A&B

    set.issubset()          # contained by other
    set.issuperset(other)   # contains other
    set.isdisjoint()
    set.copy()
    set.clear()

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
    # 普通对象方法,
    def func(self, argv):   # 第一个参数必须是，用于对自身的引用，实际调用时忽略
        pass

    # 类方法
    @classmethod
    def func(class, argv):  # 第一个参数必须时对自身类的应用， 实际调用时忽略
        pass

    # 静态方法
    @staticmethod
    def func(argv):         # 静态方法并没有任何隐式参数, 但是要通过对象或者类进行调用
        pass

    #属性标志，使方法可当作属性使用，兼顾封装与可用性
    @property
    def attr(self):       #getter
        return self.attr
    @attr.setter(self, value):  #setter
        self.attr  = value

    #方法定义是

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
    lambda args:statements  #没有return语句，statements结果即为输出
                                                    #如果包含yeild语句则生成器

#库目录
#/usr/lib64/python2.7

# 文件操作
fd = open(file, mode='r', buffering=-1, encoding=None,
                 errors=None, newline=None, closefd=True, opener=None)
    # 'r'       open for reading (default)
    # 'w'       open for writing, truncating the file first
    # 'x'       create and open for writing, raise FIleExistsError if file already exists
    # 'a'       open for writing, appending to the end of the file if it exists
    # 'b'       binary mode, BufferedReader,BufferedWriter,BufferedRandom
    # 't'       text mode (default), TextIOWrapper
    # '+'       open a disk file for updating (reading and writing)
    # 'U'       universal newline mode (deprecated)
# IOBase
fd.closed  #
fd.fileno()                   # Return the integer ``file descriptor'' that is used by the underlying implementation to request I/O operations from the operating system.
fd.isatt()
fd.truncate(size=None)
fd.seekable()
fd.writable()
fd.readable()
fd.writelines(list)
fd.tell():int               # return file pointer
fd.seek(offset:int, mode=0) # set and return stream position
    # SEEK_SET 0: relate to file head
    # SEEK_CUR 1: relate to current position
    # SEEK_END 2: relate to file tail
fd.readline():str           # return '' if no more
fd.readlines(limit=-1):list
fd.flush() # manully save to disk
fd.close() #

    # RawIOBase(IOBase)
    fd.read(size=-1):bytes           # return '' if no more, if size is unspecified or -1, readall() is called
    fd.readall()
    fd.readinto(bytearray):int      # return number of bytes read
    fd.write(bytes|bytearray):int   # return number of bytes write

        # FileIO(name, mode='r', closefd=True, opener=None)
        fd.mode
        fd.name              # return file argument

    # BufferedIOBase(IOBase)
    fd.raw
    fd.read():bytes     # Read and return up to size bytes
    fd.read1()
    fd.readinto()       # Read up to len(b) bytes into bytearray b and return the number of bytes read.
    fd.readinto1()
    fd.write(bytes|bytearray):int
    fd.detach()

        # BytesIO(BufferedIOBase)
        fd.getbuffer()       # return a r&w reference of the buffer
        fd.getvalue():bytes  #
        fd.read1()            # In BytesIO, this is the same as read().
        fd.readinto1()        # In BytesIO, this is the same as readinto().

        # BufferedReader(BufferedIOBase)
        fd.peek([size])      # return bytes from the stream without advancing the position
        fd.read():bytes     # Read and return up to size bytes
        fd.read1()

        # BufferedWriter(BufferedIOBase)
        fd.flush()          # Force bytes held in the buffer into the raw stream. A BlockingIOError should be raised if the raw stream blocks.
        fd.write(bytes|bytearray):int

        # BufferedRandom(BufferedReader, BufferedWriter)
        fd.seek()
        fd.tell()
    # TextIOBase(IOBase)
    fd.encoding
    fd.errors
    fd.buffer            # <_io.BufferedReader name='./tpl/index.html'>
    fd.detach()          # Separate the underlying binary buffer from the TextIOBase and return it.
    fd.read([size=-1]):str
    fd.seek
    fd.tell
    fd.write(str)
        #TextIOWrapper(TextIOBase)
        fd.line_buffering  # Whether line buffering is enabled.
        #StringIO
        fd.getvalue():str

# fd.next():str        # raise error if no next, text stream only

#获取网页
    import urllib.request as urlreq
    filename, headers = urlreq.urlretrieve('http://python.org/'[, filename])
    html = open(filename)
    html.close()

#json
import json
    string = json.dumps(json, sort_keys=True, indent=4)
    json =  json.loads(string)

#bytes to string
    bytes = string.encode(encoding='utf-8')
    string = bytes.decode(encoding='utf-8')

#re
    import re

    #module level function ==> RE string
    re.split(ReString)
    re.search(ReString)
    re.findall(ReString)
    re.match(ReString)
    re.compile(ReString)
    re.sub(ReString)


    #预编译正则
    REcompiled ＝ re.compile("a(\d{1,3})b", re.X | re.M)
    # Flag    Meaning
    # I  2    IGNORECASE,       Do case-insensitive matches
    # L  4    LOCALE,           Do a locale-aware match
    # M  8    MULTILINE,        Multi-line matching, affecting ^ and $
    # S  16   DOTALL,           Make . match any character, including newlines
    # X  64   VERBOSE           Enable verbose REs, which can be organized more cleanly and understandably.
    # A  256  ASCII,            Makes several escapes like \w, \b, \s and \d match only on ASCII characters with the respective property.

    m = re.match(ReString, str)
    m.group(n)


    #获取分组
    REcompiled.findall('a343bkda43bsk') #==>['343','43']

    #替换
    re.sub("(?P<text>[^\s].*[^\s])", '{/* \g<text> */}', commentBlock)

    os.path.getsize(local_filename)

repr(obj) #return printable representation of object

#os
os.stat(file)             #文件属性
os.rename(old, new)
os.remove(file)
os.getcwd()               #current working directory
os.chdir(newdir)
os.chmod(file)
os.listdir(path)
os.makedirs("./python/test")   #多级目录
os.removedirs("./python/test") #删除所给路径最后一个目录下所有空目录。
os.mkdir("test")
os.rmdir("test")
os.system("dir")          #执行系统命令
os.exec/execvp()          #启动新进程：
osspawnv()                #在后台执行程序
os.exit/_exit()
os.path.splitext()  # (path+name, ".py")
os.path.basename()  # "hello.py"
os.path.split()     # (path, filename)
os.path.join()
os.path.dirname()
os.path.exists()
os.path.isabs()
os.path.isdir()
os.path.isfile()
os.path.islink()
os.path.getsize(local_fname)    #os.stat(local_fname).st_size
os.path.walk(dir)           #searh all files in dir


#pymongo
from pymongo import MongoClient as Mongo
con = Mongo('localhost', 27017)
table = con.plato
table.update({'userid': uid}, {'$set': userInfo}, True )

l.inset({})

l.update(
    { #where
        'sharecontent':{'$exists':true}
        }
    ,{
        #替换document
        {'sharecontent': 'kdkdk', 'voice.whatever': 'weijfs'},
        #更新document
        '$set':{'sharecontent': 'kdkdk', 'voice.whatever': 'weijfs'},
        #删除指定字段
        '$unset':{'accesslist':1,'photo':1}
        }
    ,{
        #默认只处理第一个匹配到的document
        'multi':false
        #如果匹配不到是否新增
        ,'upsert':true
        } #options
    )




