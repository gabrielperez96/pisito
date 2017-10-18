//controlador image
module.exports = {
    //action methods
    index : (req, res) => {
        res.render('image');
    },
    create : (req, res) => {
        res.send("> se ejecuta el metodo create del imageController");
    },
    like : (req, res) => {
        res.send(`> se ejecuta el metodo <b>like</b> del imageController con el parametro image_id: ${req.params.image_id}`);
    },
    comment : (req, res) => {
        res.send(`> se ejecuta el metodo comment del imageController con el parametro image_id: ${req.params.image_id}`);
    }
};
