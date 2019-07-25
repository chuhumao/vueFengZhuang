// Number
/**
 * @param {String} str 需要将字符串数字转化为数字
 * @param {Number} num 需要保留几位小数
 */
function getStrChangeNumber(str,num){
	if(typeof str == 'string'){
		return changeNum(str,num)
	}else if(typeof str == 'number'){
		var pStr = str.toString()
		return changeNum(pStr,num)
	}
	
}
/**
 * 关联与getStrChangeNumber(str,num)函数,与之配合使用
 */
function changeNum(nStr,sum){
	var oStr = nStr.indexOf('.')
	if(oStr ==-1){
		//没有小数点
		return Number(nStr)
	}else{
		//有小数点
		switch (sum){
			case 1:
				return parseInt(Number(nStr)*10)/10
				break;
			case 2:
				return parseInt(Number(nStr)*100)/100
				break;
			case 3:
				return parseInt(Number(nStr)*1000)/1000
				break;
			case 4:
				return parseInt(Number(nStr)*10000)/10000
				break;
			case 5:
				return parseInt(Number(nStr)*100000)/100000
				break;
			default:
				throw '暂时并没有做超过5位小数的处理,请添加'
				break;
		}
	}
}
//	数组的方法
var ArrayMethods = {
	/**
	 * @param {Array} arr1 
	 * @param {Array} arr2 
	 * concat()方法:将两个数组或者更多的数组合并成一个数组，并返回
	 */
	getConcatArray:function(arr1, arr2) {
		return arr1.concat(arr2)
	},
	/**
	 * @param {Array} arr 
	 * checkAdult:检测的规则
	 * every()方法:检测数组中的每一个元素是否都符合条件,如果都符合则返回true,如有一个不符合,剩下的元素也将停止检测
	 */
	getEveryArray:function(arr) {
		return arr.every(this.checkAdult)
	},
	/**
	 * @param {Object} arr
	 * filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
	 */
	getFilterArray:function(arr) {
		return arr.filter(this.checkAdult)
	},
	/**
	 * @param {Array} arr
	 * @param {Object} str	所需要检测的字符串或者数字
	 * indexOf()方法: 检测数组中的某个指定的字符串值在字符串中首次出现的位置。
	 */
	getIndexOfArray:function(arr, str) {
		return arr.indexOf(str)
	},
	/**
	 * @param {Array} arr 
	 * @param {Object} str	需要添加进数组的字符串
	 * join()方法:把数组中的所有元素转换一个字符串。
	 */
	getJoinArray:function(arr, str) {
		return arr.join(str)
	},
	/**
	 * @param {Array} arr
	 * map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
	 */
	getMapArray:function(arr) {
		return arr.map(Math.sqrt)
	},
	/**
	 * @param {Array} arr
	 * pop() 方法用于删除数组的最后一个元素并返回删除的元素。
	 */
	getPopArray:function(arr) {
		return arr.pop()
	},
	/**
	 * @param {Array} arr
	 * @param {Object} str 所需要push进数组的字符串或者对象
	 * push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
	 */
	getPushArray:function(arr, str) {
		return arr.push(str)
	},
	/**
	 * @param {Array} arr
	 * reverse() 方法用于颠倒数组中元素的顺序。
	 */
	getReverseArray:function(arr) {
		return arr.reverse()
	},
	/**
	 * @param {Array} arr
	 * shift() 方法用于把数组的第一个元素从其中删除，并返回剩余元素的数组。
	 */
	getShiftArray:function(arr) {
		return arr.shift()
	},
	/**
	 * @param {Array} arr
	 * slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
	 */
	getSliceArray:function(arr) {
		return arr.slice(1, 3)
	},
	/**
	 * @param {Array} arr
	 * splice() 方法用于插入、删除或替换数组的元素。
	 */
	getSpliceArray:function(arr) {
		return arr.splice(1)
	},
	/**
	 * @param {Array} arr
	 * toString() 方法可把数组转换为字符串，并返回结果。
	 */
	getToStringArray:function(arr) {
		return arr.toString().replace(/[,]/g, "")
	},
	/**
	 * @param {Array} arr
	 * unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
	 */
	getUnshiftArray:function(arr) {
		return arr.unshift(11, 22)
	},
	/**
	 * @param {Array} arr
	 * valueOf() 方法返回 Array 对象的原始值
	 */
	getValueOfArray:function(arr) {
		return arr.valueOf()
	},
	
	checkAdult:function(age) {
		return age >= 18;
	},
	/**
	 * @param  {arr} 数组
	 * 排序
	 * @param  {type} 1：从小到大   2：从大到小   3：随机
	 * @return {Array}
	 */
	sort:function(arr, type = 1) {
		return arr.sort((a, b) => {
			switch (type) {
				case 1:
					return a - b;
				case 2:
					return b - a;
				case 3:
					return Math.random() - 0.5;
				default:
					return arr;
			}
		})
	}
	
}
// String 方法
var StringMethods = {
	/**
	 * @param {String} str1
	 * @param {String} str2
	 * concat() 方法用于连接两个或多个字符串。
	 */
	getConcatStr:function(str1,str2){
		return str1.concat(str2)
	},
	/**
	 * @param {String} str1
	 * charAt(index)	返回在指定位置的字符。index:Number 
	 */
	getCharAtStr:function(str1){
		return str1.charAt(2)
	},
	/**
	 * @param {String} str1
	 * charCodeAt(index) 方法可返回指定位置的字符的 Unicode 编码。 index : Number
	 */
	getCharCodeAtStr:function(str1){
		return str1.charCodeAt(2)
	},
	/**
	 * fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
	 * index : 所需要转成字符的Unicode 编码 数字类型
	 */
	getFromCharCodeStr:function(){
		return String.fromCharCode(65)
	},
	/**
	 * @param {String} str1
	 * trim() 去除字符串两边的空白。
	 */
	getTrimStr:function(str){
		return str.trim()
	},
	/**
	 * 去除空格
	 * @param  {str}
	 * @param  {type} 
	 *       type:  1-所有空格  2-前后空格  3-前空格 4-后空格
	 * @return {String}
	 */
	getAllTrimStr:function(str, type) {
		type = type || 1
		switch (type) {
			case 1:
				return str.replace(/\s+/g, "");
			case 2:
				return str.replace(/(^\s*)|(\s*$)/g, "");
			case 3:
				return str.replace(/(^\s*)/g, "");
			case 4:
				return str.replace(/(\s*$)/g, "");
			default:
				return str;
		}
	},
	/**
	 * @param  {str} 
	 * @param  {type}
	 * type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
	 * @return {String}
	 */
	getChangeCaseStr:function(str, type) {
		type = type || 4
		switch (type) {
			case 1:
				return str.replace(/\b\w+\b/g, function(word) {
					return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
	
				});
			case 2:
				return str.replace(/\b\w+\b/g, function(word) {
					return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
				});
			case 3:
				return str.split('').map(function(word) {
					if (/[a-z]/.test(word)) {
						return word.toUpperCase();
					} else {
						return word.toLowerCase()
					}
				}).join('')
			case 4:
				return str.toUpperCase();
			case 5:
				return str.toLowerCase();
			default:
				return str;
		}
	},
	/**
	 * 根据传入的字符串,以及类型，返回true或false
	 * @str:字符串
	 * @type:字符串,用户描述str的类型的
	 */
	getCheckStr:function(str, type) {
		switch (type) {
			case 'phone': //手机号码
				return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
			case 'tel': //座机
				return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
			case 'card': //身份证
				return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
			case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
				return /^[a-zA-Z]\w{5,17}$/.test(str)
			case 'postal': //邮政编码
				return /[1-9]\d{5}(?!\d)/.test(str);
			case 'QQ': //QQ号
				return /^[1-9][0-9]{4,9}$/.test(str);
			case 'email': //邮箱
				return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
			case 'money': //金额(小数点2位)
				return /^\d*(?:\.\d{0,2})?$/.test(str);
			case 'URL': //网址
				return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
			case 'IP': //IP
				return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
			case 'date': //日期时间
				return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) ||
					/^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
			case 'number': //数字
				return /^[0-9]$/.test(str);
			case 'english': //英文
				return /^[a-zA-Z]+$/.test(str);
			case 'chinese': //中文
				return /^[\u4E00-\u9FA5]+$/.test(str);
			case 'lower': //小写
				return /^[a-z]+$/.test(str);
			case 'upper': //大写
				return /^[A-Z]+$/.test(str);
			case 'HTML': //HTML标记
				return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
			default:
				return true;
		}
	},
	/**
	 * 将所给的字符串转为大写
	 * @str :字符串 。如果传数字传入什么返回什么
	 */
	getToUpperCaseStr:function(str) {
		return str.toUpperCase()
	},
	/**
	 * 将字符串转化为小写
	 * @str:需要转化小写的字符串
	 */
	getToLowerCaseStr:function(str) {
		return str.toLowerCase()
	},
	/**
	 * @param {string} str
	 * decodeURIComponent()	解码某个编码的 URI。  先用getEncodeUrlStr方法编码,然后在用此方法解码
	 */
	getDecodeUrlStr:function(str){
		return decodeURIComponent(str)
	},
	/**
	 * @param {string} str
	 * encodeURIComponent()	把字符串编码为 URI。
	 */
	getEncodeUrlStr:function(str){
		return encodeURIComponent(str)
	},
	/**
	 * @param {string} str
	 * escape()	来编码字符串
	 */
	getEscapeStr:function(str){
		return escape(str)
	},
	/**
	 * @param {string} str
	 * unescape() 函数可对通过 escape() 编码的字符串进行解码
	 */
	getUnescapeStr:function(str){
		return unescape(str)
	},
}
//	url的方法
var HttpUrlMethods = {
	/**
	 *  @paramUrl : 访问地址携带的参数
	 *  通过地址中 '?' '&' 截取成一个数组，然后循环分配值
	 */
	getUrlParamsList:function(paramUrl) {
		var params = paramUrl.split('?')[1].split('&')
		var paramsObj = {}
		params.forEach(function(item) {
			paramsObj[item.split('=')[0]] = item.split('=')[1]
		})
		return paramsObj
	},
	/**
	 * @通过现在的Url截取,跳转到同目录的其他页面
	 * @url 当前页面的地址, @newUrlNmae 即将跳转的页面的name @nowUrlName 当前页面的name
	 */
	getOpenNewPageUrl:function(url, newUrlNmae, nowUrlName) {
		var sUrl = url.split('?')[0]
		if (sUrl.indexOf(nowUrlName) == -1) {
			alert('nowUrlName不存在')
		} else {
			var seach = sUrl.slice(0, sUrl.indexOf(nowUrlName))
			var newPageUrl = seach + newUrlNmae + '.html'
			window.location.href = newPageUrl
		}
	}
}
//时间的方法
var DateMethods = {
	/**
	 * 通过时间戳，返回当前的时间(13位的时间戳)
	 *  @timeStamp:时间戳 @date返回的日期格式
	 *  @all:代表全部的时间:年月日时分秒  @YY:MM:DD代表年月日 @YY:MM代表年月 @MM:DD:月日 
	 * @HH:mm:ss:小时分钟秒  @HH:mm 代表小时分钟 @mm:ss代表分钟秒
	 */
	backDateByTimeStamp:function(timeStamp, date) {
		var timeNumber;
		if (typeof timeStamp == 'string') {
			timeNumber = Number(timeStamp)
		} else {
			timeNumber = timeStamp
		}
		var otimeStamp = new Date(timeNumber)
		var otimeYear = otimeStamp.getFullYear() //年
		var otimeMouth = otimeStamp.getMonth() + 1 //月
		var otimeday = otimeStamp.getDate() //日
		var otimeHouse = otimeStamp.getHours() //小时
		var otimeMinute = otimeStamp.getMinutes() //分钟
		var otimeSecond = otimeStamp.getSeconds() //秒
		switch (date) {
			case 'all':
				return otimeYear + '-' + this.addNumTodigital(otimeMouth) + '-' + this.addNumTodigital(otimeday) + ' ' + this.addNumTodigital(
					otimeHouse) + ':' + this.addNumTodigital(otimeMinute) + ':' + this.addNumTodigital(otimeSecond)
				break;
			case 'YY:MM:DD':
				return otimeYear + '-' + this.addNumTodigital(otimeMouth) + '-' + this.addNumTodigital(otimeday)
				break;
			case 'YY:MM':
				return otimeYear + '-' + this.addNumTodigital(otimeMouth)
				break;
			case 'MM:DD':
				return this.addNumTodigital(otimeMouth) + '-' + this.addNumTodigital(otimeday)
				break;
			case 'HH:mm:ss':
				return this.addNumTodigital(otimeHouse) + ':' + this.addNumTodigital(otimeMinute) + ':' + this.addNumTodigital(otimeSecond)
				break;
			case 'HH:mm':
				return this.addNumTodigital(otimeHouse) + ':' + this.addNumTodigital(otimeMinute)
				break;
			case 'mm:ss':
				return this.addNumTodigital(otimeMinute) + ':' + this.addNumTodigital(otimeSecond)
				break;
			default:
				throw '未知情况,请添加'
				break;
		}
	},
	/**
	 * 在小于10的数字前添加 '0'
	 */
	addNumTodigital:function(num) {
		if (num < 10) {
			num = '0' + num
		} else {
			num = num
		}
		return num
	},
	/**
	 * 计算离24小时后的剩余时间
	 * @time开始的时间戳也是现在的时间戳
	 * @overTime 24小时后的时间
	 * @nowTime 当前时间
	 * @syTime 剩余的时间
	 */
	getComputedTimeByHouer:function(time) {
		var syTime
		var overTime = time + 86400
		var nowTime = (Date.parse(new Date()))/1000
		var lastTime = overTime - nowTime
		console.log(lastTime)
		if (lastTime >= 1) {
			var lastH = addNumTodigital(parseInt(lastTime / 3600))
			syTime = lastTime - lastH * 3600
			var lastM = addNumTodigital(parseInt(syTime / 60))
			syTime = syTime - lastM * 60
			var lastS = addNumTodigital(syTime)
			return lastH + '时' + lastM + '分' + lastS + '秒'
		} else {
			clearInterval(j);
			return '00时00分00秒'
		}
	}
}
//操作dom的方法
var DomMethods = {
	/**
	 * @params:JS是选项卡
	 * tab:所点击的最外层Dom节点。用于用户id
	 * box:功能同上,用于获取内容节点	   
	 */
	isOpenTabOfParams:function(top, content) {
		var tab = document.getElementById(top).getElementsByTagName('li')
		var content = document.getElementById(content).getElementsByTagName('div')
		for (var i = 0; i < tab.length; i++) {
			tab[i].index = i
			tab[i].onclick = function() {
				for (var j = 0; j < tab.length; j++) {
					tab[j].style.background = 'white'
					content[j].style.display = 'none'
				}
				this.style.background = 'blue'
				content[i].style.display = 'block'
			}
		}
		for (var z = 0; z < content.length; z++) {
			content[z].style.display = 'none'
		}
	},
	/**
	 * Html截图展示在dom节点上.需要引入html2canvas.min.js
	 * @tip:最好将文件下载到本地。
	 * @dom:所需要截图的dom节点。需要的是Id
	 */
	htmlScreenshotShowDom:function(dom) {
		html2canvas(document.querySelector("#" + dom)).then(canvas => {
			document.body.appendChild(canvas)
		});
	}
}
//客户端的方法
var ClientMethods = {
	/**
	 * 判断当前是什么类型手机
	 */
	typeOfMobilePhone:function() {
		var u = navigator.userAgent;
		if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
			return "Android"
		} else if (u.indexOf('iPhone') > -1) {
			return "Ios"
		} else if (u.indexOf('iPad') > -1) {
			return "iPad"
		} else if (u.indexOf('Windows Phone') > -1) {
			return "Windows Phone"
		} else {
			return "未知"
		}
	},
	/**
	 * 是否为PC端
	 */
	isPC:function() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone",
			"SymbianOS", "Windows Phone",
			"iPad", "iPod"
		];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	},
	
	/**
	 * 判断是否在微信浏览器打开
	 */
	isWeiXin:function() {
		var ua = window.navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {
			return true;
		} else {
			return false;
		}
	}
	
}

var WindowMethods = {
	
}




























// toString()方法:如果变量为数字,那么toSting接受一个参数(该参数为数字).也可不传.不传的情况下,默认转化为字符串.传则将变量转化为参数进制的数字
// ~符号的运算:取该变量的复数(变量为数字)然后在减一;例如变量为25 运算结果为 -26
// 位运算&:接受两个参数 例如 25&3,将他们都转化为2进制的数字.规则则是 如果两位中有一位为0.那么结果就为0;只有两位数字都为1的时候结果才会为1
