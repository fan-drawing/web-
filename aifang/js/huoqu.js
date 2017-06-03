var basepath = '/Users/Administrator/web/aifang/';
function getParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return "";
}
function u(uri) {
	var param = new Array();
	for (var i in uri.data) {
		param.push(i + '=' + escape(uri.data[i]));
	}
	var	href = basepath+uri.url+'?' + param.join('&');
	window.location.href = href;
}
/*window.location
window的location对象
search
得到的是url中？部分
substr()
返回一个从指定位置开始的指定长度的子字符串
这里设置为1，是为了把url中的?号去掉*/

/*var r= /^(\d{4})-(\d{1,2})-(\d{1,2})$/; 正则表达式 匹配出生日期(简单匹配)     
r.exec('1985-10-15');
s1=RegExp.$1;
s2=RegExp.$2;
s3=RegExp.$3;
alert(s1+" "+s2+" "+s3)结果为1985 10 15*/