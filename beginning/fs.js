var fs = require('fs')
    ,csv = require('csv')
    ,data = 'Embrace the dark side' 

exports.writeTxt = function(filePath,data){

    fs.writeFile(filePath,data+'\r\n'+'\r\n',{flag:'a'},function(err){
        if(err){
            console.log('Write file failed: '+filePath)
        }else{
            console.log('Write file succeeded: '+filePath)
        }
    })

}


