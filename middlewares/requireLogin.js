module.exports = (req, res, next) => {
  if (!req.user) {
    // User is not logged in. So stop the middleware chain and send the res.
    return res.status(401).send({ error: "You must log in!" });
  }
  // Now move on the the next middlware/ process.
  next();
};
