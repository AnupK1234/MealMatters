// related issue: #35 

const globalErrorHandlingMiddleware = (err, req, res, next) => {
    console.error(err.stack);
  
    // send the error response 
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'internal Server issue! Connection unsuccessful!',
    });
  };
  
  module.exports = globalErrorHandlingMiddleware;
  