
var http = require('http')
    ,https = require('https')
    ,cheerio = require('cheerio')
    ,querystring = require('querystring')
    ,url = 'http://nodejs.cn/api/'
    ,writeFile = require('./fs.js');

function domFilter(html,statusCode){
    var $ = cheerio.load(html)
        /*,html = querystring.unescape($('#column2').children("#intro").next("ul").children("li").children('a'))*/
        ,html = $('#column2').children("#intro").next("ul").children("li").children('a')
        ,hrefArray = []
        ,href = ''

        html.each(function(){
            /*href = this.attribs.href*/
            var currentAtag = $(this) //fetch the current cheerio? object, the commented line above does the same

            href = currentAtag.attr('href')

            hrefArray.push(href)

        }) 


    console.log(statusCode)


    return hrefArray
}

function httpRequest(url){
    http.get(url, function(res){
        var html = ''
            ,statusCode = res.statusCode

        res.on('data', function(data){
            html += data
        })
        res.on('end', function(){
            writeFile.writeCSV(domFilter(html,statusCode))
        })
    }).on('error', function(err){
        console.log(err)
    })
}

function crawler(){
    httpRequest(url)
}

httpRequest(url)

