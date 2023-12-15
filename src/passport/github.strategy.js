import passport from 'passport';
import { Strategy as GithubStrategy } from 'passport-github2';
import UserDao from '../daos/mongodb/user.dao.js';

const userDao = new UserDao();
const strategyOptions = {
    clientID: "Iv1.3e98dc78b9b6c3b0",
    clientSecret: "48796a830a66633a74e40cee06718a95fc44fbb9",
    callbackUrl:"http://localhost:8080/api/users/github",
};


const login = async (accessToken, refreshToken, profile, done) => {
    const email = profile._json.email;    
    const user = await userDao.findUserByEmail(email);
    if (user) return done(null, user);
    const newUser = await userDao.registerGithub({
        first_name: profile._json.name,
        last_name: profile._json.login,
        email: email,
        isGithub: true,
    })
    return done(null, newUser);
    
};
passport.use(new GithubStrategy(strategyOptions, login));

passport.serializeUser((user, done)=>{
    done(null, user._id)
});

passport.deserializeUser(async(id, done)=> {
    const user = await userDao.getById(id);
    return done(null, user);
});