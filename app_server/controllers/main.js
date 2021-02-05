/* Get home page. */
const index = (req, res) => {
    res.render('index', { title: 'Aditya Venkatesh Prasad' });
};

module.exports = {
    index
};