const http = require('http')
    ,https = require('https')
    ,cheerio = require('cheerio')

var url = 'http://nodejs.cn/api/'

var html = '1'

function httpGetRequest(url,html){
    

    http.get(url,function(req,res){
        res.on('data',function(data){
            html += data 

        })
        res.on('end',function(){
                return res.end(html)

        })
    })

}

html = httpGetRequest(url)

console.log(html)