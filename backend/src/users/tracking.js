const uuidv4 = require('uuid/v4');

const USER_ID_COOKIE_NAME = 'user-id';

const addUserIdCookie = (res) => {
  const userId = uuidv4();
  res.cookie(USER_ID_COOKIE_NAME, userId, {maxAge: 900000, httpOnly: true});
  return userId;
};

const userIdExtractor = (req, res, next) => {
  const userIdCookie = req.cookies[USER_ID_COOKIE_NAME];
  const userId = userIdCookie || addUserIdCookie(res);
  req.userId = userId;
  next();
};

module.exports = {
  userIdExtractor
};