import express from 'express'

const app = new express()

app.listen(80)

app.get("/", (req, res) => {
	res.send("<h1> Polopolka </h1>")
})

