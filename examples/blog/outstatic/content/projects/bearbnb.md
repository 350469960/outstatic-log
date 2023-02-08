---
title: '常用js方法函数'
status: 'published'
description: '常用js方法函数'
coverImage: '/images/bearbnb.png'
publishedAt: '2023-02-07 15:42:35'
author:
  name: 风行天下一万号
---

## 常用方法函数
> ### 1.深复制
```
// 1.深复制
function deepCopy(source) {
    var result = {};
    for (var key in source) {
    result[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
    }

    return result;
};
```

> ### 2.字符串转对象
```
// 2.字符串转对象
function str2obj (str) {
    if (!str) return {};
    if (str.indexOf('{') >= 0 || str.indexOf('[') >= 0) {
        return self.eval(str);
    } else {
        return str;
    }
}
```

> ### 3.去除空格
```
// 3.去除空格
function Trim(str, g) {
    var result = ''; 
    
    result = str.replace(/(^\s+)|(\s+$)/g, ''); 
    if (g.toLowerCase() == 'g') {
        result = result.replace(/\s/g, ''); 
    }

    return result; 
}
```

> ### 4.对字符串进行加密
```
//4.对字符串进行加密 
function compileStr(code) {         
    var c=String.fromCharCode(code.charCodeAt(0)+code.length);  
   for(var i=1;i<code.length;i++)  
    {        
     c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));  
   }     
   return escape(c);  
}
```

> ### 5.字符串进行解密
```
 //5.字符串进行解密 
function uncompileStr(code) {          
    code=unescape(code);        
    var c=String.fromCharCode(code.charCodeAt(0)-code.length);        
    for(var i=1;i<code.length;i++)  
    {        
     c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));        
    }        
    return c; 
}
```

> ### 6.获取cookie值
```
// 6.获取cookie值
function getCookie(name) { 
    var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
 
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]); 
    } else {
        return null; 
    } 
}
```

> ### 7.设置cookie值
```
// 7.设置cookie值
function setCookie(name,value, hours) { 
    hours = 24; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + hours*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
}
```

> ### 8.时间格式化
```
// 8.时间格式化
function formatDate(timeNum, formatStr) { //YYYY-MM-DD hh:mm:ss
    formatStr = 'YYYY-MM-DD';
    if (!timeNum && timeNum !== 0) return '';
    var date = new Date(timeNum);
    var YYYY = date.getFullYear();
    var MM = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return formatStr.replace('YYYY', YYYY).replace('MM', MM).replace('DD', DD).replace('hh', hh).replace('mm', mm).replace('ss', ss);
}
```

> ### 9.时间格式化   年月日 星期  时分秒
```
/**
 * 9.时间格式化   年月日 星期  时分秒
 * @param {*} str 
 */
function formatDateByDay(str) {
    var date = new Date();

    date.setTime(str);

    var today = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var week = today[date.getDay()];

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var ss = date.getSeconds();

    var dateByDay = year + '-' + month + '-' + day + '/' + week + ' ' + hour + ':' + min + ':' + ss;

    return dateByDay;

}
```

> ### 10.格式化时间到毫秒
```
/**
 * 10.格式化时间到毫秒
 * @param {*} v 
 * @param {*} fmt 
 */
function fmtDateByMilliseconds(v, fmt = 'yyyy-MM-dd HH:mm:ss:mmm') {
    if (v) {
      var date = new Date(v);
      var y = date.getFullYear().toString();
      var M = date.getMonth() < 9 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1).toString();
      var d = date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate().toString();
      var h = date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours().toString();
      var m = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes().toString();
      var s = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds().toString();
      var mmm = date.getMilliseconds() < 10 ? ('0' + date.getMilliseconds()) : date.getMilliseconds().toString();
      if(date.getMilliseconds() < 10) {
        mmm = '00' + date.getMilliseconds();
      } else if(date.getMilliseconds() < 100) {
        mmm = '0' + date.getMilliseconds();
      } else {
        mmm = date.getMilliseconds().toString();
      }
        fmt = fmt.replace('yyyy', y).replace('MM', M)
        .replace('dd', d).replace('HH', h)
        .replace('mm', m).replace('ss', s)
        .replace('mmm', mmm);

      return fmt;
    }
    return '';
  }
```

> ### 11.首字母大写
```
//11.首字母大写
function lowercaseFirst (str) {
    return str[0].toLowerCase() + str.substring(1);
}
```

> ### 12.组装图片路径
```
/**
 * 12.组装图片路径
 * @param {*} errorPath  默认图片路径
 * @param {*} sourcePath 源路径
 * @param {*} thumb      相对路径
 */
function getThumbUrl (errorPath, sourcePath, thumb) {
    var urlThumb = '';

    if (!thumb || thumb === 'undefined' || thumb === null || thumb === '') {
        urlThumb = errorPath;
    } else {
        urlThumb = `${sourcePath}${thumb}`;
    }

    return urlThumb;
}
```

> ### 13.自定义处理空白图片
```
/**
 * 13.自定义处理空白图片
 * defalutImg要替换的默认图片
 */
function checkDefalutImg(defalutImgUrl, imgUrl) {
    var recUrl = '';

    if (!imgUrl) {
        recUrl = defalutImgUrl;
    } else {
        recUrl = imgUrl;
    }

    return 'src=' + recUrl;
}
```

> ### 14.获取指定长度字符串
```
/**
 * 14.获取指定长度字符串
 * @param {*} str       字符对象
 * @param {*} length    截取长度
 */
function getSubstring(str, length) {
    var result = '';
    if (str && str !== '' && !isNaN(length) && str.trim().length > length) {
        var spaceLen =  str.substring(0, length  ).split(' ').length ;
        result = str.substring(0, length - 1 + spaceLen-1 ) + '...';
    } else {
        result = str;
    }
    return result;
}
```

> ### 15.截取字符串末尾数
```
/**
 * 15.截取字符串末尾数
 * @param {*} str    截取的字符串
 * @param {*} length 截取的长度
 */
function getSubstringEnd(str, length) {
    var result = '';
    var len = str.trim().length;

    if (str && str !== '' && !isNaN(length) && str.trim().length > length) {

        result = str.substring(len - length, len);
    } else {
        result = str;
    }

    return result;
}
```

> ### 16.检测是站内还是站外链接
```
 /**
 * 16.检测是站内还是站外链接
 * @param {*} testUrl
 * @return true 站内链接 false 站外链接
 * baidu.com   是对应公司的域名
 */
function checkInternalUrl(testUrl) {
    return /^http(s)?:\/\/([a-zA-Z0-9][a-zA-Z0-9-]+\.){0,}baidu.com/i.test(testUrl);
}
```

> ### 17.去掉HTML标签
```
/**
 * 17.去掉HTML标签
 */
function removeHtml(input) {
    return input && input.replace(/<(?:.|\n)*?>/gm, '')
        .replace(/(&rdquo;)/g, '"')
        .replace(/&ldquo;/g, '"')
        .replace(/&mdash;/g, '-')
        .replace(/&nbsp;/g, '')
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<')
        .replace(/<[\w\s"':=/]*/, '');
}
```

> ### 18.数值截取
```
/**
 * 18.数值截取
 * @param arr 数值
 * @param start 开始位置
 * @param end 结束位置
 * @returns {*}
 */
function slice(arr, start, end) {
    if (arr && arr.slice) {
        return arr.slice(start, end);
    }

    return arr;
}
```

> ### 19.手机号码隐藏中间四位
```
/**
 * 19.手机号码隐藏中间四位
 */
function telFormat(tel) {
    var MAX_NUM = 11;
    var telStr = tel.toString();
    var telResult = '';

    if (!isNaN(telStr) && telStr.length === MAX_NUM) {
        var reg = /(\d{3})\d{4}(\d{4})/;

        telResult = telStr.replace(reg, '$1****$2');
    }

    return telResult;
}
```

> ### 20.处理a标签url为空的情况
```
/**
 * 20.处理a标签url为空的情况
 */
function getAElement(urlStr, targeName) {
    var aElement = '';

    if (urlStr === '' || urlStr === null || urlStr === 'http://' || urlStr === '#') {
        aElement = 'herf=javascript:;';
    } else {
        aElement = 'herf=' + urlStr;
        if (targeName) {
            aElement = 'herf=' + urlStr + ' target=' + targeName;
        }
    }

    return aElement;
}
```

> ### 21.截取点后的内容
```
/**
 * 21.截取点后的内容
 * @param {*} string
 */
function getStrDotafter(string) {
    var substr = '';

    if (string) {
        var str = string.lastIndexOf('.');
        var str2 = string.length;

        substr = string.substring(str + 1, str2);

    }

    return substr;
}
```

> ### 22.截取点前的内容
```
/**
 * 22.截取点前的内容
 * @param {*} string
 */
function getStrDotBefore(string) {
    var substr = '';

    if (string) {
        var str = string.lastIndexOf('.');

        substr = string.substring(0, str + 1);
    }

    return substr;
}
```

> ### 23.对象转数组
```
/**
 * 23.对象转数组
 */
function obj2arr(obj = {}) {
    var nameList = Object.keys(obj);

    return nameList.map(n => {
        return {value: n, name: obj[n]};
    });
}
```

> ### 24.字符串转对象
```
/**
 * 24.字符串转对象
 */
function str2obj(str) {
    return JSON.parse(str);
}
```

> ### 25.对象转字符串
```
/*
* 25.对象转字符串
* */
function obj2str(obj) {
    if(!obj) return
    return JSON.stringify(obj);
}
```

> ### 26.加法
```
/**
 * 26.加法
 * @param {} a 
 * @param {*} b 
 */
function add(a, b) {
    a = a * 1;
    b = b * 1;
    var ia = a.toString().indexOf('.');
    var ib = b.toString().indexOf('.');
    if (ia < 0 && ib < 0) {
        return a + b;
    }
    if (ia < 0 && ib >= 0) {
        var m = b.toString().length - ib - 1;
    }
    if (ia >= 0 && ib < 0) {
        var m = a.toString().length - ia - 1;
    }
    if (ia >= 0 && ib >= 0) {
        var ma = a.toString().length - ia - 1;
        var mb = b.toString().length - ib - 1;
        var m = ma > mb ? ma : mb;
    }
    return (a * Math.pow(10, m) + b * Math.pow(10, m)) / Math.pow(10, m);
}
```

> ### 27.数字金额转大写
```
/*
* 27.数字金额转大写
* */
function numTurnCh(n) {
    if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n))
        return "数据非法";
    var unit = "千百拾亿千百拾万千百拾元角分", str = "";
    n += "00";
    var p = n.indexOf('.');
    if (p >= 0)
        n = n.substring(0, p) + n.substr(p + 1, 2);
    unit = unit.substr(unit.length - n.length);
    for (var i = 0; i < n.length; i++)
        str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
    return str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
}
```

> ### 28.格式化金额
```
/*
* 28.格式化金额
* v:金额
* num:四舍五入的小数位
* */
function fmtAmount(v, isCh = false, num = 2) {
    if ((!v || v <= 0) && isCh) return '面议';
    if (isNaN(Number(v))) return '';
    return Number(v).toFixed(num);
}
```

> ### 29.数组去重
```
/**
 * 29.数组去重
 */
function unique4(array) {
    array.sort();
    var re = [array[0]];
    for (var i = 1; i < array.length; i++) {
        if (array[i] !== re[re.length - 1]) {
            re.push(array[i]);
        }
    }
    return re;
}
```

> ### 30.base64转blob
```
base64ToBlob({ b64data = '', contentType = '', sliceSize = 512 } = {}) {
      return new Promise((resolve, reject) => {
        // 使用 atob() 方法将数据解码
        const byteCharacters = atob(b64data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          const slice = byteCharacters.slice(offset, offset + sliceSize);
          const byteNumbers = [];
          for (let i = 0; i < slice.length; i++) {
            byteNumbers.push(slice.charCodeAt(i));
          }
          // 8 位无符号整数值的类型化数组。内容将初始化为 0。
          // 如果无法分配请求数目的字节，则将引发异常。
          byteArrays.push(new Uint8Array(byteNumbers));
        }
        let result = new Blob(byteArrays, {
          type: contentType
        });
        result = Object.assign(result, {
          // 这里一定要处理一下 URL.createObjectURL
          preview: URL.createObjectURL(result),
          name: 'XXX.png'
        });
        resolve(result);
      });
    }
```

> ### 31.图片下载方法
```
downloadImg(srcList, i = 0, Toast) {
    const u = navigator.userAgent;
    if (/MicroMessenger/gi.test(u) && /nettype/i.test(u)) {
      Toast('微信内无法进行此操作，请手动长按图片进行保存，或在外部浏览器进行操作~');
      return;
    }
    const $a = document.createElement('a');
    $a.setAttribute('download', srcList[i].replace(/(.*\/)*([^.]+.*)/gi, '$2').split('?')[0]);
    $a.setAttribute('href', srcList[i]);
    const evObj = document.createEvent('MouseEvents');
    evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null);
    $a.dispatchEvent(evObj);
    if (i < srcList.length - 1) {
      setTimeout(() => {
        this.downloadImg(srcList, ++i);
      }, 300);
    } else {
      setTimeout(() => {
        Toast('如有部分图片保存失败，请手动长按图片进行保存~');
      }, 1000);
    }
  }
```
> ### 32.链接转换二维码
```
// 链接转换二维码
  formatUrl2Qrcode(path, userOpts = {}) {
    const QRCode = require('qrcode');
    const opts = Object.assign(
      {},
      {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        rendererOpts: {
          quality: 0.3
        }
      },
      userOpts
    );
    let url1 = '';
    QRCode.toDataURL(path, opts, (err, url) => {
      if (err) {
        console.log(err);
      }
      url1 = url;
    });

    return url1;
  }
```
> ### 33.检查系统(ios/Android)
```
checkSystem() {
    // 判断系统
    const o = null;
    const u = navigator.userAgent,
      app = navigator.appVersion;
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // g
    const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
    if (isIOS) {
      return 'ios';
    } else {
      return 'android';
    }
  }
```
> ### 34.获取url传过来的参数
```
getUrlQuery(name, Url) {
    // URL GET 获取值
    const reg = new RegExp('(^|\\?|&)' + name + '=([^&]*)(\\s|&|$)', 'i'),
      url = Url || window.location.href;
    if (reg.test(url)) return unescape(RegExp.$2.replace(/\+/g, ' '));
    return '';
  }
```
> ### 35.计算两个时间戳的间隔
```
timestamp(startTimes, endTimes = new Date().getTime()) {
    let totalSeconds = endTimes - startTimes; // 传入时间戳与当前时间相差
    const d = parseInt(totalSeconds / (24 * 60 * 60 * 1000));
    totalSeconds = totalSeconds % (24 * 60 * 60 * 1000);
    const h = parseInt(totalSeconds / (60 * 60 * 1000));
    totalSeconds = totalSeconds % (60 * 60 * 1000);
    const m = parseInt(totalSeconds / (60 * 1000));
    totalSeconds = totalSeconds % (60 * 1000);
    const s = parseInt(totalSeconds / 1000);
    return { d, h, m, s };
  }
```
> ### 36.获取本月开始时间/结束时间
```
getMonthDate(type) {
    const now = new Date(); // 当前日期
    let nowDayOfWeek = now.getDay(); // 今天本周的第几天
    if (nowDayOfWeek === 0) {
      nowDayOfWeek = 6;
    } else {
      nowDayOfWeek = nowDayOfWeek - 1;
    }
    const nowDay = now.getDate(); // 当前日
    const nowMonth = now.getMonth(); // 当前月
    let nowYear = now.getYear(); // 当前年
    nowYear += nowYear < 2000 ? 1900 : 0; //

    // 格式化日期：yyyy-MM-dd
    function formatDate(date) {
      const myyear = date.getFullYear();
      let mymonth = date.getMonth() + 1;
      let myweekday = date.getDate();

      if (mymonth < 10) {
        mymonth = '0' + mymonth;
      }
      if (myweekday < 10) {
        myweekday = '0' + myweekday;
      }
      return myyear + '-' + mymonth + '-' + myweekday;
    } // 获得本月的开始日期
    function getMonthStartDate() {
      const monthStartDate = new Date(nowYear, nowMonth, 1);
      return formatDate(monthStartDate);
    }
    // 获得某月的天数
    function getMonthDays(myMonth) {
      const monthStartDate = new Date(nowYear, myMonth, 1);
      const monthEndDate = new Date(nowYear, myMonth + 1, 1);
      const days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
      return days;
    }

    // 获得本月的结束日期
    function getMonthEndDate() {
      const monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
      return formatDate(monthEndDate);
    }
    if (type === 'start') {
      const monthStartDate = new Date(nowYear, nowMonth, 1);
      return formatDate(monthStartDate);
    } else {
      const monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
      return formatDate(monthEndDate);
    }
  }
```
> ### 37.防抖
```
/**
 * 防抖：一定时间内，最后一次操作，等n毫秒后才执行
 * @param callback {Function} 要执行的回调函数
 * @param wait {Number} 延时时间
 * @param immediate {Boolean} 是否立即执行
 * @return null
*/
let timeout = null;
export function debounce (callback, wait = 500, immediate = false) {
  if (timeout != null) {
    clearTimeout(timeout);
  }
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow && typeof callback === 'function') {
      callback();
    }
  } else {
    timeout = setTimeout(function () {
      if (typeof callback === 'function') {
        callback();
      }
      timeout = null;
    }, wait);
  }
}
```
> ### 38.判断当前是否为移动端设备
```
// 判断当前是否为移动端设备
  isMobile() {
    return navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    ) != null;
  }
```
> ### 39.数组的移动操作
```
  Array: {
    //上移按钮
    up: function (idx, list) {
      idx = parseInt(idx);
      if (idx < 1) {
        return;
      }
      var t = list[idx - 1];
      list[idx - 1] = list[idx];
      list[idx] = t;
    },
    //下移按钮
    down: function (idx, list) {
      idx = parseInt(idx);
      if (idx >= list.length - 1) {
        return;
      }
      var t = list[idx + 1];
      list[idx + 1] = list[idx];
      list[idx] = t;
    },
    resumeSn: function (list) {
      for (var k = 0; k < list.length; k++) {
        list[k].sn = k;
      }
      return list;
    },
    /**
     * idx 原位置
     * num 目标位置
     * list 数组
     */
    moveToNum: function (idx, target, list) {
      if (target == -1) {
        target = 0;
      } else if (idx >= target) {
        target = target + 1;
      }
      var t = list.splice(idx, 1);
      list.insert(target, t[0]);
      this.resumeSn(list);
    },
    //删除按钮
    del: function (idx, list) {
      list.splice(idx, 1);
    },
    //找到指定元素的未知
    idxOf: function (val, list) {
      for (var i = 0; i < list.length; i++) {
        if (list[i] == val) return i;
      }
      return -1;
    },
    //删除指定元素
    remove: function (val, list) {
      var idx = this.idxOf(val, list);
      if (idx > -1) {
        list.splice(idx, 1);
      }
    },
    //置顶
    top: function (idx, list) {
      if (idx >= list.length || idx < 1) {
        return;
      }
      //逐个交换
      for (var i = 0; i < idx; i++) {
        var temp = list[i];
        list[i] = list[idx];
        list[idx] = temp;
      }
    },
    //置底
    bottom: function (idx, list) {
      if (idx >= list.length - 1 || idx < 0) {
        return;
      }
      //逐个交换
      for (var i = list.length - 1; i > idx; i--) {
        var temp = list[i];
        list[i] = list[idx];
        list[idx] = temp;
      }
    }
  }
```
> ### 40.对象转url参数
```
/**
   * 对象转url参数
   * @param {*} data
   * @param {*} isPrefix
   */
  queryParams(data, isPrefix = false) {
    let prefix = isPrefix ? "?" : "";
    let _result = [];
    for (let key in data) {
      let value = data[key];
      // 去掉为空的参数
      if (["", undefined, null].includes(value)) {
        continue;
      }
      if (value.constructor === Array) {
        value.forEach(_value => {
          _result.push(
            encodeURIComponent(key) + "[]=" + encodeURIComponent(_value)
          );
        });
      } else {
        _result.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
      }
    }

    return _result.length ? prefix + _result.join("&") : "";
  }
```
