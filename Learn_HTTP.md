

## 优先级依次提升

|header|content|version|detail|
|--|--|--|--|
|强缓存|直接从缓存读取
|pragma|no-cache|1.0
|Expires|GMT时间字符串|1.1|指定过期GMT时间，优先级低于Cache-Control，当客户端本地时间被修改以后，服务器与客户端时间偏差变大以后，就会导致缓存混乱
|Cache-Control|cache|1.1|
||no-cache||
||no-store||
||public||
||private||
||max-age||指定有效时长, 单位秒|
|协商缓存|需发起请求
|Last-Mocdified|GMT时间字符串|1.1|作为下次请求If-Modified-Since头的值，服务器优先匹配Etag,
|Etag|"5705c3d8-3084"|1.1|作为下次请求If-None-Match头的值|


|code|brief|detail|
|--|--|--|
|301|永久重定向||
|302|临时重定向||
|304|资源未修改| If-Modified-Since HTTP 标头|
|400|请求出错|由于语法格式有误，服务器无法理解此请求。不作修改，客户程序就无法重复此请求。 |
|401|未授权||
|401.1|登录失败|此错误表明传输给服务器的证书与登录服务器所需的证书不匹配。 |
|401.2|服务器的配置导致登录失败| 此错误表明传输给服务器的证书与登录服务器所需的证书不匹配。此错误通常由未发送正确的 WWW 验证表头字段所致。 |
|401.3|由于资源中的 ACL 而未授权| 此错误表明客户所传输的证书没有对服务器中特定资源的访问权限。此资源可能是客户机中的地址行所列出的网页或文件，也可能是处理客户机中的地址行所列出的文件所需服务器上的其他文件。
|401.4|授权服务被筛选程序拒绝| 此错误表明 Web 服务器已经安装了筛选程序，用以验证连接到服务器的用户。此筛选程序拒绝连接到此服务器的真品证书的访问。
|401.5|ISAPI/CGI 应用程序的授权失败| 此错误表明试图使用的 Web服务器中的地址已经安装了 ISAPI 或 CGI程序，在继续之前用以验证用户的证书。此程序拒绝用来连接到服务器的真品证书的访问。
|403|禁止访问
|403.1|禁止执行访问|如果从并不允许执行程序的目录中执行 CGI、ISAPI或其他执行程序就可能引起此错误。
|403.2|禁止读取访问|如果没有可用的默认网页或未启用此目录的目录浏览，或者试图显示驻留在只标记为执行或脚本权限的目录中的HTML 页时就会导致此错误。
|403.3|禁止写访问|如果试图上载或修改不允许写访问的目录中的文件，就会导致此问题。
|403.4|需要 SSL|此错误表明试图访问的网页受安全套接字层（SSL）的保护。要查看，必须在试图访问的地址前输入https:// 以启用 SSL。
|403.5|需要 SSL 128|此错误消息表明您试图访问的资源受 128位的安全套接字层（SSL）保护。要查看此资源，需要有支持此SSL 层的浏览器。
|403.6|拒绝 IP 地址|如果服务器含有不允许访问此站点的 IP地址列表，并且您正使用的 IP地址在此列表中，就会导致此问题。
|403.7|需要用户证书|当试图访问的资源要求浏览器具有服务器可识别的用户安全套接字层（SSL）证书时就会导致此问题。可用来验证您是否为此资源的合法用户。
|403.8|禁止站点访问|如果 Web服务器不为请求提供服务，或您没有连接到此站点的权限时，就会导致此问题。
|403.9|所连接的用户太多|如果 Web太忙并且由于流量过大而无法处理您的请求时就会导致此问题。请稍后再次连接。
|403.10|配置无效|此时 Web 服务器的配置存在问题。
|403.11|密码已更改|在身份验证的过程中如果用户输入错误的密码，就会导致此错误。请刷新网页并重试。
|403.12|映射程序拒绝访问|拒绝用户证书试图访问此 Web 站点。
|404|找不到 |Web 服务器找不到您所请求的文件或脚本。请检查URL 以确保路径正确。
|405|不允许此方法| 对于请求所标识的资源，不允许使用请求行中所指定的方法。请确保为所请求的资源设置了正确的 MIME 类型。
|406|不可接受| 根据此请求中所发送的“接受”标题，此请求所标识的资源只能生成内容特征为“不可接受”的响应实体。
|407|需要代理身份验证| 在可为此请求提供服务之前，您必须验证此代理服务器。请登录到代理服务器，然后重试。
|412|前提条件失败| 在服务器上测试前提条件时，部分请求标题字段中所给定的前提条件估计为FALSE。客户机将前提条件放置在当前资源 metainformation（标题字段数据）中，以防止所请求的方法被误用到其他资源。
|414|Request-URI 太长| Request-URL太长，服务器拒绝服务此请求。
|500|服务器的内部错误| Web 服务器不能执行此请求。请稍后重试此请求。
|501|未实现| Web 服务器不支持实现此请求所需的功能。请检查URL 中的错误，
|502|网关出错| 当用作网关或代理时，服务器将从试图实现此请求时所访问的upstream 服务器中接收无效的响应。
|504|网关超时||


|ss|ss|
|--|--|
|connectEnd|1464837440472|
|connectStart|1464837440472|
|domComplete|1464837441948|
|domContentLoadedEventEnd|1464837441593|
|domContentLoadedEventStart|1464837441593|
|domInteractive|1464837441593|
|domLoading|1464837441388|
|domainLookupEnd|1464837440472|
|domainLookupStart|1464837440472|
|fetchStart|1464837440472|
|loadEventEnd|1464837441949|
|loadEventStart|1464837441949|
|navigationStart|1464837440471|
|redirectEnd|0|
|redirectStart|0|
|requestStart|1464837440483|
|responseEnd|1464837441383|
|responseStart|1464837441377|
|secureConnectionStart|0|
|unloadEventEnd|1464837441379|
|unloadEventStart|1464837441379|