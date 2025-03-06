const isloggedin = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next(); 
    }
    req.session.redirectUrl = req.originalUrl;
    res.status(400).json({ message: "eeror during login!" });
};

const toRedirect = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl; 
    }
    next(); 
};





module.exports = { isloggedin , toRedirect };