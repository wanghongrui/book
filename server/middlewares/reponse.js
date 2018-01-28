module.exports = async (ctx, next) => {
  ctx.error = ({status, error}) => {
    ctx.status = status || 400
    ctx.body = {success: false, error}
  }
  ctx.success = ({content}) => {
    ctx.body = {success: true, content}
  }
  await next()
}