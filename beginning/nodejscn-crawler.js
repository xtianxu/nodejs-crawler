var http = require('http')
    ,cheerio = require('cheerio')
    ,querystring = require('querystring')
    ,url = 'http://nodejs.cn/api/';

function filter(html,statusCode){
    var $ = cheerio.load(html)
        ,html =  querystring.unescape($('#column2').children("#intro").next("ul").text())
        console.log(html,statusCode)
}

http.get(url, function(res){
    var html = ''
    var statusCode = res.statusCode;
    //res.setEncoding('utf-8')
    res.on('data', function(data){
        html += data
    })
    res.on('end', function(){    //  监听end事件，当页面内容获取完成后执行回调。
        filter(html,statusCode)
    })
}).on('error',  function(err){
        console.log(err)
    })

