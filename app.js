const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

//midleware & static
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds eggs', snippet: 'lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'lorem ipsum dolor sit amet consectetur'},
    ];
    // res.send('<p>home page</p>');
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
});