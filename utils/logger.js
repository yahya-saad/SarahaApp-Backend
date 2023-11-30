export default (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
