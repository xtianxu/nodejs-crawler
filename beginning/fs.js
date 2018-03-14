var fs = require('fs')
    ,data = 'Embrace the dark side' 

exports.writeHtml = function(data){

    fs.writeFile('wfile.txt',data+'\r\n'+'\r\n',{flag:'a'},function(err){
        if(err){
            console.log('Write file failed')
        }else{
            console.log('Write file succeed')
        }
    })

}
