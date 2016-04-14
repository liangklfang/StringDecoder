//StringDecoder模块用于把一个Buffer解析为一个string。但是你可能说只要使用buffer.toString就可以了，但是这里的API很好
const StringDecoder = require('string_decoder').StringDecoder;
//不是万能的，只能解决UTF-8，Base64,UCS-2/UTF-16LE这三种编码
var result=new Buffer('覃亮');
console.log(result);
//打印<Buffer e8 a6 83 e4 ba ae>
const decoder = new StringDecoder('utf8');
//用decoder.write来返回一个解码都的字符串
const cent = new Buffer([0xe8, 0xA6,0x83]);
console.log(decoder.write(cent));
//write返回一个解码都的字符串
const euro = new Buffer([0xe4, 0xba, 0xae]);
console.log(decoder.write(euro));
//判断支持GBK编码类型
console.log(Buffer.isEncoding('GBK'));
//使用iconv-lite库
var iconv=require('iconv-lite');
//把字符串转化为Buffer
var bf=iconv.encode('覃亮','gbk');
console.log(bf);
//<Buffer f1 fb c1 c1>
console.log(iconv.decode(bf,'gbk'));
//打印‘覃亮’
//注意：iconv和icon-lite初六无法转换的内容的时候会进行降级处理，icon-lite如果是多字节会输出，如果是单字节会输出?。而icon对于无法转换的内容抛出异常
console.log(new Buffer('覃亮','GB2312'))
//无法完成，抛出异常!