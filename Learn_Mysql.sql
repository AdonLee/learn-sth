
一、基本命令 :每条语句一";"结束
	#登录：
		mysql -h 主机名 -u 用户名 -p  :主机名默认本机
	#退出：
		exit/quit/Ctrl+c

	#添加用户
		CREATE USER 'user'@'host' IDENTIFIED BY 'password'
	#为用户授权，可用于添加用户
		GRANT privs ON db_name.tbl_name TO user@host IDENTIFIED password;
	#删除用户，
		直接删除mysql.user表对应行
	#修改密码
		mysql>update mysql.user set password=password('新密码') where User="" and Host=""; 

	#创建数据库：
		CREATE DATABASE [IF NOT EXISTS] db_name params [SELECT ....]  
		CREATE DATABASE smp_db [CHARACTER SET gbk]
	#删除数据库：
		DROP DATABASE [IF EXISTS] db_name
	#查看当前数据库：
		SELECT DATABASE();
	#查看数据库创建信息：
		SHOW CREATE DATABASE db_name
	#修改数据库编码方式：
		ALTER DATABASE db_name CHARACTER SET = utf8
	#查看已有数据库：
		 SHOW DATABASES
	#选择所要操作的数据库：
		1.在登录时用 -D db_name 指定
		2.use db_name

	#创建表：
		CREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name(columns)| SELECT....
			column= col_name data_type(count) set(not null, auto_increment, primary key)
			TEMPORARY:临时表	
	#删除表：	
		DROP TABLE tbl_name
	#修改表名：	
		RENAME TABLE old_name TO new_name
	#查看已创建的表：
		SHOW TABLES
	#查看表内容：
		DESC[RIBE]/SHOW COLUMNS FROM tbl_name;

	#查询：
	SELECT [DISTINCT] col_name [[as] alias] FROM tbl_name
		WHERE col_name 
			cmp_operand ANY|SOME|ALL(subquery)
			[NOT] IN (subquery) 	#subquery结果需带单一记录
			like 'regexp' 			#正则表达式
		ORDER BY (,col_name)+ [asc desc]
		GROUP BY (,col_name)+ 		#col_name的值分组
		HAVING wer_cndtns 			#wer_cndtns里需有聚合函数，或条件列同时在搜索列中
		LIMIT offset=0,row_count | row_count OFFSET offset
		#例子：把name相同的score相加，再根据叠加值降序排序 取第二开始的四条结果
			select name,sum(score) from t1 group by name order by sum(score) desc limit 1,4; 
			
	#插入: 
	INSERT [[IGNORE] INTO] tbl_name 		#IGNORE 已存在则忽视
		[(col_names)] 
			VALUES (default|expression)+; 	#多行插入
			SELECT ....
		SET (col_name = (default|expr))+;	#单行插入，可使用子查询
	#更新: 
	UPDATE tbl_name SET 
		(,col_name = {expr|default})+ (WHERE conditions)?	#单表更新
		expr=replace(col_name,'old_value','new_value')
			|concat('string', col_name);

	#删除行：
	DELETE FROM tbl_name (WHERE conditions)?;

	#创建后的修改
	ALTER TABLE tbl_name 
		ADD    col_name data_type [FIRST|AFTER col_name]	#添加列
		MODIFY col_name data_type [FIRST|AFTER col_name] 	#修改列定义
		CHANGE col_name new_name data_type 					#修改列定义、名称
		DROP   col_name 									#删除列
		RENAME [AS|TO] new_tbl_name							#重命名
		ADD [constaint symbol] 
			FOREIGN KEY (child_col) REFERENCES tbl_name(parent_col)	#添加外键约束 保证数据一致性
			PRIMARY KEY (col_name)									#添加主键约束
			UNIQUE (col_name)										#添加唯一约束
		DROP 
			FOREIGN KEY symbol		#删除外键约束
			PRIMARY KEY 			#删除主键约束,主键在表中是唯一的。
			{INDEX|KEY} index_name	#删除唯一约束
		SHOW CREATE TABLE tbl_name  	#查看约束名symbol
		SHOW INDEXES FROM tbl_name\G  	#以网格形式查看唯一约束symbol
		ALTER col_name (SET DEFAULT literal| DROP DEFAULT) # 设置/删除默认值(默认约束)
		#可同时多个操作,用逗号分开

二、数据类型
	1.整形
		tinyint(m)		1个字节  范围(-128~127)
		smallint(m)		2个字节  范围(-32768~32767)
		mediumint(m)	3个字节  范围(-8388608~8388607)
		int(m)			4个字节  范围(-2147483648~2147483647)
		bigint(m)		8个字节  范围(+-9.22*10的18次方)
	默认为有符号整型，可在后面添加 unsigned 定义为无符号整型
	2.浮动型
		float(m,d)	单精度8位精度(4字节) 
		double(m,d)	双精度16位精度(8字节)   
	 m总个数，d小数位
	3、定点数
		浮点型在数据库中存放的是近似值，而定点类型在数据库中存放的是精确值。 
		decimal(m,d) 参数m<65 是总个数，d<30且 d<m 是小数位。

	4、字符串(char,varchar,_text)
		char(n)		固定长度，最多255个字符
		varchar(n)	固定长度，最多65535个字符
		tinytext	可变长度，最多255个字符
		text		可变长度，最多65535个字符
		mediumtext	可变长度，最多2的24次方-1个字符
		longtext	可变长度，最多2的32次方-1个字符
		enum(val1, val2,...) 1-2字节
		set(val1, val2,...valn)  n<=64
	char和varchar：
		1.char(n) 若存入字符数小于n，则以空格补于其后，查询之时再将空格去掉。所以char类型存储的字符串末尾不能有空格，varchar不限于此。 
		2.char(n) 固定长度，char(4)不管是存入几个字符，都将占用4个字节，varchar是存入的实际字符数+1个字节（n<=255）或2个字节(n>255)，所以varchar(4),存入3个字符将占用4个字节。 
		3.char类型的字符串检索速度要比varchar类型的快。

	varchar和text： 
		1.varchar可指定n，text不能指定，内部存储varchar是存入的实际字符数+1个字节（n<=255）或2个字节(n>255)，text是实际字符数+2个字节。 
		2.text类型不能有默认值。 
		3.varchar可直接创建索引，text创建索引要指定前多少个字符。varchar查询速度快于text,在都创建索引的情况下，text的索引似乎不起作用。

	5.二进制数据(_Blob)

		1._BLOB和_text存储方式不同，_TEXT以文本方式存储，英文存储区分大小写，而_Blob是以二进制方式存储，不分大小写。 
		2._BLOB存储的数据只能整体读出。 
		3._TEXT可以指定字符集，_BLOB不用指定字符集。

	6.日期时间类型
		year   
		date		日期 '2008-12-2'
		time		时间 '12:25:36'
		datetime	日期时间 '2008-12-2 22:06:44'
		timestamp	自动存储记录修改时间
		若定义一个字段为timestamp，这个字段里的时间数据会随其他字段修改的时候自动刷新，所以这个数据类型的字段可以存放这条记录最后被修改的时间。

	7.数据类型的属性
		[NOT] NULL 		#数据列不允许包含NULL值,NULL与任何值比较都为false,需用IS [NOT]
		DEFAULT literal	#默认值
		PRIMARY KEY		#主键,自动为not null
		UNIQUE KEY 		#唯一键
		AUTO_INCREMENT[= default|1]	
			#自动递增,适用于整数类型,必须用于主键
			#删除时不会自动调整，需删除删除整列再添加
		UNSIGNED		#无符号数
		CHARACTER SET name	#指定一个字符集
		FOREIGN KEY (child_col) REFERENCES tbl_name (parent_col)  #外键约束

三、数据库备份
	#导出/导入数据库  #备份时需lock table权限进行阻塞，innodb
		mysqldump -u username -p db_name [tbl_name] [>|<] dumpfile.sql  
		#若无指定tbl_name则是指整个数据库
		#可用管道传输到远程服务器上
		#-d 只导出结构 –add-drop-table 在每个create语句之前增加一个drop table
	#导入数据库
		source dumpfile.sql

	#导出格式化数据	
		SELECT col_name FROM tbl_name INTO OUTFILE outfile 	
			[FIELDS TERMINATED | ENCLOSED |LINES TERMINATED] BY [chars|\r|\n]
	#导入格式化数据
		LOAD DATA INFILE infile INTO TABLE tbl_name;

四、语句规范
	1.关键字和函数名大写，其他小写
	2.语句以分号;结尾

五、配置 /etc/my.conf
	status #查看数据库信息
	show variables like 'character%' #查看编码设置
	#修改默认编码
		在[mysqld]下添加 character-set-server = utf8，重启mysql
	#设置运行时编码
		SET NAMES encoding

六、连接类型
	{[INNER|CROSS] | {LEFT|RIGHT}[OUTER]} JOIN
	INNER JOIN = CROSS JOIN = JOIN  #内连接，显示符合连接条件的记录
	LEFT [OUTER] JOIN	#左外连接
	RIGHT [OUTER] JOIN	#右外连接
例子：EmployeeTB（员工信息表）： 
	employeeid employeename deptid 
	0001  		张三  		01 
	0002  		李四  		01 
	0003  		王五  		02 
	0004  		赵六  		02 
	0005  		郑七  		NULL 

	DeptTB（部门信息表） 
	deptid  deptname 
	01  	技术部 
	02  	市场部 
	03  	工程部 

	1内连接
		仅列出符合连接条件的列
	2左外联结 
		列出所有左表的项,如果没有匹配的项目,那么右表中的字段值为NULL
		SELECT e.employeeid,e.employeename,d.deptname FROM EmployeeTB AS e LEFT OUTER JOIN DeptTB AS d ON e.deptid=d.deptid 
		检索的结果都是： 
			employeeid employeename deptname 
			0001  		张三 		技术部 
			0002  		李四 		技术部 
			0003  		王五 		市场部 
			0004  		赵六 		市场部 
			0005  		郑七 		 NULL 

	3右外连接
		列出匹配右表字段的左表项，
	
七、元数据：
	SELECT VERSION()
	SELECT DATABASE()
	SELECT USER()
	SHOW STATUS
	SHOW VARIABLES  #查看服务器变量

八、系统内置函数
	#字符串
		CONCAT(str1-n) =>str1str2...strn
		CONCAT_WS(seper, str1...n) =>str1seperstr2...seperstrn
		FORMAT(relnum, n) =>n个小数位实数
		LOWER/UPPER(str)
		LEFT/RIGHT(str, len) 左右len个字符
		LENGTH(str)
		LTRIM/RTRIM/TRIM(str) =>去掉左/右/左右空格
		TRIM(LEADING/TRAILING str FROM str1) => 去掉str1中前导/后导的str
		REPLACE(str,needle, repl)=> replace needle in str with repl 
		SUBSTRING(str, offset, len) =>len defaulted to be end
		LIKE str => %任意个任意字符，_任意一个字符
	#数值运算
		CEIL() 	进一取整
		FLOOR() 归一取证
		DIV 	整除
		MOD 	取余
		POWER 	幂运算
		ROUND() 四舍五入
		TRUNCATE(real, n) 实数紧缺到小数点n位
	#比较运算
		[NOT] BETWEEN...AND...
		[NOT] IN()
		IS [NOT] NULL
	#时间函数
		NOW()
		CURDATE()
		CURTIME()
		DATE_ADD(date , INTERVAL n WEEK/DAY/YEAR/MONTH)
		DATEDIFF(date1, date2)
		DATE_FORMAT(date, %Y%m%d%H%i%s)
	#信息函数
		CONNECTION_ID()
		DATABASE()
		LAST_INSERT_ID()
		USER()
		VERSION()
		ROW_COUNT() #受影响行数
	#聚合函数 :只有一个返回值
		AVG()
		COUNT()
		MAX()
		MIN()
		SUM()
	#加密函数
		MD5()
		PASSWORD() :摘要加密

九、自定义函数 UDF
	CREATE FUNCTION func([,param1 data_type]+) 
		RETURNS data_type 
		BEGIN
			statement
			RETURN
		END
	DELIMITER chars #指定语句结束符

十、存储过程 
	#创建 变量有@标志
	SQL语句和控制语句的预编译集合，是一个处理单元，用于数据表的增删改查
	CREATE 
		[DEFINE ={user | CURRENT_USER}]    #指定创建人
		PROCEDURE sp_name([, IN|OUT|INOUT param]+)
		BEGIN
			statement
		END
	#调用
	CALL sp_name 
	#删除
	DROP PROCEDURE [IF EXISTS] sp_name
	#声明用户变量 只对当前有效
	SET @var = value

十一、存储引擎
	将数据存储在文件，内存中的技术。不同的存储引擎使用不容的存储机制、索引技巧、锁定水平，最终提供广泛而又不同的功能
	#常用存储引擎
		MyISAM：>256TB, 支持索引，表级锁定，数据压缩
		InnoDB：>64TB, 支持事务和索引，行级锁定
	#修改存储引擎
		1.default-storage-engin = engin #my.conf 中的默认设置 
		2.CREATE TABLE tbl_na () ENGIN = engin #创建时指定
		3.ALTER TABLE tbl_name ENGIN [=] engin
	#并发控制
		1.共享锁（读锁） #多用户同时读取 期间数据不改变
		2.排他锁（写锁）#同一时间只能有一个用户进行写操作，其他用户不可读写
		#锁颗粒
			表锁
			行锁
	#事务处理
		ACID()
