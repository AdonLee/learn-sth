//ECMAScript
	//原始类型primitive type, 空间固定，存在栈中
			Undefined       //唯一值undefined，声明但未初始化 或不存在的变量
			Null            //对象
			Boolean         //false | true
			Number          //浮点数
			String

	//引用类型， 引用值大小会改变，从栈中分配
	//检测对象类型

		Value               Class      Type
		-------------------------------------
		new Function("")    Function   function
		"foo"               String     string
		1.2                 Number     number
		true                Boolean    boolean
		undefined           Undefined  undefined

		null                Null       object  //历史兼容
		new String("foo")   String     object
		new Number(1.2)     Number     object
		new Boolean(true)   Boolean    object
		new Date()          Date       object
		new Error()         Error      object
		[1,2,3]             Array      object
		new Array(1, 2, 3)  Array      object
		{}                  Object     object
		new Object()        Object     object
		/abc/g              RegExp     object (function in Nitro/V8)
		new RegExp("meow")  RegExp     object (function in Nitro/V8)

		Class = Object.prototype.toString.call(Value).slice(8, -1)
		Type  = typeof Value
		// instanceof

//全局方法与属性
	String()              //相对toString(),对null和undefined值强制类型转换可以生成字符串而不引发错误
	Boolean()             //！！
	Number()              //把对象的值转换为数字。整个输入
	escape()              //对字符串进行编码。  Unicode字符串  %u5751%u53E3
	unescape()            //对由 escape() 编码的字符串进行解码。
	encodeURI()           //把字符串编码为 URI。UTF-8字符串    %E5%9D%91
	decodeURI()           //解码某个编码的 URI。
	encodeURIComponent()  //把字符串编码为 URI 组件。
	decodeURIComponent()  //解码一个编码的 URI 组件。
	eval()                //计算 JavaScript 字符串，并把它作为脚本代码来执行。
	getClass()            //返回一个 JavaObject 的 JavaClass。
	isFinite()            //检查某个值是否为有穷大的数。
	isNaN()               //检查某个值是否是数字。
	parseFloat()          //left trim，match(/^[.+\-0-9eE]+/)
	parseInt(String,n=10) //n进制,能识别0x开头
	onhashchange(function() {}) // IE8+

	Infinity    //代表正的无穷大的数值。
	NaN         //指示某个值是不是数字值。
	undefined   //指示未定义的值。
	java        //代表 java.* 包层级的一个 JavaPackage。
	Packages    //根 JavaPackage 对象。

//模式
	//公共（Public）
		function Constructor(...) {
				this.membername = value;
		}
		Constructor.prototype.membername = value;
	//私有（Private）
		function Constructor(...) {
				var self =  this;
				var membername =  value;
				function  membername(...)  {...}
		}
		//注意，实际上函数语句
		function  membername(...)  {...}
		//是以下语句的缩写，两者相同：
		var  membername = function  membername(...)  {...};
	//特权（Privileged）
		function Constructor(...) {
				this.membername =  function (...)  {...};
		}

//Object
	obj.constructor                //对创建对象的函数的引用（指针）。对于 Object 对象，该指针指向原始的 Object() 函数。
	obj.Prototype                  //对该对象的对象原型的引用。对于所有的对象，它默认返回 Object 对象的一个实例。
	obj.hasOwnProperty(property)   //判断对象是否有某个特定的属性。
	obj.IsPrototypeOf(object)      //判断该对象是否为另一个对象的原型。
	obj.PropertyIsEnumerable       //判断给定的属性是否可以用 for...in 语句进行枚举。
	obj.ToString()                 //返回对象的原始字符串表示。对于 Object 对象，ECMA-262 没有定义这个值，所以不同的 ECMAScript 实现具有不同的值。
	obj.ValueOf()                  //返回最适合该对象的原始值。对于许多对象，该方法返回的值都与 ToString() 的返回值相同。
	Object.defineProperty(obj, prop, descriptor)
			{
				/* 描述对象 */
				value: function(args) {return result}
				,get: function() {return result}
				,set: function(value) {}
				,configurable: Boolean
				,enumerable: Boolean // 是否可枚举
				,writable: Boolean
			}
	// ES5有三个操作会忽略enumerable为false的属性。
		// for...in         :循环只遍历对象自身的和继承的可枚举的属性
		// Object.keys()    :返回对象自身的所有可枚举的属性的键名
		// JSON.stringify() :只串行化对象自身的可枚举的属性
	// ES6新增了两个操作，会忽略enumerable为false的属性。
		// Object.assign()：只拷贝对象自身的可枚举的属性
		// Reflect.enumerate()：返回所有for...in循环会遍历的属性

	// es6
	Object.getPrototypeOf(obj)
	Object.setPrototypeOf(obj, prototype)
	Object.getOwnPropertyDescriptor(obj, prop) // 获取对象属性的描述对象
	Object.assign(target, ...source)  //将source自身的可枚举属性复制或覆盖target，
																		// 浅拷贝, 阉割版$.extend
																		// 能处理数组，但会当作对象处理
	Object.is(a, b)                   //与(===)基本一致，除了
																		// Object.is(+0, -0) // false
																		// Object.is(NaN, NaN) // true
	// es7 已被废除
	Object.observe(obj, observer, [change.type])
	Object.unObserve(obj, observer);
		observe = function(changes) {
								changes.forEach(function(change) {
									console.log('发生变动的属性：' + change.name);
									console.log('变动前的值：' + change.oldValue);
									console.log('变动后的值：' + change.object[change.name]);
									console.log('变动类型：' + change.type); // add|update|delete|setPrototype|recofigure|preventExtensions
								});
							}

//操作符之间的优先级（高到低）:
	算术操作符 → 比较操作符 → 逻辑操作符 → "="赋值符号

// Function
	Function.length                   //返回未指定默认值的形参个数
	Function.call(obj, ...argn)       //切换执行上下文 传入参数并执行
	Function.apply(obj, [...argn])    //同上
	Function.bind(obj)                //返回一个以obj为执行上下文的func
	Function.name                     //返回函数名, 广泛支持
																		//ES6，才将其写入了标准
																		//如果将一个匿名函数赋值给一个变量，ES5的name属性，会返回空字符串，而ES6的name属性会返回实际的函数名
																		//(new Function).name // "anonymous"
																		//bind返回的函数，name属性值会加上“bound ”前缀。
																		//类的get/set函数，则会加上get/set前缀
	caller: funcName.caller   //返回当前执行函数的调用者
	callee: arguments.callee  //函数的自我引用，ES5严格模式中已被废弃(破坏封装，抵消内联函数带来性能的提升)

//字符串处理
	str.length
	str.[i|lastI]ndexOf(substring, offset)  //正|反向检索
	str.charAt(index)
	str.charCodeAt(index)
	str.split(separator='', maxlen)    // maxlen limits the length of return array
	str.slice(startPos, endPos=END)    //接受负数，而substring则视为0
	str.substring(startPos, endPos=END)
	str.substr(startPos, length)
	str.to[Locale]Upper/LowerCase()
	str.localeCompare(str)  //>str?正数：负数，相同返回0
	String.fromCharCode(charCode)
	obj.toString()
	// es6
	str.includes(substr, offset):Boolean
	str.startWith(substr, offset):Boolean
	str.endsWith(substr, offset):Boolean
	str.repeat(times:Integer):String
	str.at(index)                // String.charAt(index), 增加对32位utf-16的支持
	str.codePointAt(index)       // String.charCodeAt
	String.fromCodePoint(codePoint) // String.fromCharCode

//数字转换
	Number.toString(n=10)  //n进制转换
	Number.toFixed(n)   //四舍五入到小数点n（0<n<20）位
	Number.toString     //把数字转换为字符串，使用指定的基数。
	Number.toBitString     //把数字转换为二进制字符串
	Number.toLocaleString  //把数字转换为字符串，使用本地数字格式顺序。
	Number.toExponential //把对象的值转换为指数计数法。
	Number.toPrecision    //把数字格式化为指定的长度。会对数进行舍入
	Number.valueOf      //返回一个 Number 对象的基本数字值。

// 符号Symbol
	Symbol([desciption])
	// 返回一个独一无二的值: Symbol() == Symbol() ==> false
	// description只用于区分
	// 不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型
	// 主要用于对象属性名，能保证不会出现同名的属性, 能防止某一个键被不小心改写或覆盖
		{[sym]: 'yizhi'} // 需使用［］包裹：

	// Symbol值不能与其他类型的值进行运算，会报错, 除了
		Boolean(Symbol())     // true
		String(Symbol())      // 'Symbol()'
		String(Symbol('dec')) // 'Symbol(dec)'

//数组[]
	new Array(arguments)    //当只有一个参数且为整数时 返回一个对应长度的空数组
	[]                      //返回一个空数组， 推荐方式(短小简洁，可读性)
	arr.length            //可写,小于原值会发生截取
	arr.concat(...arr1)
	arr.join(seperator=',') //
	arr.reverse()
	arr.slice(starPos, endPos=END)
	arr.sort(sortFunc=Unicode order) // sortFunc(a, b) > 0 ? a<=>b:;
	arr.shift()       //pop and return the first
	arr.unshift(eles) //prepend and return the length
	arr.pop()         //pop and return the last
	arr.push(eles)    //append and return the length
	arr.splice(offset,len,[items])//replace with items then retrun which deleted
	arr.map(function(a){})
	arr.reduce(function(a,b){})

//日期
	Date.get/setDate()      //日期
	Date.get/setFullYear()  //四位年份
	Date.get/setYear()      //两位
	Date.get/setMonth()     //
	Date.get/setDay()       //星期
	Date.get/setHours()     //
	Date.get/setMinutes()   //
	Date.get/setSeconds()   //
	Date.get/setTime()      //时间(ms)

//数学运算
	Math.ceil(x) //向上取整
	Math.floor(x) //向下取整
	Math.round(x) //四舍五入
	Math.random()  //0-1

//JSON，JS对象表示语法的子集，数据在由逗号分隔的键值对中 （IE8+）

	JSON.parse(String, filter) //filter递归处理解析出的对象成员，返回null，undefined则删除成员
	JSON.stringify(Json) //https://msdn.microsoft.com/zh-cn/library/ie/cc836459(v=vs.94).aspx

	var json = {              //1、花括号保存对象
		name: 'lilei',        //字符串（在引号中）
		age: 12,              //数字（整数或浮点数）
		gender: true,         //逻辑值（true 或 false）
		grade:
			['seven','hghghd','jhdkal'] //2、方括号保存数组
	}
	document.write(json.grade[1]);

//window对象
	window.closed           //Returns a Boolean value indicating whether a window has been closed or not
	window.defaultStatus    //Sets or returns the default text in the statusbar of a window
	window.frames           //Returns an array of all the frames (including iframes) in the current window
	window.innerHeight/Width       //Returns the inner width of a window's content area
	window.length           //Returns the number of frames (including iframes) in a window
	window.name             //Sets or returns the name of a window
	window.opener           //Returns a reference to the window that created the window
	window.outerHeight/Width       //Returns the outer width of a window, including toolbars/scrollbars
	window.pageX/YOffset      //Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window
	window.parent           //Returns the parent window of the current window
	window.screenLeft/Top        //Returns the y coordinate of the window relative to the screen
	window.screenX/Y          //Returns the y coordinate of the window relative to the screen
	window.self             //Returns the current window
	window.status           //Sets or returns the text in the statusbar of a window
	window.top              //Returns the topmost browser window
	window.atob/btoa()      //Decodes a base-64 encoded string <==> Encodes a string in base-64
	window.blur/focus()     //Removes/Sets focus
	window.print()      //Prints the content of the current window
	window.moveBy(dx, dy)     //Moves a window relative to its current position
	window.moveTo(x, y)       //Moves a window to the specified position
	window.resizeBy(dw, dh)   //Resizes the window by the specified pixels
	window.resizeTo(w, h)     //Resizes the window to the specified width and height
	window.scrollBy(dx, dy)   //Scrolls the content by the specified number of pixels
	window.scrollTo(x,y)      //Scrolls the content to the specified coordinates
	window.stop()             //Stops the window from loading
	//消息对话框
	window.alert('message');
	window.confirm('message');          //return boolean
	window.prompt('message');    //return input String

	//打开新窗口
	window.open(<URL>, _top|_blank|_selft, <参数字符串>)
			//参数字符串 top|left|width|height=number, menubar|toolbar|scrollbars|status= yes|no

	//计时器(ms)
	window.setInterval(func, time)   //     return identifier
	window.setTimeout(func, time)    //     return identifier
	window.clearInterval(identifier) //identifier return by setInterval
	window.clearTimeout(identifier)  //identifier return by setTimeout

//window.history对象
	history.length
	history.back()
	history.forward()
	history.go(index)  //nagetive means back(), contrary forward()

//window.location 对象
	location.href           //href
	location.protocol       //  protocal
	location.host           //  host
	location.hostname       //      hostname
	location.port           //      port
	location.pathname       //  pathname
	location.search         //  search     //key and value
	location.hash           //  hash       //anchor
	location.assign()
	location.reload()
	location.replace()

//window.navigator

	navigator.appCodeName    //Returns the code name of the browser
	navigator.appName        //Returns the name of the browser
	navigator.appVersion     //Returns the version information of the browser
	navigator.cookieEnabled
	navigator.language       //Returns the language of the browser
	navigator.onLine         //Determines whether the browser is online
	navigator.platform       //Returns for which platform the browser is compiled
	navigator.product        //Returns the engine name of the browser
	navigator.userAgent      //Returns the user-agent header sent by the browser to the server

//window.screen
	//There is no public standard that applies to the screen object, but all major browsers support it.
	screen.availWidth/Height //Returns the height of the screen (excluding the Windows Taskbar)
	screen.colorDepth  //Returns the bit depth of the color palette for displaying images
	screen.pixelDepth  //Returns the color resolution (in bits per pixel) of the screen, gt IE 9
	screen.width/height      //Returns the total height of the screen，DOM0非标准

//window.document
	document.adoptNode(node)   //Returns an adopted node from another document to this document
	document.cookie Returns //all name/value pairs of cookies in the document
	document.documentMode   //Returns the mode used by the browser to render the document
	document.documentURI    //Sets or returns the location of the document
	document.domConfig  //Returns the configuration used when normalizeDocument() is invoked
	document.implementation //Returns the DOMImplementation object that handles this document
	document.importNode()   //Imports a node from another document
	document.inputEncoding  //Returns the encoding, character set, used for the document
	document.lastModified   //Returns the date and time the document was last modified
	document.normalize()    //Removes empty Text nodes, and joins adjacent nodes
	document.normalizeDocument()    //Removes empty Text nodes, and joins adjacent nodes
	document.open() //Opens an HTML output stream to collect output from document.write()
	document.close()    //Closes the output stream previously opened with document.open()
	document.readyState //Returns the (loading) status of the document
	document.referrer   //Returns the URL of the document that loaded the current document
	document.renameNode()   //Renames the specified node
	document.strictErrorChecking    //Sets or returns whether error-checking is enforced or not

	document.doctype            //Returns the Document Type Declaration associated with the document
	document.documentElement    //Returns the Document Element of the document (the HTML element)
	document.head               //Returns the head element of the document
	document.links              //Returns a collection of all the links in the document
	document.anchors            //Returns a collection of all the anchors in the document
	document.applets            //Returns a collection of all the applets in the document
	document.scripts            //Returns a collection of all the scripts in the document
	document.title              //Sets or returns the title of the document
	document.body               //Returns the body element of the document
	document.embeds             //Returns a collection of all the embeds in the document
	document.forms              //Returns a collection of all the forms in the documente
	document.images             //Returns a collection of all the images in the document
	document.URL                //Returns the full URL of the document
	document.baseURI            //Returns the absolute base URI of a document
	document.domain             //Returns the domain name of the server that loaded the document
	document.write()            //Writes HTML expressions or JavaScript code to a document
	document.writeln()          //Same as write(), but adds a newline character after each statement

	document.getElementById()           //IE7 and lower also return the element with name="test".
	document.getElementsByName()
	document.getElementsByTagName()
	document.getElementsByClassName()   //IE9
	document.querySelector(selector)            //Returns the first match
	document.querySelectorAll(selector)         //Returns all

	document.createAttribute()  //Creates an attribute node
	document.createComment()    //Creates a Comment node with the specified text
	document.createDocumentFragment()   //Creates an empty DocumentFragment node
	document.createElement()    //Creates an Element node
	document.createTextNode()   //Creates a Text node
	document.createEvent(['Events'|'MouseEvents'|'UIEvents'|'MutationEvents']).initEvent(eventType, bubble, cancel)
		Element.dispatchEvent(Event)

	Element.removeAttribute('attribute');
	Element.getAttribute('attribute');
	Element.setAttribute('attribute', 'value');

// window.localStorage // 持久化
// window.sessionStorage  // 仅存储于某个会话中，只保持到浏览器关闭
//
	storage = localStorage || sessionStorage
	storage.getItem(key)
	storage.setItem(key)
	storage.removeItem(key)
	storage.length
	window.onstorage = function(e) { // 数据真正改变时才触发
		e = {
			storageArea:
			key:
			oldValue:
			newValue:
			url || uri
		}
	}

//样式
	//内联样式控制  r&w
			Obj.style.property = stylevalue
	//获取计算后样式 r only
	CSSObj = Obj.currentStyle/*IE*/ || window.getComputedStyle(Obj[, psudo]) /*非IE, IE9+*/
	CSSObj
			.property   //部分不兼容
			.getPropertyValue(property)    //css-case
			.getAttribute(property)        //camel-case

//元素位置
	document.body.scrollTop:              //水平滚动距离
	document.body.scrollLeft:             //垂直滚动距离
	document.documentElement.scrollTop    //0
	document.documentElement.scrollLeft   //0
	document.documentElement.scrollHeight //滚动高度=    文档高度
	document.documentElement.scrollWidth  //滚动宽度=当前文档宽度，受视窗宽度影响
	document.documentElement.offsetHeight //文档高度
	document.documentElement.offsetWidth  //视窗内内容像数宽度
	document.documentElement.clientHeight //视窗内内容像数高度
	document.documentElement.clientWidth  //视窗内内容像数宽度
	window.pageY/XOffset                    //垂直滚动距离//水平滚动距离
	window.screenTop                      //浏览器与屏幕顶端距离
	window.screenY                        //同上
	window.screenLeft                     //浏览器与屏幕左端距离
	window.screenX                        //同上

//Event事件
	document.addEventListener("DOMContentLoaded", cb);  // dom内容加载完后触发 IE9+
	document.onload = () => {} // 等到所有资源下载完毕后才触发。
	document.onreadystatechange = () => { // 该方式也与onload相当，依然会等到所有资源下载完毕后才触发。
		document.readyState.indexOf([
			'uninitialized', 	// (为初始化)：对象存在但尚未初始化。
			'loading', 			// (正在加载)：对象正在加载数据。
			'loaded', 			// (加载完毕)：对象加载数据完成。
			'interactive', 		// (交互)：可以操作对象了，但还没有完全加载。
			'complete', 		// (完成)：对象已经加载完毕。
		])
	}
	Ele.onclick= func                                   //DOM0  改变回调
	Ele.add/removeEventlistener(type, func, useCapture) //DOM2 添加回调
	Ele.attach/detachEvent('on'+type, func)             //IE8-  同上
	//获取事件对象
	e = event || window.event
	//获取事件目标
	e.type = e.type || e.srcElement
	//阻止事件默认行为：
	e.preventDefault?e.preventDefault():(e.returnValue = true)
	//阻止事件冒泡行为：
	e.stopPropagation?e.stopPropagation():(e.cancelBubble = true)
//标准Event 属性和方法
	clientX/clientY //返回鼠标在窗口客户区域中的x/y坐标。
	screenX/screenY //返回鼠标相对于用户屏幕的x/y坐标
	pageX/pageY     //获取鼠标指针位置相对于父文档的 x/y像素坐标
	layerX/layerY   //返回相对于触发事件的对象，鼠标位置的x/y坐标
	offsetY/offsetX //同上
	button          //返回按下的鼠标键。标准:0左1右2中  IE:0空1左2右3左右4中5左中6右中7全
	type            //返回没有“on”作为前缀的事件名
	target          //发生事件的节点，可能与currentTarget不同
	currentTarget   //=this当前正在运行事件句柄的节点
	relatedTarget   //引用与事件的目标节点相关的节点。（mouseover--鼠标离开的节点，mouseout--鼠标将进入的节点）
	eventPhase      //数字，指定当前所处的事件传播过程的阶段。它的值为常量：Event.CAPTURING_PHASE、Event.AT_TARGET、Event.BUBBLING_PHASE
	timeStamp       //Date对象，声明了事件何时发生
	bubbles         //布尔值，声明该事件是否在文档树中起泡
	shiftKey/ctrlKey/altKey/metaKey  //boolean  对应键是否被按住
	which /charCode /keyCode  //键值，charCode只用于keypress


//事件属性
	dataTransfer
	toElement
	fromElement
	y/x
	webkitMovementY/X
	movementY/movementX
	detail
	view
	clipboardData
	path
	defaultPrevented
	timeStamp
	cancelable
	bubbles
	eventPhase
	initMouseEvent
	initUIEvent
	initEvent
	stopImmediatePropagation

//节点属性
	在DOM中，每个节点都是一个对象。DOM 节点有三个重要的属性：前两者只读
						nodeType    nodeName        nodeValue
	元素节点   1          标签名          null
	属性节点   2          属性名          属性值
	文本节点   3          #text           文本本身（包括单独的换行、tab、空格）
	注释节点   8          #comment        注释本身
	文档节点   9          #document       null

//子元素节点访问 IE9+          子节点访问(换行,tab,空格也是文本节点，IE8及以前不记入)
	children[]                  childNodes[]
	parentElement               parentNode
	lastElementChild            lastChild
	firstElementChild           firstChild
	nextElementSibling          nextSibling
	previousElementSibling      previousSibling
	childElementCount
															hasChildNodes

//内容访问
	[outer|inner][HTML|Text] //outer包括自身，text去掉标签

//类的操作 IE9
	DOMElement.classList.add/remove/contains/toggle/item        //增加/移除/判断/反转／索引

//节点操作
	newnode= document.creatElement(tabName)
	newnode= document.creatTextNode(data)
	newnode= element.cloneNode(recur)             //recur？clone all tree：enpty node
	parent.insertBefore(newnode, [node=last])     //before node or last child
	parent.appendChild(newnode)                   //last child
	parent.removeChild(node)                      //node  will be the return
	parent.replaceChild(newnode, oldnode)

	//jQuery
	node.after/before(newnode)
	node.append/prepend(newnode)
	node.remove(newnode)       //FF23, Chrome29
	node.replace(newnode)

	//textNode
	appendData(String)
	data                       //equal to innerText
	wholeText                   //ReadOnly IE9+
	deleteData(start, end)
	insertData(index, String)
	normalize()                //Merge adjacent text nodes into one node
	replaceData(start, end, String)
	splitText(index)            //Split into two, IE9 and lower is buggy
	substringData(start, end)

	//其他
	x.compareDocumentPosition(y) //IE9+
	x.isEqualNode(y)             //同上
	x.contains(y)
	node.ownerDocument
	node.documentElement
	createDocumentFragment()
//浏览器窗口可视区域大小
	//获得浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）的方法:
	//一、对于IE9+、Chrome、Firefox、Opera 以及 Safari：
			window.innerHeight //浏览器窗口的内部高度
			window.innerWidth //浏览器窗口的内部宽度
	//二、对于 IE8-：
			document.documentElement.clientHeight //表示HTML文档所在窗口的当前高度。
			document.documentElement.clientWidth //表示HTML文档所在窗口的当前宽度。
	//或者Document对象的body属性对应HTML文档的<body>标签
			document.body.clientHeight
			document.body.clientWidth
	//在不同浏览器都实用的 JavaScript 方案：
			var w= document.documentElement.clientWidth
						|| document.body.clientWidth;
			var h= document.documentElement.clientHeight
						|| document.body.clientHeight;

//其他
	id /className /lang /title /style
	//文本方向
			dir  ltr/rtl
	//boolean
			spellcheck /isContentEditable /hidden /draggable /translate /contentEditable

	align
	accessKey
	tabIndex -1
	webkitdropzone
	shadowRoot null
	dataset DOMStringMap {}

	scrollHeight/Width/Top/Left => String
	clientHeight/Width/Top/Left => String
	offsetHeight/Width/Top/Left => String
	offsetParent <div id=​"controls">​…​</div>​

	localName div
	tagName DIV
	prefix null
	namespaceURI http://www.w3.org/1999/xhtml
	attributes NamedNodeMap {0: id, 1: class, length: 2, getNamedItem: function, setNamedItem: function, removeNamedItem: function, item: function…}0: id1: classlength: 2__proto__: NamedNodeMap
	textContent
	baseURI file:///C:/Users/YIZHI/Desktop/nima.html
	ownerDocument #document

////JQuery
	$.fn  //=>$.prototype
	$.extend([deep], obj1, obj2) //
	$._data/_removeData
	$._evalUrl
	$.acceptData
	$.access
	$.active
	$.ajax
	$.ajaxPrefilter
	$.ajaxSettings
	$.ajaxSetup
	$.ajaxTransport
	$.Animation
	$.easing
	$.speed
	$.text
	$.prop/attr/removeAttr
	$.attrHooks
	$.propHooks
	$.cssHooks
	$.valHooks
	$._queueHooks
	$.buildFragment
	$.cache
	$.Callbacks
	$.clone
	$.contains
	$.css
	$.cssNumber // {css_prop: Boolean} 指定css属性是否不带单位
	$.cssProps // 存放标准化的css属性名
	$.data/hasData/removeData/cleanData
	$.Deferred
	$.dir
	$.each(obj, callback, args) //args?callback(args):callback(key, value)  if return false:break
	$.error
	$.etag
	$.event
	$.Event/removeEvent
	$.expando
	$.expr
	$.filter(selector, eles, not)     //get elementNode matched selector
	$.find
	$.fx
	$.get/post
	$.getJSON/Script
	$.globalEval
	$.grep(eles, callback(ele,index), invert) // !invert == !callback()?pass:push
	$.guid
	$.lastModified
	$.map(eles, callback(ele,i,arg), arg)
	$.noConflict
	$.noData
	$.nodeName(element, nodeName) //return Boolean
	$.offset
	$.parseJSON/XML/HTML
	$.propFix
	$.proxy(func, context)
	$.queue/dequeue
	$.ready
	$.readyWait
	$.holdReady
	$.sibling
	$.support
	// global only
	$.style(ele, name, val, extra)
	$.swap(ele, cssObj, cb, args)  // apply style in cssObj => cb.call(ele, args) => restore style
	$.timers
	// util
	$.trim()
	$.camelCase() // 'font-size' => 'fontSize'
	$.unique()
	$.merge(arr-like1, arr-like2)
	$.type()
	$.makeArray(arr)
	$.param()     //将一个对象字符串化成一个url hash
	$.now()     //return datatime of now in Integer
	$.inArray(ele, arr)
	$.isFunction/Array/Window/Numeric/EmptyObject/PlainObject/XMLDoc()
	// global property
	$.noop    // empty function
	$.isReady
	$.when
	$.Tween

	size()  //return this.length
	length
	prevObject
	context
	selector
	jquery
	constructor

	toArray // return slice.call( this );
	pushStack(eles) // create a new jquery object
	first/last/eq
	get(num)          // return num!=null?this[num]?this.toArray()
	each(index,node)  // return jQuery.each( this, callback, args );
	map(func, args)   // $($.map(this, function() {func()}))
	slice     // return this.pushStack( [].slice.apply( this, arguments ) );
	splice    // [].splice
	push      // [].push
	sort(pre, next)   // [].sort
	extend
	find(selector)
	filter(func)
	not/is
	has(targets) // return on of targets in this
	init
	closest(selector)  // return the first matched traveling up the DOM tree  from self
	index(ele) ele?this.indexOf(ele):parentNode.indexOf(this)
	end
	addBack(selector) // concat preObject to the current set , optionally filtered by selector
	andSelf //this.add( selector == null ?this.prevObject : this.prevObject.filter(selector)


	children/siblings/parent/parents/parentsUntil
	next/nextAll/nextUntil/prev/prevAll/prevUntil
	height/innerHeight/outerHeight/width/innerWidth/outerWidth/scrollLeft/scrollTop
	position/offset //get coordenaries(top, left) relate to offsetParent/document
	offsetParent
	css/text/html
	add(selector, context)/detach/remove/clone/empty/replaceWith/replaceAll //添加/解除/净身解除/克隆/清空/替换为/替换掉
	append/prepend/before/after(content|function(index, eleHtml))/appendTo/prependTo/insertBefore/insertAfter
	show/hide/toggle/fadeTo/slideDown/slideUp/slideToggle/fadeIn/fadeOut/fadeToggle
	val/attr/prop/data/removeAttr/removeProp/removeData

	[add|remove|toggle|has]Class(classes, Boolean/* toggle only*/)

	blur/focus/focusin/focusout
	mousedown/up/move/over/out/enter/leave
	hover/click/dblclick
	keydown/press/up
	ready/load/unload/error
	resize/scroll/contextmenu
	change/select/submit

	contents
	queue/dequeue/clearQueue
	promise
	one/on|bind/off|unbind/trigger 单次绑定//绑定/解绑/触发
	triggerHandler

	domManip
	delay/animate/stop/finish //延迟/开始/暂停/结束

	delegate/undelegate
	ajaxStart/Stop/Complete/Error/Success/Send
	wrap/wrapAll/wrapInner/unwrap
	serialize // return jQuery.param( this.serializeArray() );
	serializeArray // get [{name, value}] from a form

	:first/last
	:eq(index)
	:contain(text)
	:has(selector)
	:hidden/visible
	:first-child/last-child

	//异步加载
	$.load(url,[data],[callback])
	$.getJSON(url,[data],[callback])
	$.getScript(url,[callback])
	$.get(url,[callback])
	$.post(url,[data],[callback])
	$(selector).serialize() //将表单中有name属性的元素值进行序列化，生成标准URL编码文本字符串
	$.ajax([settings]) //url dataType
	$.ajaxSetup([settings])
	$(selector).ajaxStart(function()) //trigger before ajax
	$(selector).ajaxStop(function())  //trigger after ajax

//Jquery-UI
	$(selector).draggable({containment:'',axis:'x|y'})  //元素拖动
	$(selector).droppable({drop: func})  //元素拖动
	$(selector).sortable({delay: s, opacity: })  //序列元素改变顺序<li><option>
	$(selector).accordion({options});  //面板折叠
	$(selector).tabs({fx：{切换动画}，event: triggertype});
	$(selector).menu({}); //根据ul li 多层嵌套创建菜单

//knockout
	var myViewModel = {
		firstName: '',  //普通属性
		lastName: ko.observable(defaultValue) //监听属性
		family: ko.observableArray([defaultArray]) //监听数组， 只监听数组增删，不监听其元素
		fullName = ko.dependentObservable(function(){}) //依赖监控绑定， 函数内部使用到其他视模变量
	}

	myViewModel.firstName()       //getter
	myViewModel.firstName('Lee')  //setter
	myViewModel.family([])            //兼容原生数组api, 可用于多选checkbox


	ko.applyBindings(myViewModel) //绑定this到myViewModel, 可用bind绑定到其他context

	data-bind =
		text: some words,
		html: <p>kfjkjkd</p> /,
		css: {classname: Boolean},
		attr: {attr: value, a: v}, //非合法属性名需加引号
		style: {stylename: value, sl: v}, //camal-case,
		value: inputValue,
		visible enable disable: Boolean,

		event: {type: func, t: fc}
		click: func(e),
		submit: func(form), //默认阻止默认行为，可返回true继续执行
		{eventType}Bubble: Boolean, //是否冒泡

		options: Array,
		optionsText: '',
		optionsCaption: '',
		selectOptions: Array,
		value: '',

		template:
			name:
			data: {}
			afterRender: fnc(elements)
			templateOptions: {}
			foreach: Array


	//创建自定义绑定
	ko.bindingHandlers.customBindingName = {
		"init": function (
			ele,                    //当前元素
			valueAccessor,          //绑定值
			allBindingAccessor,     //当前所有的绑定
			viewModel               //applyBindings绑定的对象
			){},
		"update": function(element, valueAccessor, allBindingAccessor, viewModel) {}
	}
	ko.toJS — 克隆你的view model对象，并且替换所有的observable 对象为当前的值，这样你可以得到一个干净的和Knockout无关的数据copy。
	ko.toJSON — 将view model对象转化成JSON字符串。原理就是：先调在view model上调用ko.toJS，然后调用浏览器原生的JSON 序列化器得到结果。ie67不支持，需引用json2.js类库。


//phonejs
	data-options
		dxLayout: { //布局指令 声明这是一个布局
			name: String
		}
		dxContentPlaceholder : { //layout中的占位指令
			name: 'content',
			transition: 'slide'
		}
		dataCommandsContainer{
			id: commandsId //引用Appnamespace.app.commandMapping[commandId]
		}

		dxView: { //视图指令 声明这是一个视图
			name: String,
			title: String,
			platform: "ios", //指定平台
			//event handler
			viewRendered: viewRendered,
			viewShowing: viewShowing,
			viewShown: viewShown,
			viewHidden: viewHidden
		}
		dxContent: { //view指令，指定layout替换位置,name=content的dxContentPlaceholder
			targetPlaceholder: 'content'
		}
		dxViewPlaceholder: { //在视图中引入另一个视图
			viewName: 'mall_header'
		}

	data-bind=
		dxTextBox: { //input:text
			value: name,
			valueChangeEvent: 'keyup'
		}
		dxButton: { //input:button
			text: 'Say Hello',
			clickAction: sayHello
		}
		dxToolbar: {
			items: [ {
				text: 'My First Application',
				align: 'center'
			} ]
		}
		dxCommand: { //toolbar button
			id: 'create',
			title: 'Create',
			action: Function
		}

	//初始化应用
	window.AppNamespace = {};
	$(function () {
		AppNamespace.app = new DevExpress.framework.html.HtmlApplication({
			//指定命名空间
			namespace: AppNamespace,
			//指定布局
			//指定为框架预定义布局
			layoutSet: DevExpress.framework.html.layoutSets['navbar'], //Array type
			//指定为自定义布局
			layoutSet: [{
				platform: "android",
				controller: new DevExpress.framework.html.NavBarController,
			},{}]
			//指定navbar布局的导航键
			navigation: [
				{title: "Home",onExecute: "#home",icon: "home"}, {}
			],
			commandMapping: {
				'ios-header-toolbar': {
					commands:[{
						id: String,
						location: String
						},{}
					]
				},
				"generic-header-toolbar": {}
			}
		});

		//注册路由, 第一个指定视图，其他为参数
		AppNamespace.app.router.register(":view", { view: "home"}); //默认视图
		AppNamespace.app.router.register(":view/:name", { view: "home", name: '' });
		//导航至默认路由
		AppNamespace.app.navigate();
		//导航至home视图并传入参数name=yizhi
		AppNamespace.app.navigate("home/yizhi");

		//每个视图在应用根命名空间一个对应的视图模型viewModel
		AppNamespace.home = function(params){
			var viewModel = {
				name: params.name, //通过params可获取传入的参数

			};
			return viewModel;
		}
	});

//angular
	<div ng-app="myapp">                    //$rootScope 根作用域
		<div ng-controller="controllerA">     //$scope控制器作用域, 继承于根作用域
			<div>
				<input ng-model="property" type="text"/>  //双向绑定$scope.property， 用于可编辑对象
				<span ng-bind="property"></span>          //单向绑定$scope.property
				<span>{{property}}</span>                 //同上, 在angular解析执行前会显示‘{{property}}’，体验不好
				<span>{{property | filter }}</span>       //使用过滤器
				//其他预定义指令
				<button ng-click="myfunc()"></button>       //绑定点击事件
				<div ng-class="active: active"></div>     //toggle('active', active)
				<ul ng-repeat="item in list">
					<li>{{item}}</li>
					<li ng-bind="item"></li>
				</ul>
				<div ng-if="">showsomethinghere</div>     //
				<form ng-submit="doSubmit()"></form>
			</div>
			<hello name='lecedong' gender='mail'></hello>
		</div>
		<div ng-controller="controllerB">
		</div>
	</div>

	//创建一个app，ng-app属性指定应用入口
	var myapp = angular.module("myapp", [])

	//创建控制器，由ng-controller指定,一个模块可有多个控制器
	myapp.controller('controllerA',function($scope, $rootScope) { //$scope, $rootScope 作为依赖注入

			//注册属性，由$scope限定范围
			$scope.name = "licedong";

			//注册函数
			$scope.sayHello = function() {
					alert('my name is '+ $scope.name)
			};
	})
	myapp.controller('controllerB');

	//创建一条指令
	myapp.directive("hello", function (dateFilter) { //依赖作为参数传入

		//指令定义对象
		var definition = {
			restrict: 'E',          //[E元素 A属性 C样式类 M注释], 自定指令识别位置，可同时指定多个
			template: '<div><span>kdkdk</span><span ng-transclude></span></div>', //指定替换的模板
			templateUrl: 'template.html', //指定替换的模板文件
			replace: Boolean,       //是否替换掉指令标签
			transclude: Boolean,    //是否保留指令标签内原有内容
			require: '^otherdirec',  //绑定otherdirec指令的控制器 ^?父元素:当前元素上查找
			controller: function($scope) {}, //定义指令独立控制器
			link: function(
				scope,      //Angular的scope对象
				element,    //指令匹配的jqLite封装的元素
				attrs,      //规范化后属性名字和相应值的对象
				cotroller   //绑定otherdirec指令的控制器的实例
			) {},
			compile: function(
				scope,
				element,
				attrs,
				accordionController
			) {},
			scope: { //指定scope会创建独立作用域，隔离模块上下文
				sex: "=gender", //绑定指令元素上的gender属性
				name: "=",      //绑定指令元素上的name属, 快捷方式
				sayHello: '&sayHello', //& 绑定了一个函数到独立作用域， 允许独立作用域调用它，同时保留了原来函数的作用域
			}
		}

		return definition;
	})

	//过滤器
	myapp.filter('filter', [a, b, c...] function(a, b, c...) {
		return function(data) {
			//handle data
			return data
		}
	})

// seajs
// seajs 兼容AMD的依赖前置，而部分库只识别AMD，做一下兼容
	define.amd = {};

	seajs.config({
		base: 'file:///Users/adonlee/data/ueditor/bower_components/',

		// seajs根据模块id查找模块
		alias: {

			jquery: 'jquery/dist/jquery'
			// jquery: 'rootDir/third-party/jquery-1.10.2'
		},
		paths: {
			rootDir: './'
			,componentDir: './bower_components'
		}
	})

	define('index', function(require, exports, module) {
		var $ = require('jquery');
		$('.container').text('this is the first test!!');
	})
	seajs.use('index')

	// seajs.use(id, cb); seajs查找对应id的模块
	// 由于jquery内部提供的模块ID为jquery，如果使用实际路径作为ID，seajs将匹配不到jquery，需对jquery的实际路径取别名
	// seajs.use('jquery', function($) {
	//  $('.container').text('this is the first test!!');
	// })


//base64加密算法
	b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
	//将数据流以三个字节为单位，均分为四个六位比特，映射到b64， 以'='标志结束
	ABC ->     01000001      01000010            01000011
		->     010000      010100      001001      000011
		-> b64(010000) b64(010100) b64(001001) b64(000011)
		->  N           R           J           D
enum ReadyState {
		HAVE_NOTHING,
		HAVE_METADATA,
		HAVE_CURRENT_DATA,
		HAVE_FUTURE_DATA,
		HAVE_ENOUGH_DATA
	}
enum MediaErrorCode {
	MEDIA_ERR_ABORTED = 1,
	MEDIA_ERR_NETWORK,
	MEDIA_ERR_DECODE,
	MEDIA_ERR_SRC_NOT_SUPPORTED
}
class MediaError {
	code: MediaErrorCode
}
class HTMLMediaElement extends HTMLElement {
		get error():MediaError {}
		get readyState():ReadyState {}
		get currentSrc():DOMString {}
		src 			:DOMString
		crossOrigin 	:DOMString
		preload 		:DOMString
		load() {}
}
interface HTMLMediaElement : HTMLElement {
	// error state
		MediaError? error  RO;
				code; // enum(MEDIA_ERR_ABORTED = 1, MEDIA_ERR_NETWORK, MEDIA_ERR_DECODE, MEDIA_ERR_SRC_NOT_SUPPORTED)
	// network state
		void load();
		DOMString   src;
		DOMString   currentSrc    RO;
		DOMString   crossOrigin;
		DOMString   preload;  //none|metadata|auto,""
		TimeRanges  buffered      RO;
		NetWorkState networkState RO;   //enum NetWorkState(NETWORK_EMPTY, NETWORK_IDLE, NETWORK_LOADING, NETWORK_NO_SOURCE)
		CanPlayTypeEnum canPlayType(DOMString type);enum CanPlayTypeEnum { "", "maybe", "probably" };
	// ready state
		readyState    RO;  //enum(HAVE_NOTHING, HAVE_METADATA, HAVE_CURRENT_DATA, HAVE_FUTURE_DATA, HAVE_ENOUGH_DATA)
		bool seeking  RO;   //Returns true if the user agent is currently seeking.
	// playback state
		double      duration   RO;  //获取视频时间长度（s）
		double      currentTime;    //获取当前时间点（s）
		double      playbackRate;   //播放速度（默认1）
		double      defaultPlaybackRate;
		Date        getStartDate();
		TimeRanges  played     RO;
		TimeRanges  seekable   RO;
		bool paused   RO;
		bool ended    RO;
		bool autoplay;  //privi to preload
		bool loop;
		void play();
		void pause();
	// media controller
		DOMString         mediaGroup;
		MediaController?  controller;
	// controls
		bool    controls;
		bool    muted;      //是否静音
		bool    defaultMuted;
		double  volume;     //音量(0-1)
	// tracks
		AudioTrackList  audioTracks RO;
		VideoTrackList  videoTracks RO;
		TextTrackList   textTracks  RO;
		TextTrack       addTextTrack(TextTrackKind kind, optional DOMString label = "", optional DOMString language = "");
	// The media element attributes,
	//   src,
	//   crossorigin,
	//   preload,
	//   autoplay,
	//   mediagroup,
	//   loop,
	//   muted,
	//   controls,
	// apply to all media elements.
	//event
		onloadstart
		ondurationchange  //在 onloadstart 之后和 onloadedmetadata 之前立即引发。
		onresize          //
		onloadedmetadata
		onemptied         //在视频对象重置为其初始状态时引发。
		onprogress        //指示正在下载媒体内容。
		oncanplaythrough  //预计可完整连续播放。
		onloadeddata      //数据已加载
		onended           //播放结束
		onplaying         //视频已开始播放
		oncanplay         //视频可以播放，但是可能必须先缓冲才能播放
		onseeking         //seeking属性为真（浏览器正在搜索位置）
		onseeked          //seeking属性为假（位置已经找到）
		onplay            //视频正在播放（使用play()函数触发）
		onpause           //视频暂停（使用pause()函数触发）
		ontimeupdate      //更新currentTime
		onratechange      //改变播放速度
		onvolumechange    //改变音量

		onstalled         //中断三秒以上时引发。这可以指示网络问题。
		onwaiting         //下一帧不可用（可能需要缓冲）。
		onsuspend         //暂停加载数据，等待中
		onabort           //未完成非错误加载中止
		onerror           //出现错误
};

interface HTMLVideoElement : HTMLMediaElement {
	long      videoWidth  RO;
	long      videoHeight RO;
	long      width;
	long      height;
	DOMString poster;     //img url
		//can not fire keyboardEvent: add tabindex=n to wrapper and listen the wrapper
};
//TimeRanges  from WHATWG Working Draft
length  //
start(index)  //第index段的开始时间点
end(index)    //第index段的结束时间点

//Canvas
canvas.toDataUTL(MIME)
ctx = Canvas.getContext('2d')
//绘制路径
ctx.beginPath();        // 开始路径绘制
ctx.moveTo(20, 20);     // 设置路径起点，坐标为(20,20)
ctx.lineTo(200, 20);    // 绘制一条到(200,20)的直线
ctx.closePath();        //绘制一条回到起点的线
ctx.lineWidth = 1.0;    // 设置线宽
ctx.strokeStyle = "#CC0000"; // 设置线的颜色
ctx.stroke();           // 进行线的着色，这时整条线才变得可见
//矩形
ctx.fillStyle/strokeStyle = 'color';
ctx.fillRect/strokeRect/clearRect(posX, posY, width, heigh)   //实心/空心/清除
//文本
ctx.font = "Bold 20px Arial";   // 设置字体
ctx.textAlign = "left";         // 设置对齐方式
ctx.fillStyle = "#008600";      // 设置填充颜色
ctx.fillText/strokeText("text", poxX, posY); //实心/空心
//圆形和扇形
ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
		ctx.beginPath();
		ctx.arc(60, 60, 50, 0, Math.PI*2, true);
				//实心
				ctx.fillStyle = "#000000";
				ctx.fill();
				//空心
				ctx.lineWidth = 1.0;
				ctx.strokeStyle = "#000";
				ctx.stroke();
//渐变色
var myGradient = ctx.createLinearGradient(sX, sY, dX, dY);
myGradient.addColorStop(0, "#BABABA");
myGradient.addColorStop(1, "#636363");
ctx.fillStyle = myGradient;
ctx.fillRect(10,10,200,100);
//阴影
ctx.shadowOffsetX = 10; // 设置水平位移
ctx.shadowOffsetY = 10; // 设置垂直位移
ctx.shadowBlur = 5; // 设置模糊度
ctx.shadowColor = "rgba(0,0,0,0.5)"; // 设置阴影颜色
ctx.fillStyle = "#CC0000";
ctx.fillRect(10,10,200,100);
//图像
ctx.drawImage(img, [iX, iY, iW, iH,] cX, cY, [cW, cH] )
		//需图片加载完再画入
		//i* 图像剪切参数 c*画布画入参数
ctx.createImageData(w, h)       //创建图像数据对象
ctx.createImageData(imageData)  //创建一个新的长宽相同的空数据对象
ctx.getImageData(cX, cY, cW, cH) //获取图像数据
ctx.putImageData(imgData, iX, iY, [cX, cY, cW, cH])

interface CanvasRenderingContext2D {

	//ImageSource in (HTMLImageElement or HTMLCanvasElement or HTMLVideoElement)
	readonly HTMLCanvasElement canvas;// back-reference to the canvas
		void save(); // push state on state stack
		void restore(); // pop state stack and restore state
	// transformations (default transform is the identity matrix)
		void scale(x, y);
		void rotate(angle); //without unit
		void translate(x, y);
		void transform(a, b, c, d, e, f);
		void setTransform(a, b, c, d, e, f);
	// colors and styles (see also the CanvasDrawingStyles interface)
		(DOMString or CanvasGradient or CanvasPattern) strokeStyle = 'black';
		(DOMString or CanvasGradient or CanvasPattern) fillStyle = 'black';
		CanvasPattern createPattern(ImageSource, [TreatNullAs=Emptytring]DOMString repetition);
		CanvasGradient createLinearGradient(x0, y0, x1, y1);
		CanvasGradient createRadialGradient(x0, y0, r0, x1, y1, r1);
			interface CanvasGradient {
					// opaque object
					void addColorStop(offset, DOMString color);
			};
	// compositing合成
		globalAlpha = 1.0;          //全局透明度
		DOMString globalCompositeOperation = 'source-over';
	//START implements CanvasDrawingStyles
		// line caps/joins
		double      lineWidth = 1;
		DOMString   lineCap; //线条的结束端点样式"butt", "round", "square"
		DOMString   lineJoin; //两条线相交时，所创建的拐角类型"miter", "round", "bevel"
		double      miterLimit = 10;//最大斜接长度
		// dashed lines
		void setLineDash(sequence< double > segments); // default empty
		sequence< double > getLineDash();
		lineDashOffset;
		DOMString font;         // (default 10px sans-serif)
		DOMString textAlign;    // "start", "end", "left", "right", "center"
		DOMString textBaseline; // "alphabetic", "top", "hanging", "middle", "ideographic", "bottom"
	//END implements CanvasDrawingStyles
	// shadows
		shadowOffsetX = 0;
		shadowOffsetY = 0;
		shadowBlur    = 0;
		DOMString shadowColor; // (default transparent black)
	// rects
		void rect(x, y, w, h);// from interface CanvasPathMethods
		void clearRect(x, y, w, h);
		void fillRect(x, y, w, h);
		void strokeRect(x, y, w, h);
	// path API
		void beginPath();
		void fill();    //填充路径
		void stroke();  //画出路径
		void drawFocusIfNeeded(Element element);
		void clip();        //从原始画布剪切任意形状和尺寸的区域
		boolean isPointInPath(x, y);
			//START implements CanvasPathMethods
			// shared path API methods
			void closePath();  //创建从当前点回到起始点的路径
			void moveTo(x, y);
			void lineTo(x, y);
			void quadraticCurveTo(cpx, cpy, x, y);    //创建二次贝塞尔曲线
			void bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);//创建三次贝塞尔曲线
			void arcTo(x1, y1, x2, y2, radius);             //创建两切线之间的弧/曲线
			void arc(x, y, radius, startAngle, endAngle, anticlockwise = false);
			//END implements CanvasPathMethods
	// text
		void fillText(DOMString text, x, y, [maxWidth]);
		void strokeText(DOMString text, x, y, [maxWidth]);
		TextMetrics measureText(DOMString text); //返回包含指定文本宽度的对象
				interface TextMetrics {
						readonly width;
				};
	// hit regions
		void addHitRegion(HitRegionOptions options);
		void removeHitRegion(DOMString id);
		void clearHitRegions();
			dictionary HitRegionOptions {
					// dictionary to allow expansion on Hit Regions in Canvas Context 2D Level 2
					DOMString id = "";
					// for control-backed regions:
					Element? control = null;
			};
	// pixel manipulation
		//需图片加载完再画入,i* 图像剪切参数 c*画布画入参数
		void drawImage(ImageSource, [iX, iY, iW, iH,] cX, cY, [cW, cH] );
		void putImageData(ImageData, iX, iY, [cX, cY, cW, cH]);
		ImageData createImageData(sw, sh);//创建一个新的知道长宽的空数据对象
		ImageData createImageData(ImageData);//创建一个新的长宽相同的空数据对象
		ImageData getImageData(sx, sy, sw, sh);
			interface ImageData {
				readonly unsigned long width;
				readonly unsigned long height;
				readonly Uint8ClampedArray data;
			};
};

// attribute and property 特性与属性
attribute节点都是在HTML代码中可见的，而property只是一个普通的名值对属性。
attribute使用getAttribute方法获取，property直接属性调用
默认attribute一般有一个对应的property，自定义的没有

//== and ===
==:
	不同类型比较可能产生强制类型转换，
	带来性能消耗，且转换复杂, 不建议使用
	""           ==   "0"           // false
	0            ==   ""            // true 字符串与数字比较前会被强制转换为数字
	0            ==   "0"           // true
	false        ==   "false"       // false
	false        ==   "0"           // true
	false        ==   undefined     // false
	false        ==   null          // false
	null         ==   undefined     // true
	" \t\r\n"    ==   0             // true
	1.字符串与数字比较前会被强制转换为数字
	2.。。。。
===:严格等于操作符，不进行强制类型转换
	强烈推荐使用严格等于操作符。如果类型需要转换，应该在比较之前显式的转换， 而不是使用语言本身复杂的强制转换规则。

// defer and async
defer:
	IE < 10 无法保证执行顺序，先下载完先执行，如果有依赖就悲剧了

async:
	IE < 10 不支持



// ES6
	let name = 'yizhi';
	// 块级作用域
	// 不存在变量提升
	// 暂时性死区TDZ：块作用域内，let声明之前使用会抛出ReferenceError
	// 不允许重复声明

	const PI = 3.1415;
	// 常量，重新复制不会报错，只会默默失败
	// 拥有let的特性

	exprot const PI = 3.14 // 暴露给其他模块的常量

	global // 相当于浏览器环境中的window

	// 解构赋值
	// 1.字符串解构
	const [a, b, c] = '123'; // a='1',b='2',c='3'
	let {length : len} = '123'; // len=3, '字符串'也是对象

	// 2.数组解构，并行赋值 (适合继承与Iterator接口的数据结构)
	let [a, b, c=5] = [1, null]; // a=1,b=null,c=5
		// 当对应值为undefined时，才使用默认值
	let [, , c] = [1, 3, 5]; // c=5
	let [a, [b]] = [1, [2, 3]]; // a=1,b=2

	// 3.对象解构，不同于数组根据顺序取值，对象解构根据属性取值
	var {age:alias, name} = {name: 'yizhi', age: 24} // name='yizhi', alias=24
		// 先找到同名属性(age)，然后再赋给对应的变量(alias)。真正被赋值的是后者，而不是前者
		// 相当于var {age:alias, name:name} = {name: 'yizhi', age: 24}
	var {age, name:n} = {name: 'yizhi', age: 24} // n='yizhi', name=undefined
	var {info:{name:n, age:a=25}} = {info: {name:'yizhi'}} // info=undefined,name=undefined, n='yizhi', a=25;

	// 字符串扩展, 支持32位的UTF-16字符, 可以识别大于0xFFFF的码点
		// JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是两个字符。
		// JavaScript采用\uxxxx形式表示一个字符, ，这种表示法只限于\u0000——\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表达
		// ES6对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。==>
		'\u{1F680}' === '\uD83D\uDE80' // true;

		str.charAt ==> at
		str.charCodeAt ==> codePointAt
		String.fromCharCode ==> fromCodePoint
		Boolean str.includes/startWith/endsWith(substr, offset)
		String str.repeat(times:Integer)

		// 模版字符串
		// 以反引号(`)标志，
		// 可换行
		// 支持内嵌变量，写在${}之中，大括号内部可以放入任意的JavaScript表达式，可以进行运算，以及引用对象属性
			`this is first line
				这是内嵌变量：${name}
			this is last line`

	// 函数
		// 参数默认值：
			function(x=1, y) {};
			// 只有当对应实参为undefined,才触发默认值
			// 注意，非尾部的参数，也是可以设置默认值的
			// 参数默认值所处的作用域，不是全局作用域，而是函数作用域
			// 参数变量是默认声明的，所以不能用let或const再次声明

		// 参数解构:
		function show([x, y]) {console.log(x, y)} //  show([2,4]) ==> 2 4

		// rest参数
		// 必须是最后一个参数
		// 函数的length属性，不包括rest参数
		function (x, ...others) // others == arguments.slice(1);

		// 箭头函数，简洁，简化回调函数
		// 1）箭头函数没有自己的this，所以内部的this是定义时所在的对象，而不是使用时所在的对象。类似的还有arguments,super,new.target
		// 2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
		// 3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
		// 4）不可以使用yield命令，因此箭头函数不能用作Generator函数。

		var func = (arg1, arg2) => {return arg1 + arg2};
		var func = (arg1, arg2) => arg1 + arg2;   // 输出作为返回
		var func = arg1 => arg1;                  // 单个参数可以省略括号
		var func = () => arg1;                    // 无参
		var func = () => ({name: 'yizhi'});       // 返回对象须用大括号包裹，否则被视为代码块，语法错误
		var func = ({name, age}) => {};           // 与变量解构结合

		// 尾递归优化

	// 扩展运算符:... // 将一个数组转为用逗号分隔的参数序列
		func(...args) == func.apply(null, args)
		[1, 3, ...others] == [1, 3].concat(others)
		// 结合数组解构
		const [first, ...rest] = [1, 2, 3] // first=1, rest=[2,3]
		// 解构字符串
		[...'解构'] == ['解', '构']

	// 对象字面量
		{name, say(){}} ==> {'name': name, 'say': function(){}}  // 直接写入变量，默认会以变量名作为键名，同样支持函数


//tips
	// scope:
	// closure:
	// hoisting: 变量提升 var > function > statements













