/**
 * Created by wjweb on 30/03/2021.
 */

const { User } = require('../models');

/**
 * @route /api/v1/users
 * @param req
 * @param res
 * @returns {Promise.<void>}
 */
exports.getUsers = async (req, res) => {
    res.json({
        success: true,
        data: {
            users: 'Users'
        }
    });
};

exports.postUsers = async (req, res) => {
    let user = new User(req.body);
    res.json({
        success: true,
        data: {
            user
        }
    });
    // user = await user.save();
};