export default (fn) => (req, res, next) => {
  return fn(req, res, next).catch((err) => next(err));
};
