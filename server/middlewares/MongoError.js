// MongoErrorHandlingMiddleware.js
// this middleware specifically handles mongoErrors
 
const { MongoError } = require('mongodb');

const MongoErrorHandlingMiddleware = (err, req, res, next) => {
  if (err instanceof MongoError) {
    // handling only the errors related to MongoError
    console.error('MongoDB Error:', err.message);
    return res.status(500).json({
      error: 'MongoError encountered',
      message: 'FAILURE: Issue encountered with database operation',
    });
  }
};

module.exports = MongoErrorHandlingMiddleware;
