export const isAuth = (req, res, next) => {
    if(req.isAutenticated()) return next();
    else res.status(401).send({msg: 'No autorizado'});
}