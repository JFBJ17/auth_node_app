const ctrls = {}
const passport = require('passport');

ctrls.signup = (req, res) => {
    passport.authenticate('local.signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup'
    }, (error, user, info) => {
        if (error) throw error;
        return res.json({ message: 'Created user' });
    })(req, res);
};

ctrls.signin = (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin'
    }, (error, user, info) => {
        if (error) throw error;
        if (!user) res.send("No User exists");
        else {
            req.logIn(user, (error) => {
                if (error) throw error;
                res.send("Successfully Authenticated");
                console.log(req.user);
            });
        }
    })(req, res, next);
}

ctrls.logout = (req, res) => {
    req.logOut();
    res.redirect('/signin');
}

ctrls.whoami = (req, res) => {
    if (!req.user) return res.json({ error: 'Usuario no autenticado' });
    console.log(req.user)
    return res.json(req.user);
}

module.exports = ctrls;