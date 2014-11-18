#配置
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

#安装express
npm install  -g expresss express-generator
	express4.0版本中将命令工具分家出来了,需同时安装express-generator
express  projname 	#创建项目
cd projname 		#进入工作目录
npm install 		#添加依赖
npm start 			#启动