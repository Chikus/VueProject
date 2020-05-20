const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const mongodb = require('mongodb');
const formidable = require('formidable')
const nodemailer = require('nodemailer');

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

if (process.env.PRODUC === "on") {
    const fs = require('fs');
    app.use(express.static(__dirname+'/dist/'));
    //app.get(/.*/,(req,rsp) => rsp.sendFile(__dirname +'/dist/index.html'));
    /*
    require('https').createServer({key: fs.readFileSync('./certificates/NotForLicensees/client-key.pem'),
            cert: fs.readFileSync('./certificates/NotForLicensees/client-cert.pem')},
        app).listen(port, () => { console.log(`listening on ${port} https`) });

     */
} else {
    app.get('/', async (req, res) => {
        const db = await MongoColl();
        res.send(await db.find({}).toArray());
    });
    app.get('/del/:id', async (req, res) => {
        const db = await MongoColl();
        db.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    });
}

/*------------------------------ROUTES-------------------------*/
app.get('/enableAcc/:id', async (req, res) => {
    const db = await MongoColl();
    await db.findOneAndUpdate(
        {_id: new mongodb.ObjectID(req.params.id)},
        {$set:{"enable": true}}
    ).then(
        res.sendStatus(200)
    ).catch(
        res.sendStatus(400)
    )
});

app.post('/login', async function(req, res){
    const db = await MongoColl();
     await db.findOne({
        "user": req.body.user
    }).then((result ) => {
         if(result.noword === req.body.noword
         && result.enable) {
            const token = jwt.sign(result, `${result._id}`);
            res.json({
                token,
                user: result.user,
                name: result.name
            });
        } else {
            res.sendStatus(400);

         }
     }).catch(err => res.sendStatus(401))
});

app.post('/forgot', async (req, res) => {
    console.log('hola');
    const db = await MongoColl();
    await db.findOneAndUpdate(
        { email: req.body.email },
        { $set: { "noword": req.body.noword} }
    ).then((result) => {
        console.log(result);
        trans.sendMail({
            from: 'efra.arrambide@gmail.com',
            to: req.body.email,
            subject: 'Abe web user login',
            text: `This is your user:${result.value.user} and this is your temporal password: ${req.body.nPass}`
        }, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })
    }).catch(
        res.sendStatus(400)
    )
});

app.post('/register', async function(req, res){
    const db = await MongoColl();
    try {
       await db.insertOne({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            enable: false,
            createdAt: new Date()
        }).then((newUser) => {
           trans.sendMail({
               from: 'efra.arrambide@gmail.com',
               to: req.body.email,
               subject: 'Welcome to Abe',
               text: `Click here to enable your account https://chikus.com/enableAcc/${newUser.insertedId}`
           }, (error, info) => {
               if (error) {
                   console.log(error);
               } else {
                   console.log('Email sent: ' + info.response);
               }
           })
       })
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(400);
    }
});

app.post('/upload', (req, res) => {
    new formidable.IncomingForm().parse(req)
        .on('fileBegin', (name, file) => {
            file.path = __dirname + '/scenario/' + file.name
        })
        .on('file', (name, file) => {
            console.log('Uploaded file', name, file)
        })
    /*
    jwt.verify(req.token, 'the_secret_key', err => {
        if (err) {
            res.sendStatus(401);
        } else {
            console.log('up')
        }
    })
    */
})

const trans = nodemailer.createTransport({
    service: 'gmail ',
    auth: {
        user: 'efra.arrambide@gmail.com',
        pass: 'nataefra2910'
    }
});

function verifyToken (req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(401);
    }
}

async function MongoColl() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://Abe:Abe@cluster0-cjfng.mongodb.net/test?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    return client.db('test').collection('devices');
}


require('http').createServer(app).listen(port, () => { console.log(`listening on ${port} http`) });


