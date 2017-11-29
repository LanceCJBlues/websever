const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

app.set('port', process.env.PORT || 1337)

// 將public設定為靜態網頁目錄
app.use(express.static('public'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// 查詢
app.get('/query', (req, res) => {
     // 去mongoDB讀資料
    var response = {
        result:true,
        data: [
            {
                'name': "掃地機器人",
                'price': 8895,
                'image': 'https://pic.pimg.tw/danny6228/1474638234-622471565.png?v=1474638239'
            }, {
                'name': "路由器",
                'price': 2295,
                'image': 'https://truth.bahamut.com.tw/s01/201507/b830c6bcfe0b8de009cb1cedd8c815ed.JPG'
            }
        ]
    }
    res.json(response)
 })

 // 新增
app.post('/insert', (req, res) => {
    var data = {
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
    }

    // 去mongoDB將data新增進去
    var response = {
        result: true,
        data: data
    }
    res.json(response)
})

app.listen(app.get('port'), () => {
    console.log('Example app listening on port http://127.0.0.1:' + app.get('port'))
})
