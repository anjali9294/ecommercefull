// creating token and saving in cookie
const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKEIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  // res.cookie(`Cookie token name`, `encrypted cookie string Value`);
  // res.send("Cookie have been saved successfully");
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
