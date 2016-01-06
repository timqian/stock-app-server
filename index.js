import authApi        from 'auth-api';
import express        from 'express';
import bodyParser     from 'body-parser';
import methodOverride from 'method-override';
import morgan         from 'morgan';
import mongoose       from 'mongoose';
import restMongoRouter from './restMongoRouter';

mongoose.connect('mongodb://120.27.92.163:27777/testdb'); // connect to database

const userConfig = {
  APP_NAME: 'STOCK APP',
  SECRET: 'ilovetim', // jwt secret
  CLIENT_TOKEN_EXPIRES_IN: 60 * 24 * 60 * 60,          // client token expires time(60day)
  EMAIL_TOKEN_EXPIRES_IN: 24 * 60 * 60,           // email token expires time(24h)

  EMAIL_SENDER: { // used to send mail by nodemailer
    service: 'Gmail',
    auth: {
      user: 'qianlijiang123@gmail.com',
      pass: '321qianqian',
    }
  },

  USER_MESSAGE: { // message sent to client
    MAIL_SENT: 'mail sent',
    NAME_TAKEN: 'Name or email has been taken',
    USER_NOT_FOUND: 'User not found',
    WRONG_PASSWORD: 'wrong password',
    LOGIN_SUCCESS: 'Enjoy your token!',
    NEED_EMAIL_VERIFICATION: 'You need to verify your email first',
  },

  API_URL: 'http://120.27.92.163:8080'
};

authApi.init(userConfig);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));
app.use('/', authApi.authRouter);
app.use('/', restMongoRouter);


app.listen(8080);
console.log('API magic happens at http://localhost:8080');

// handle unhandled promise rejection
// https://nodejs.org/api/process.html#process_event_unhandledrejection
process.on('unhandledRejection', function(reason, p) {
    console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
    // application specific logging, throwing an error, or other logic here
});
