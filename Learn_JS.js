//ECMAScript
  //原始类型primitive type, 空间固定，存在栈中
      Undefined       //唯一值undefined，声明但未初始化 或不存在的变量
      Null            //对象 
      Boolean         //false | true
      Number 
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

    null                Null       object
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
  Date.get/setDate()      //日期
  Date.get/setFullYear()  //四位年份
  Date.get/setYear()      //两位
  Date.get/setMonth()     //
  Date.get/setDay()       //星期
  Date.get/setHours()     //
  Date.get/setMinutes()   //
  Date.get/setSeconds()   //
  Date.get/setTime()      //时间(ms)

//字符串处理
  String.length           
  String.[i|lastI]ndexOf(substring, offset)  //正|反向检索
  String.charAt(index)
  String.charCodeAt(index)
  String.split(separator='', maxlen)    // maxlen limits the length of return array
  String.slice(startPos, endPos=END)    //接受负数，而substring则视为0
  String.substring(startPos, endPos=END)
  String.substr(startPos, length)
  String.toUpper/LowerCase() 
  String.toLocaleUpper/LowerCase() 
  String.localeCompare(str)  //>str?正数：负数，相同返回0
  obj.toString()

//数字转换
  Number.toString(n)  //n进制转换，默认十进制
  Number.toFixed(n)   //四舍五入到小数点n（0<n<20）位
  Number.toString     //把数字转换为字符串，使用指定的基数。
  Number.toBitString     //把数字转换为二进制字符串
  Number.toLocaleString  //把数字转换为字符串，使用本地数字格式顺序。
  Number.toExponential //把对象的值转换为指数计数法。
  Number.toPrecision    //把数字格式化为指定的长度。会对数进行舍入
  Number.valueOf      //返回一个 Number 对象的基本数字值。

//数学运算
  Math.ceil(x) //向上取整
  Math.floor(x) //向下取整
  Math.round(x) //四舍五入
  Math.random()  //0-1

//数组[]
  new Array(arguments)    //当只有一个参数且为整数时 返回一个对应长度的空数组
  []                      //返回一个空数组， 推荐方式(短小简洁，可读性)
  Array.length            //可写,小于原值会发生截取
  Array.concat(arr1..n)
  Array.join(seperator = ',') //
  Array.reverse()
  Array.slice(starPos, endPos = END)
  Array.sort(sortFunc = Unicode order) // sortFunc(a, b) > 0 ? a<=>b:;
  Array.shift()       //delete and return the first
  Array.unshift(eles) //prepend new and return the length
  Array.pop()         //delete and return the last
  Array.push(eles)    // append new and return the length
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
  Element.removeAttribute('attribute');
  Element.getAttribute('attribute');
  Element.setAttribute('attribute', 'value');

//样式
  //内联样式控制  r&w
      Obj.style.property = stylevalue  
  //获取计算后样式 r only
  //IE || 非IE, IE9+
  CSSObj = Obj.currentStyle || window.getComputedStyle(Obj[, psudo])
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
  window.pageYOffset                    //垂直滚动距离
  window.pageXOffset                    //水平滚动距离
  window.screenTop                      //浏览器与屏幕顶端距离
  window.screenY                        //同上
  window.screenLeft                     //浏览器与屏幕左端距离
  window.screenX                        //同上

//Event事件
  Ele.onclick= func                                   //DOM0  改变回调
  Ele.add/removeEventlistener(type, func, useCapture) //DOM2 添加回调
  Ele.attach/detachEvent('on'+type, func)             //IE8-  同上
  //获取事件对象
  e = event || window.event 
  //获取事件目标
  e.type = e.type || e.srcElement
  //阻止事件默认行为：
  e.preventDefault?e.preventDefault():(window.event.returnValue = true)
  //阻止事件冒泡行为：
  e.stopPropagation?e.stopPropagation():(window.event.cancelBubble = true)
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
  webkitMovementY 
  webkitMovementX 
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
  outerHTML /innerHTML /outerText /innerText //outer包括自身，text去掉标签

//类的操作 IE9
  DOMElement.classList
      add
      remove
      item        //索引，有必要存在吗？
      contains    //判断
      toggle      //反转 并返回当前状态

//节点操作
  newnode= document.creatElement(tabName)
  newnode= document.creatTextNode(data)
  newnode= element.cloneNode(recur)           //recur？clone all tree：enpty node
  parentnode.appendChild(newnode)             //last child
  parentnode.insertBefore(newnode, [node])    //before node or last child
  parentnode.removeChild(node)                //node  will be the return
  parentnode.replaceChild(newnode, oldnode)
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
  获得浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）的方法:
  一、对于IE9+、Chrome、Firefox、Opera 以及 Safari：
      window.innerHeight - 浏览器窗口的内部高度
      window.innerWidth - 浏览器窗口的内部宽度
  二、对于 IE8-：
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
  $.fn
  $.extend
  $.expando
  $.isReady
  $.error
  $.noop
  $.isFunction/Array/Window/Numeric/EmptyObject/PlainObject
  $.inArray
  $.type
  $.globalEval
  $.camelCase
  $.nodeName(element, nodeName) //return Boolean
  $.each(obj, callback, args) //args?callback(args):callback(key, value)  if return false:break
  $.trim
  $.makeArray
  $.merge(arr-like1, arr-like2)
  $.grep(eles, callback(ele,index), invert) // !invert == !callback()?pass:push
  $.filter(selector, eles, not)     //get elementNode matched selector
  $.map(eles, callback(ele,i,arg), arg)
  $.guid
  $.proxy
  $.now     //return datatime of now in Integer
  $.support
  $.find
  $.expr
  $.unique
  $.text
  $.isXMLDoc
  $.contains
  $.dir
  $.sibling
  $.Callbacks
  $.Deferred
  $.when
  $.readyWait
  $.holdReady
  $.ready
  $.acceptData
  $.cache
  $.noData
  $.data/hasData/removeData
  $._data
  $._removeData
  $.queue
  $.dequeue
  $._queueHooks
  $.access
  $.event
  $.removeEvent
  $.Event
  $.clone
  $.buildFragment
  $.cleanData
  $.swap
  $.cssHooks
  $.cssNumber
  $.cssProps
  $.style
  $.css
  $.Tween
  $.easing
  $.fx
  $.Animation
  $.speed
  $.timers
  $.valHooks
  $.attr
  $.removeAttr
  $.attrHooks
  $.propFix
  $.prop
  $.propHooks
  $.parseJSON
  $.parseXML
  $.active
  $.lastModified
  $.etag
  $.ajaxSettings
  $.ajaxSetup
  $.ajaxPrefilter
  $.ajaxTransport
  $.ajax
  $.getJSON
  $.getScript
  $.get
  $.post
  $._evalUrl
  $.param
  $.parseHTML
  $.offset
  $.noConflict

  length
  prevObject
  context
  selector
  jquery
  constructor

  toArray
  get
  pushStack
  sort(pre, next)/each(index,node)/map
  slice
  first/last/eq
  end
  push
  splice
  extend
  find
  filter
  not
  is
  has
  init
  closest
  index
  add
  addBack

  children/siblings/parent/parents/parentsUntil
  next/nextAll/nextUntil/prev/prevAll/prevUntil
  height/innerHeight/outerHeight/width/innerWidth/outerWidth/scrollLeft/scrollTop
  position/offset //relative/absolute(top, left)
  css/text/html
  remove/clone/empty/replaceWith//删除/克隆/清空/替换
  append/prepend/before/after/appendTo/prependTo/insertBefore/insertAfter
  show/hide/toggle/fadeTo/slideDown/slideUp/slideToggle/fadeIn/fadeOut/fadeToggle
  val/attr/prop/data/removeAttr/removeProp/removeData
  
  addClass/removeClass/toggleClass/hasClass

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
  on
  one
  off
  trigger
  triggerHandler
  detach
  domManip
  replaceAll
  animate
  stop
  finish
  delay

  bind
  unbind
  delegate
  undelegate
  ajaxStart
  ajaxStop
  ajaxComplete
  ajaxError
  ajaxSuccess
  ajaxSend
  wrap/wrapAll/wrapInner/unwrap
  serialize
  serializeArray
  offsetParent
  size()  //return this.length
  andSelf //this.add( selector == null ?this.prevObject : this.prevObject.filter(selector)

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



//base64加密算法
b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
//将数据流以三个字节为单位，均分为四个六位比特，映射到b64， 以'='标志结束
ABC ->           01000001      01000010      01000011
    ->     010000      010100      001001      000011
    -> b64(010000) b64(010100) b64(001001) b64(000011)
    ->  N           R           J           D

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

//call，apply，caller，callee，bind
  call:   func.call(obj,arg0,....argn)  //切换执行上下文 传入参数并执行
  apply:  func.apply(obj, [arg0,.....argn]) //同上
  bind:   func.bind(obj)    //返回一个以obj为执行上下文的func
  caller: funcName.caller //返回 调用当前执行函数 的函数
  callee: arguments.callee //函数的自我引用，ES5严格模式中已被废弃(破坏封装，抵消内联函数带来性能的提升)

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







































