'use strict'

const Env = use('Env')
const Youch = use('youch')
const Http = exports = module.exports = {}

/**
 * handle errors occured during a Http request.
 *
 * @param  {Object} error
 * @param  {Object} request
 * @param  {Object} response
 */
Http.handleError = function * (error, request, response) {
  
  // I changed this part.
  // Original handleError function doesn't support dynamic error handling

  const statusCode = error.status;

  yield response.status(statusCode).sendView(`errors/${statusCode}`)
  return
}

/**
 * listener for Http.start event, emitted after
 * starting http server.
 */
Http.onStart = function () {
}