const http = require('http')
    ,https = require('https')
    ,cheerio = require('cheerio')

var url = 'http://nodejs.cn/api/'

function httpGetRequest(url){
    var html = ''

    http.get(url,function(res){
        res.on('data',function(data){
            html += data 
        })
        res.on('end',function(){
            console.log(html)
        })
    })
}

httpGetRequest(url)