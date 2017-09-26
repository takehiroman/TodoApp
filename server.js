const express = require('express')
const path = require('path')
const app = express();
const port = 3000

//静的ファイルの読み込み
app.use(express.static(path.join(__dirname,'client/build')))

app.listen(port,err => {
    if(err) throw new Error(err)
        else console.log(`port ${port}`)
    }
)

