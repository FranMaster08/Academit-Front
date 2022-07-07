
const navigationController ={
    getHome : (req, res , next) => {
        res.render('index',{title: "Fran Generator"})
    },
    getVideo : (req, res , next) => {
        res.render('play-videos',{title: "Fran Generator"})
    }


}

module.exports =navigationController