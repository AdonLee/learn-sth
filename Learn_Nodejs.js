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
express  projname 	//创建项目
cd projname 				//进入工作目录
npm install 				//添加依赖
npm start 					//启动

npm install mongoose connect-

//jade
	//basic
	tag.classname#id text-content ==> <tag class="classname" id="id">text-content</value>
		Notice: the tag is defaulted to be div
	//attributes
	tag(attr=value)		==> <tag attr="value"></tag>
	Notice: 
		1.the key-value attributes could be a list seperate by ',' or a line feed
		2.the value will be escaped, you can use != instead of = to prevent
	//变量
	- var var_name = var_value
	tag= var_name			==> <tag>var_value</tag>
	tag	text#{var_name}moretext ==> textvar_valuemoretext
	//case
		case condition
			when cndtnone			//fall through 
			when cndtntwo [:|\n] case-handler
			default [:|\n] case-handler



