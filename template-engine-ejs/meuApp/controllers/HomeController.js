const HomeController = {
    index: (req, res) => {
        let info = {
            titulo: 'Digital House',
            cursos: ['Full Stack', 'Android Mobile', 'Marketing Digital']
        }
        return res.render('index', info); 
    }
};

module.exports = HomeController;