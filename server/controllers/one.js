let items = require('../../data.json');
let id = 1;


module.exports = {
    getUsers: function(req, res){
        res.status(200).send(items);
    },
    postUser: function(req, res){
        const {img, title, price} = req.body;
        
        const newUser = {id, img, title, price};
        items.push(newUser);
        id++;

        res.status(200).send(items);
    },
    updateUser: function(req, res){
        const {id} = req.params;
        const {title, price} = req.body;

        let index = items.findIndex(elm => elm.id == id);
        let user = items[index];
        user = {
            id: user.id,
            img: user.img,
            title: title || user.title,
            price: price || user.price
        }
        items[index] = user;
        res.status(200).send(items);
    },
    deleteUser: function(req, res){
        const {id} = req.params;
        let index = items.findIndex(elm => elm.id == id);
        items.splice(index, 1);
        
        res.status(200).send(items);
    }
}