const mongoose = require('mongoose');

if (process.env.NODE_ENV !== production) {
    const dotenv = require('dotenv');
    dotenv.config({path: './config.env'});
}

const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>', 
    process.env.DATABASE_PASSWORD
  );
  
  mongoose
    .connect(DB, {
      useNewUrlParser: true
    })
    .then(() => console.log('DB connection successfull'))
    .catch((err) => console.log('---', err));
  


if (process.env.NODE_ENV === 'production') {
    const https = require('https');  
    https.createServer(app).listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT} (HTTPS)`);
    });
} else {
    const port = '8000';
    app.listen(port, () => {
        console.log('App running on port 8000')
    })
}
