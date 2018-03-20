
var http = require('http')
    , https = require('https')
    , cheerio = require('cheerio')
    , querystring = require('querystring')
    , siteUrl = 'http://nodejs.cn/api/'
    , fs = require('./fs.js');

function domFilter(html) {

    var $ = cheerio.load(html)
        , html = $('#column2').children("#intro").next("ul").children("li").children('a')
        , hrefArray = []
        , href = ''

    html.each(function () {
        //href = this.attribs.href
        var currentAtag = $(this) //fetch the current cheerio? object, the commented line above does the same

        href = currentAtag.attr('href')

        hrefArray.push(href)
    })

    return hrefArray
}


function loopWrite(html) {
    var hrefArray = domFilter(html)

    hrefArray.forEach(function (value, index, array) {
        var url = siteUrl + value
            , filePath = './data fetched/' + value

        http.get(url, function (res) {
            var html = ''
                , statusCode = res.statusCode

            res.on('data', function (data) {
                html += data
            })
            res.on('end', function () {
                fs.writeTxt(filePath, html)
            })
        }).on('error', function (err) {
            console.log(err)
        })

    })

}

function httpGetRequest(siteUrl) {
    
    http.get(siteUrl, function (res) {
        var html = ''
            , statusCode = res.statusCode

        res.on('data', function (data) {
            html += data
        })
        res.on('end', function () {
            loopWrite(html)
        })
    }).on('error', function (err) {
        console.log(err)
    })

}



httpGetRequest(siteUrl)
