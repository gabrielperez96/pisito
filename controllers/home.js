//controlador home
module.exports = {
    //action methods
    index : (req, res) => {
        //creando el viewModel
        var viewModel = {
            images: [
                {
                    uniqueId: 1,
                    title: "descripcion asombrosa 1",
                    filename:"sample.jpg",
                    views: 0,
                    likes: 0,
                    timestamp: Date.now()

                },
                {
                    uniqueId: 2,
                    title: "descripcion asombrosa 2",
                    filename:"sample.jpg",
                    views: 0,
                    likes: 0,
                    timestamp: Date.now()

                },
                {
                    uniqueId: 3,
                    title: "descripcion asombrosa 3",
                    filename:"sample.jpg",
                    views: 0,
                    likes: 0,
                    timestamp: Date.now()

                },
                {
                    uniqueId: 4,
                    title: "descripcion asombrosa 4",
                    filename:"sample.jpg",
                    views: 0,
                    likes: 0,
                    timestamp: Date.now()

                },
            ]
        }
        res.render('index',viewModel);
    }
};
