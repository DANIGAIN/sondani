const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.json({
                error: "User not found"
            })
        }

        const matched = await comparePassword(password, user.password);
        if (matched) {

            //jwt ---->
            jwt.sign({ email: user.email, name: user.name, id: user._id ,isAdmin: user.isAdmin}, process.env.JWT_SECRET, {}, (error, token) => {
                if (error) throw error;
                res.cookie('token', token).json(user);
            })



        } else {
            res.json({
                error: "Password is not matched try again !"
            })
        }

    } catch (error) {
        console.log(error)
    }
}

const registerUser = async (req, res) => {

    try {
        const { name, email, password, isAdmin } = req.body;
        if (!name) {
            return res.json({
                error: "name is require"
            })
        }
        if (!email) {
            return res.json({
                error: "email is requied"
            })
        }
        if (!password || password.lenght < 6) {
            return res.json({
                error: "password is  required it whould be at least 6 characters"
            })
        }

        const exist = await User.findOne({ email });

        if (exist) {
            res.json({
                error: "Email is taken already"
            })
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            name, email, isAdmin, password: hashedPassword
        });

        return res.json(user);

    } catch (error) {
        console.log(error);
    }

}



const getProfile = async(req, res) => {

    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (error, user) => {
            if (error) throw error
            res.json(user);
        })

    }else 
    {
        res.json(null)
    }
}

module.exports = {
    loginUser, registerUser ,getProfile
}

