import express from 'express'
import sqlite from 'sqlite3'
import path from 'path'

var products = []

const sql = sqlite.verbose()
const db = new sql.Database("magaz.db")

const app = new express()
const __dirname = path.resolve()

app.use(express.static(path.relative(__dirname, 'static')))
app.set('view engine','ejs')
app.set('views',path.resolve(__dirname, 'templates'))
app.listen(80)

app.get('/', (res, req) => {
	req.render('index')
})

app.post('/api/products', (req, res) => {
	console.log("Nice")
	res.json(products)
})

db.serialize(function () {

	db.each("select * from Products",(err,row) => {

		let product = {
			id: row.id,
			name: row.name,
			amount: row.amout,
			description: row.description,
			login: row.login,
			love: row.love,
			posts: row.posts,
			buy_smile: row.buy_smile,
			image: row.image
		}

		console.log(product)
		products.push(product)
	})

})