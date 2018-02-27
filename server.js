var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').pool;
var app = express();
app.use(morgan('combined'));

var config={
    user:'manosatvik',
    database:'manosatvik',
    host:'db-imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var articles = {
 'article-one' : {
    title:"Article-one|manosatvik",
    heading:"Artilce-one",
    date:"20th feb, 2018",
    content:`<p>This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one</p>
        <p>This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one</p>
        <p>This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one This is article number one</p>`},
 'article-two' : {title:"Article-two|manosatvik",
    heading:"Artilce-two",
    date:"25th feb, 2018",
    content:`<p>This is article number two</p>`},
 'article-three' : {title:"Article-three|manosatvik",
    heading:"Artilce-three",
    date:"29th feb, 2018",
    content:`<p>This is article three two</p>`}
};

function create_template(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

var template=`<html>
<head>
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="ui/style.css" rel="stylesheet" type="text/css">
</head>
<body>
    <div class="container">
    <div>
        <a href="/">home</a>
    </div>
    <hr>
    <h2>${heading}</h2>
    <div>${date}</div>
    <div>
        ${content}
    </div>
    </div>
</body>
</html>
`;
return template;
}


var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});

var pool = new pool(config);
app.get('/test-db',function(req,res){
    pool.query('select * from usertable'),function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else
        {
            res.send(JSON.stringify(result));
        }
    }
});

names = [];
app.get('/submit-name',function(req,res){
  var  name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:articleName',function(req,res){
    articleName = req.params.articleName;
   res.send(create_template(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});





// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
