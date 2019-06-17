	/**
	 *  @paramUrl : 访问地址携带的参数
	 *  通过地址中 '?' '&' 截取成一个数组，然后循环分配值
	 */
	function getUrlParamsList(paramUrl) {
		const params = paramUrl.split('?')[1].split('&')
		let paramsObj = {}
		params.forEach(function(item) {
			paramsObj[item.split('=')[0]] = item.split('=')[1]
		})
		return paramsObj
	}
	/**
	 * 通过时间戳，返回当前的时间
	 *  @timeStamp:时间戳 @date返回的日期格式
	 *  @all:代表全部的时间:年月日时分秒  @YY:MM:DD代表年月日 @YY:MM代表年月 @MM:DD:月日 
	 * @HH:mm:ss:小时分钟秒  @HH:mm 代表小时分钟 @mm:ss代表分钟秒
	 */
	function backDateByTimeStamp(timeStamp,date){
		const otimeStamp = new Date(timeStamp)
		const otimeYear = otimeStamp.getFullYear()   //年
		const otimeMouth = otimeStamp.getMonth()+1	 //月
		const otimeday = otimeStamp.getDate()		 //日
		const otimeHouse = otimeStamp.getHours()	 //小时
		const otimeMinute = otimeStamp.getMinutes()	 //分钟
		const otimeSecond = otimeStamp.getSeconds()	 //秒
		switch (date){
			case 'all':
				return otimeYear + '-' + addNumTodigital(otimeMouth) + '-' + addNumTodigital(otimeday) + ' ' + addNumTodigital(otimeHouse) + ':' + addNumTodigital(otimeMinute) + ':' + addNumTodigital(otimeSecond)
				break;
			case 'YY:MM:DD':
				return otimeYear + '-' + addNumTodigital(otimeMouth) + '-' + addNumTodigital(otimeday)
				break;
			case 'YY:MM':
				return otimeYear + '-' + addNumTodigital(otimeMouth)
				break;
			case 'MM:DD':
				return addNumTodigital(otimeMouth) + '-' + addNumTodigital(otimeday)
				break;
			case 'HH:mm:ss':
				return addNumTodigital(otimeHouse) + ':' + addNumTodigital(otimeMinute) + ':' + addNumTodigital(otimeSecond)
				break;
			case 'HH:mm':
				return addNumTodigital(otimeHouse) + ':' + addNumTodigital(otimeMinute)
				break;
			case 'mm:ss':
				return addNumTodigital(otimeMinute) + ':' + addNumTodigital(otimeSecond)
				break;
			default:
			window.alert('暂时没有写这种情况!请添加')
				break;
		}
	}
	/**
	 * 在小于10的数字前添加 '0'
	 */
	function addNumTodigital(num){
		if(num<10){
			num = '0'+num
		}else{
			num = num
		}
		return num
	}
	/**
	 * @通过现在的Url截取,跳转到同目录的其他页面
	 * @url 当前页面的地址, @newUrlNmae 即将跳转的页面的name @nowUrlName 当前页面的name
	 */
	function getOpenNewPageUrl(url,newUrlNmae,nowUrlName){
		const sUrl = url.split('?')[0]
		if(sUrl.indexOf(nowUrlName)==-1){
			alert('nowUrlName不存在')
		}else{
			const seach =  sUrl.slice(0,sUrl.indexOf(nowUrlName))
			const newPageUrl  = seach + newUrlNmae +'.html'
			window.location.href = newPageUrl
		}
	}
	/**
	 * 计算离24小时后的剩余时间
	 * @time开始的时间戳
	 */
	function getComputedTimeByHouer(time){
		let syTime
		const nowTime = 1557375278
		const lastTime = time - nowTime
		if(lastTime>=1){
			const lastH = addNumTodigital(parseInt(lastTime/3600))
				  syTime = lastTime - lastH*3600
			const lastM = addNumTodigital(parseInt(syTime /60 ))
				  syTime = syTime - lastM*60
			const lastS = addNumTodigital(syTime)
			return lastH + '时' + lastM + '分' + lastS + '秒'
		}else{
			clearInterval(j);
			return '00时00分00秒'
		}
	}
	/**
	 * 将所给的字符串转为大写
	 * @str :字符串 。如果传数字传入什么返回什么
	 */
	function getToUpperCase(str){
		return str.toUpperCase()
	}
	/**
	 * 将字符串转化为小写
	 * @str:需要转化小写的字符串
	 */
	function getToLowerCase(str){
		return str.toLowerCase()
	}
	/**
	 * @params:JS是选项卡
	 * tab:所点击的最外层Dom节点。用于用户id
	 * box:功能同上,用于获取内容节点	   
	 */
	function isOpenTabOfParams(top,content){
		var tab = document.getElementById(top).getElementsByTagName('li')
		var content = document.getElementById(content).getElementsByTagName('div')
		for (let i =0;i<tab.length;i++) {
			tab[i].index = i
			tab[i].onclick=function(){
				for (let j=0;j<tab.length;j++) {
					tab[j].style.background='white'
					content[j].style.display='none'
				}
				this.style.background='blue'
				content[i].style.display='block'
			}
		}
		for (let z =0;z<content.length;z++) {
			content[z].style.display='none'
		}
	}