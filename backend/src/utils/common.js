const rethrow = (error, message = '') => {
  if (message) {
    console.log(message);
  }
  throw error;
};

module.exports = {
  rethrow
};