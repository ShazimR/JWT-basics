const jwt = require('jsonwebtoken');
const {BadRequestError} = require('../errors/index');


const login = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) throw new BadRequestError('Username or password missing'); 

    // Just for practice, should come from db
    const id = new Date().getDate();
    // payload, secret key, options
    const token = jwt.sign({id, username},process.env.JWT_SECRET, {expiresIn: '30d'});

    res.status(200).json({msg: 'user created', token});
};

const dashboard = async (req, res) => {

    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
        msg: `Hello, ${req.user.username}`, 
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
    });
};


module.exports = {
    login,
    dashboard,
};
