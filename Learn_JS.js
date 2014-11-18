//ECMAScript
    //原始类型primitive type, 空间固定，存在栈中
        Undefined       //唯一值undefined，声明但未初始化的变量
        Null            //对象
        Boolean
        Number 
        String
    //引用类型， 引用值大小会改变，从栈中分配

//全局方法与属性
    decodeURI()           //解码某个编码的 URI。
    encodeURI()           //把字符串编码为 URI。
    decodeURIComponent()  //解码一个编码的 URI 组件。
    encodeURIComponent()  //把字符串编码为 URI 组件。
    escape()              //对字符串进行编码。
    unescape()            //对由 escape() 编码的字符串进行解码。
    eval()                //计算 JavaScript 字符串，并把它作为脚本代码来执行。
    getClass()            //返回一个 JavaObject 的 JavaClass。
    isFinite()            //检查某个值是否为有穷大的数。
    isNaN()               //检查某个值是否是数字。
    String()              //相对toString(),对null和undefined值强制类型转换可以生成字符串而不引发错误
    Boolean()             //！！
    Number()              //把对象的值转换为数字。整个输入
    parseFloat()          //left trim，出现的第一个非+、-、0-9、.、e、E字符及以后忽略
    parseInt()            //left trim，出现的第一个非数字字符及以后忽略

    Infinity    //代表正的无穷大的数值。
    java        //代表 java.* 包层级的一个 JavaPackage。
    NaN         //指示某个值是不是数字值。
    Packages    //根 JavaPackage 对象。
    undefined   //指示未定义的值。

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
    constructor               //对创建对象的函数的引用（指针）。对于 Object 对象，该指针指向原始的 Object() 函数。
    Prototype                 //对该对象的对象原型的引用。对于所有的对象，它默认返回 Object 对象的一个实例。
    hasOwnProperty(property) //判断对象是否有某个特定的属性。
    IsPrototypeOf(object)   //判断该对象是否为另一个对象的原型。
    PropertyIsEnumerable   //判断给定的属性是否可以用 for...in 语句进行枚举。
    ToString()          //返回对象的原始字符串表示。对于 Object 对象，ECMA-262 没有定义这个值，所以不同的 ECMAScript 实现具有不同的值。
    ValueOf()           //返回最适合该对象的原始值。对于许多对象，该方法返回的值都与 ToString() 的返回值相同。

//操作符之间的优先级（高到低）:
    算术操作符 → 比较操作符 → 逻辑操作符 → "="赋值符号

//日期
    Date.get/setDate() 			//日期
    Date.get/setFullYear() 	//四位年份
    Date.get/setYear() 			//两位
    Date.get/setMonth() 		//
    Date.get/setDay() 			//星期
    Date.get/setHours() 		//
    Date.get/setMinutes() 	//
    Date.get/setSeconds() 	//
    Date.get/setTime()			//时间(ms)

//字符串处理
    strObj.length
    strObj.indexOf/(substring, offset)  //
    strObj.lastIndexOf(substring, offset)  //反向检索
    strObj.charAt(index)
    strObj.charCodeAt(index)
    strObj.split(separator || '', maxlen) // maxlen limits the length of return array
    strObj.slice(startPos, endPos||END)   //接受负数，而substring则视为0
    strObj.substring(startPos, endPos||END)
    strObj.substr(startPos, length)
    strObj.toUpper/LowerCase() 
    strObj.toLocaleUpper/LowerCase() 
    strObj.localeCompare(str)  //>str?正数：负数，相同返回0
    obj.toString()

//数字转换
    numObj.toString(n)  //n进制转换，默认十进制
    numObj.toFixed(n)   //四舍五入到小数点n（0<n<20）位
    numObj.toString     //把数字转换为字符串，使用指定的基数。
    numObj.toLocaleString  //把数字转换为字符串，使用本地数字格式顺序。
    numObj.toExponential //把对象的值转换为指数计数法。
    numObj.toPrecision    //把数字格式化为指定的长度。会对数进行舍入
    numObj.valueOf      //返回一个 Number 对象的基本数字值。

//数学运算
    Math.ceil(x) //向上取整
    Math.floor(x) //向下取整
    Math.round(x) //四舍五入
    Math.random()  //0-1

//数组
    Array.concat(arr1..n)
    Array.join(seperator || ',') //
    Array.reverse()
    Array.slice(starPos, endPos || end)
    Array.sort(sortFunc || Unicode order) // sortFunc(a, b) > 0 ? a<=>b:;
    Array.shift()       //delete and return the first
    Array.pop()         //delete and return the last
    Array.push(eles)    //append new and return the length
    Array.unshift(eles) //prepend new and return the length
    Array.splice(offset,len,[items])//replace with items then retrun which deleted 
    Array.map(function(a){})
    Array.reduce(function(a,b){})

//window对象
    window.closed           //Returns a Boolean value indicating whether a window has been closed or not
    window.defaultStatus    //Sets or returns the default text in the statusbar of a window
    window.frames           //Returns an array of all the frames (including iframes) in the current window
    window.innerHeight      //Returns the inner height of a window's content area
    window.innerWidth       //Returns the inner width of a window's content area
    window.length           //Returns the number of frames (including iframes) in a window
    window.name             //Sets or returns the name of a window
    window.opener           //Returns a reference to the window that created the window
    window.outerHeight      //Returns the outer height of a window, including toolbars/scrollbars
    window.outerWidth       //Returns the outer width of a window, including toolbars/scrollbars
    window.pageXOffset      //Returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window
    window.pageYOffset      //Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window
    window.parent           //Returns the parent window of the current window
    window.screenLeft       //Returns the x coordinate of the window relative to the screen
    window.screenTop        //Returns the y coordinate of the window relative to the screen
    window.screenX          //Returns the x coordinate of the window relative to the screen
    window.screenY          //Returns the y coordinate of the window relative to the screen
    window.self             //Returns the current window
    window.status           //Sets or returns the text in the statusbar of a window
    window.top              //Returns the topmost browser window
    window.atob()       //Decodes a base-64 encoded string
    window.btoa()       //Encodes a string in base-64
    window.blur()       //Removes focus from the current window
    window.focus()      //Sets focus to the current window
    window.moveBy()     //Moves a window relative to its current position
    window.moveTo()     //Moves a window to the specified position
    window.print()      //Prints the content of the current window
    window.resizeBy()   //Resizes the window by the specified pixels
    window.resizeTo()   //Resizes the window to the specified width and height
    window.scrollBy()   //Scrolls the content by the specified number of pixels
    window.scrollTo()   //Scrolls the content to the specified coordinates
    window.stop()       //Stops the window from loading
    //消息对话框
    window.alert('message');
    window.confirm('message');          //return boolean
    window.prompt('message', input);    //return input

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
    location.search         //  search	   //key and value
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
    screen.availHeight //Returns the height of the screen (excluding the Windows Taskbar)
    screen.availWidth  
    screen.colorDepth  //Returns the bit depth of the color palette for displaying images
    screen.pixelDepth  //Returns the color resolution (in bits per pixel) of the screen, gt IE 9
    screen.height      //Returns the total height of the screen，DOM0非标准
    screen.width  

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

    document.getElementById()           //Returns the element that has the ID attribute with the specified value
    document.getElementsByName()     
    document.getElementsByTagName()
    document.getElementsByClassName()   //Returns a NodeList containing all elements with the specified class name
    document.getElementsByName()        //Accesses all elements with a specified name
    document.getElementsByTagName()     //Returns a NodeList containing all elements with the specified tagnam
    document.querySelector()            //Returns the first element that matches a specified CSS selector(s) in the document
    document.querySelectorAll()         //Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document
    
    document.createAttribute()  //Creates an attribute node
    document.createComment()    //Creates a Comment node with the specified text
    document.createDocumentFragment()   //Creates an empty DocumentFragment node
    document.createElement()    //Creates an Element node
    document.createTextNode()   //Creates a Text node
    Element.getAttribute('attribute');
    Element.setAttribute('attribute', 'value');

//样式
    //内联样式控制  r&w
        Obj.style.property = stylevalue  
    //获取计算后样式 r only
        //IE || 非IE, IE9+
        CSSObj = Obj.currentStyle || window.getComputedStyle(Obj[, psudo])
        CSSObj
            property   //部分不兼容
            getPropertyValue(property)    //css-case
            getAttribute(property)        //camel-case

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
    window.pageYOffset                    //垂直滚动距离
    window.pageXOffset                    //水平滚动距离
    window.screenTop                      //浏览器与屏幕顶端距离
    window.screenY                        //同上
    window.screenLeft                     //浏览器与屏幕左端距离
    window.screenX                        //同上

//Event事件
    阻止事件默认行为：
    e.preventDefault?e.preventDefault():(window.event.returnValue = true)
    阻止事件冒泡行为：
    e.stopPropagation?e.stopPropagation():(window.event.cancelBubble = true)
//标准Event 属性和方法
    clientX/clientY 返回鼠标在窗口客户区域中的x/y坐标。
    screenX/screenY 返回鼠标相对于用户屏幕的x/y坐标
    pageX/pageY     获取鼠标指针位置相对于父文档的 x/y像素坐标
    layerX/layerY   返回相对于触发事件的对象，鼠标位置的x/y坐标
    在FireFox中只有触发事件对你的CSS属性 position 值不为 static才能获取到正确的坐标值
    button          返回按下的鼠标键。标准:0左1右2中  IE:0空1左2右3左右4中5左中6右中7全
    type            返回没有“on”作为前缀的事件名
    target          发生事件的节点，可能与currentTarget不同
    currentTarget   =this当前正在运行事件句柄的节点
    relatedTarget   引用与事件的目标节点相关的节点。（mouseover--鼠标离开的节点，mouseout--鼠标将进入的节点）
    eventPhase 一个数字，指定当前所处的事件传播过程的阶段。它的值为常量：Event.CAPTURING_PHASE、Event.AT_TARGET、Event.BUBBLING_PHASE
    timeStamp 一个Date对象，声明了事件何时发生
    bubbles 一个布尔值，声明该事件是否在文档树中起泡
    cancelable 一个布尔值，声明该事件是否有默认动作
    stopPropagation() 阻止事件传播
    preventDefault() 阻止执行默认动作
    shiftKey/ctrlKey/altKey  boolean
    metaKey 返回一个布尔值，指示当事件发生时，"meta" 键是否被按下并保持住。
    which 返回keydown何keyup事件发生的时候按键的代码，以及keypress 事件的Unicode字

//事件属性
    dataTransfer 
    toElement 
    fromElement 
    y/x 
    offsetY/offsetX  //相对位置
    clientY/clientX 
    screenY/screenX 
    pageY/pageX 
    layerY/layerX 
    webkitMovementY 
    webkitMovementX 
    movementY/movementX 
    button 
    which /charCode /keyCode  //键值，charCode只用于keypress
    detail 
    view 
    clipboardData 
    path 
    cancelBubble 
    returnValue 
    srcElement 
    defaultPrevented 
    timeStamp 
    cancelable 
    bubbles 
    eventPhase 
    type 
    initMouseEvent 
    initUIEvent 
    stopPropagation 
    preventDefault 
    initEvent 
    stopImmediatePropagation 
    NONE 
    CAPTURING_PHASE 
    AT_TARGET 
    BUBBLING_PHASE 
    MOUSEDOWN 
    MOUSEUP 
    MOUSEOVER 
    MOUSEOUT 
    MOUSEMOVE 
    MOUSEDRAG 
    CLICK 
    DBLCLICK 
    KEYDOWN 
    KEYUP 
    KEYPRESS 
    DRAGDROP 
    FOCUS 
    BLUR 
    SELECT 
    CHANGE 

//节点属性
    在DOM中，每个节点都是一个对象。DOM 节点有三个重要的属性：前两者只读
              nodeType    nodeName        nodeValue    
    元素节点   1          标签名          null 
    属性节点   2          属性名          属性值
    文本节点   3          #text           文本本身（包括单独的换行、tab、空格）
    注释节点   8          #comment        注释本身
    文档节点   9          #document       null

//子元素访问
    children    /parentElement /lastElementChild   /firstElementChild  /nextElementSibling /previousElementSibling /childElementCount(children.length) 
//子节点访问，换行,tab,空格会被当成一个文本节点
    childNodes  /parentNode    /lastChild          /firstChild         /nextSibling        /previousSibling 
//内容访问
    outerHTML /innerHTML /outerText /innerText //outer包括自身，text去掉标签

//类的操作
    DOMElement.classList
        add
        remove
        item        //索引，有必要存在吗？
        contains    //判断
        toggle      //反转 并返回当前状态

//节点操作
    newnode= document.creatElement(tabName)
    newnode= document.creatTextNode(data)
    parentnode.appendChild(newnode)             //last child
    parentnode.insertBefore(newnode, [node])    //before node or last child
    parentnode.removeChild(node)                //node  will be the return
    parentnode.replaceChild(newnode, oldnode)

//浏览器窗口可视区域大小
    获得浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）的方法:
    一、对于IE9+、Chrome、Firefox、Opera 以及 Safari：
        window.innerHeight - 浏览器窗口的内部高度
        window.innerWidth - 浏览器窗口的内部宽度
    二、对于 Internet Explorer 8、7、6、5：
        document.documentElement.clientHeight表示HTML文档所在窗口的当前高度。
        document.documentElement.clientWidth表示HTML文档所在窗口的当前宽度。
    或者Document对象的body属性对应HTML文档的<body>标签
        document.body.clientHeight
        document.body.clientWidth
    在不同浏览器都实用的 JavaScript 方案：
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
                     
    scrollHeight 5 
    scrollWidth 640 
    scrollTop 0 
    scrollLeft 0 
    clientHeight 5 
    clientWidth 640 
    clientTop 0 
    clientLeft 0 
    offsetParent <div id=​"controls">​…​</div>​ 
    offsetHeight 5 
    offsetWidth 640 
    offsetTop 0 
    offsetLeft 0 

    localName div 
    tagName DIV 
    prefix null 
    namespaceURI http://www.w3.org/1999/xhtml
    attributes NamedNodeMap {0: id, 1: class, length: 2, getNamedItem: function, setNamedItem: function, removeNamedItem: function, item: function…}0: id1: classlength: 2__proto__: NamedNodeMap 
    textContent 
    baseURI file:///C:/Users/YIZHI/Desktop/nima.html 
    ownerDocument #document 

////JQuery
    :first
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

//JSON
    JSON 语法是 JavaScript 语法的子集。[1] 
    JSON 语法规则

    JSON 语法是 JavaScript 对象表示语法的子集。
    数据在由逗号分隔的名称/值对中
    花括号保存对象
    方括号保存数组

    JSON 值可以是：
    数字（整数或浮点数）
    字符串（在双引号中）
    逻辑值（true 或 false）
    var json={
            name: 'lilei',
            age: 12,
            gender: 'boy',
            grade: ['seven','hghghd','jhdkal']
        }
    document.write(json.grade[1]);


//插件
myfocus  //焦点图插件 独立开源


//apply and call
apply和call类似，只是后面的参数是通过一个数组传入，而不是分开传入。两者的方法定义：
  call( thisArg [，arg1，arg2，… ] );  // 参数列表，arg1，arg2，...
  apply(thisArg [，argArray] );     // 参数数组，argArray
两者都是将某个函数绑定到某个具体对象上使用，自然此时的this会被显式的设置为第一个参数。


//base64加密算法
  b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  //将数据流以三个字节为单位，均分为四个六位比特，映射到b64， 以'='标志结束
  ABC ->           01000001      01000010      01000011
      ->     010000      010100      001001      000011
      -> b64(010000) b64(010100) b64(001001) b64(000011)
      ->  N           R           J           D

//video
    //property and event
    video.duration  //获取视频时间长度（s）  r
    video.currentTime //获取当前时间点（s）  r&w
    video.muted     //是否静音
    video.volumn    //音量(0-1)  r&w
    video.playbackrate  //播放速度（默认1） r&w
    video.play()/pause()/paused  //播放/暂停/是否暂停
    video.canPlayType('video/mp4; codecs="avc1.42E01E"'); //判断能否播放

    onloadstart       在 Internet Explorer 开始查找媒体数据时引发。在从站点请求视频（或音频）资源时发生此事件，并且每个请求只发生一次。
    ondurationchange  在 onloadstart 之后和 onloadedmetadata 之前立即引发。
    onloadedmetadata      在当前播放位置加载媒体数据时引发。视频可以开始播放。
    onemptied         在视频对象重置为其初始状态时引发。
    onstalled         在下载被中断三秒以上时引发。这可以指示网络问题。
    onwaiting         在播放由于视频的下一帧不可用（可能需要缓冲）而停止时引发。
    onprogress        引发此事件以指示正在下载媒体内容。下载完成后停止引发。
    oncanplaythrough  在不需要进一步缓冲就可以播放直至文件结束时引发。
    onended           在播放结束时引发。
  
    suspend           浏览器不加载数据，等待中
    abort             数据加载被中止
    error             出现错误
    emptied           数据意外丢失
    loadeddata        数据已加载
    waiting           等待更多数据
    playing           视频已开始播放
    canplay           视频可以播放，但是可能必须先缓冲才能播放
    canplaythrough    已有足够数据来播放完整视频
    seeking           seeking属性为真（浏览器正在搜索位置）
    seeked            seeking属性为假（位置已经找到）
    timeupdate        更新currentTime
    play              视频正在播放（使用play()函数触发）
    pause             视频暂停（使用pause()函数触发）
    durationchange    视频时长已经被改变（对视频流而言）
        ratechange    视频播放速度已经被改变
      volumechange    音量已经被改变

    //bug
    can not fire keyboardEvent: add tabindex=n to wrapper and listen the wrapper 

// attribute and property 特性与属性
  attribute节点都是在HTML代码中可见的，而property只是一个普通的名值对属性。
  attribute使用getAttribute方法获取，property直接属性调用
  默认attribute一般有一个对应的property，自定义的没有
