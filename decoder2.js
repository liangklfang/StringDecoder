var fs=require('fs');
var rs=fs.createReadStream('./test.js',{highWaterMark:11});
rs.setEncoding('utf8');
//设置为utf-8格式，而且底部调用的是StringDecoder的类来完成的转码的。其知道中文是3个字节来完成的，所以前一次只输出前9个字节的内容，后面再一次输出
rs.on('data', (chunk) => {
  console.log(chunk);
});