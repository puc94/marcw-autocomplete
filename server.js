var express = require('express'),
bodyParser  = require('body-parser')
list		= require('./list.json'),
app         = express();

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/filter_list', (req, res) => {
	let filter_reg = new RegExp(req.body.term, 'i');
	let items = list.filter(item => filter_reg.test(item))
	res.send(items)
})

app.set('port', process.env.PORT || 7000)
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'))
})