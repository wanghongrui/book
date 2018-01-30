const tracer = require('tracer')

const logger = tracer.dailyfile({root:'.', maxLogFiles: 10, allLogsFileName: 'error'});

module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    if (typeof(e) ==='string') {
      ctx.error({error: e})
    } else {
      logger.error(e.stack)
      ctx.error({error: '服务器错误！'})
    }
  }
}