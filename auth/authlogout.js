const logout = (req, res) => {
  res
  .clearCookie("access_token")
  .status(200)
  .send (`<body style="background-repeat: no-repeat;background-size:100%; background-image: url('https://www.wishesmsg.com/wp-content/uploads/thank-you-message-for-visiting-our-home.jpg')";></body>`) ;

};
module.exports=logout
