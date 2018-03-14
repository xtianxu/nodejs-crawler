
var http = require('http')
    ,https = require('https')
    ,cheerio = require('cheerio')
    ,querystring = require('querystring')
    ,url = 'http://nodejs.cn/api/'
    ,writeFile = require('./fs.js');

function domFilter(html,statusCode){
    var $ = cheerio.load(html)
        ,html = querystring.unescape($('#column2').children("#intro").next("ul").children("li").children('a'))
        /*,html = $('#column2').children("#intro").next("ul").children("li").children('a')*/
        

    console.log(statusCode)

    return html
}

function httpRequest(url){
    http.get(url, function(res){
        var html = ''
            ,statusCode = res.statusCode

        res.on('data', function(data){
            html += data
        })
        res.on('end', function(){
            writeFile.writeHtml(domFilter(html,statusCode))
        })
    }).on('error', function(err){
        console.log(err)
    })
}

function crawler(){
    httpRequest(url)
}

httpRequest(url)

