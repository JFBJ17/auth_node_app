const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('./helpers');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, user, password, done) => {
    const rows = await pool.query('SELECT * FROM usuario WHERE user = ?', [user]);
    if (rows.length > 0) {
        const usuario = rows[0];
        const validPassword = await helpers.matchPassword(password, usuario.password);
        if (validPassword) {
            done(null, usuario);
        } else {
            done(null, false);
        }
    } else {
        return done(null, false);
    }

}));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, user, password, done) => {
    const { fullname } = req.body;
    const encryptedPassword = await helpers.encryptPassword(password);
    const newUser = {
        user,
        password: encryptedPassword,
        fullname
    }
    const result = await pool.query('INSERT INTO usuario SET ?', [newUser]);
    newUser.id = result.insertId;
    return done(null, newUser);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM usuario WHERE ID = ?', [id]);
    done(null, rows[0]);
});