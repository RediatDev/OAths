const express = require('express')
const { connect, gridFSBucket } = require("./dbConfig/dbConfiguration");
const {CreateTableRouter} = require('./Routes/createTableR');
const { authRout } = require('./Routes/Auth');
const session = require('express-session');
// strategy call 
const passportGoogle = require('./strategies/passport-google-strategy')
const passportMicrosoft = require('./strategies/passport-microsoft-strategy')
const passport = require('passport')
require('dotenv').config()


const app = express();
const PORT = process.env.PORT || process.env.OPORT;

app.use(session({
  secret: 'mySecret', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/admin',CreateTableRouter)
app.use('/auth',authRout)

app.get("/", (req, res) => {
  res.status(200).json("trial to passport");
});


const start = async (PORT) => {
  try {
    // database connection (mongodb)

    await connect();
    console.log(`✅ Database Connection Established Successfully !`);

    // server starting
    app.listen(PORT, (err) => {
      if (err) {
        console.log(`❌ Server failed to Start`);
        console.log(err.message);
      } else {
        console.log(`🟩 API Running 🚀`);
      }
    });
  } catch (err) {
    console.log(`❌ DB connection failed`);
    console.log(err);
  }
};

// start the app
start(PORT);