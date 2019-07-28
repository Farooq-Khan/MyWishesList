const mongoose = require('mongoose');
const {mongourl} = require('./config/keys');

mongoose.connect(mongourl, { useNewUrlParser:true});
const Todos = require('./models/todos')

const routes = (app) => {

    app.get('/', (req, res, next) => {
        res.send('hello world');
    })

    app.get('/data', function(req, res, next){
        Todos.find({}).then(data => {
            res.send(data);
        })
        
    }); 

    app.post('/sent', (req, res, next) => {
        const item = new Todos({
            item: req.body.item
        });
        item.save().then(data => {
            res.send(data);
        })
    })

    app.delete('/remove/:id', (req, res, next) => {

        Todos.findOneAndRemove({_id:req.params.id}).then(data => {
            res.send(data);
        });
        // data = data.map(item => {
        //    if(item != req.params.id){
        //        return item;
        //    }
        // })

        
    })
}

module.exports = routes;