const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require("method-override");
const dotenv = require('dotenv');
const User = require('./models/user.js');
const userRoutes = require('./routes/users.js');
const ListingRoutes = require('./routes/listings.js');
const BookingRoutes = require('./routes/booking.js');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false, 
    cookie: { 
        expires: Date.now() + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly: true
    } 
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());


passport.use(User.createStrategy()); 

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.successMessage = req.flash('success');
    res.locals.errorMessage = req.flash('error');
    res.locals.userInfo = req.user;
    next();
});


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));


app.use('/user', userRoutes);
app.use('/listing', ListingRoutes);
app.use('/book', BookingRoutes);

app.get("/debug", (req, res) => {
    res.json({ user: req.user, session: req.session });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
