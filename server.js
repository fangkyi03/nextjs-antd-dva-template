// require('next-inferno/alias')()
const fastify = require('fastify')({ logger: { level: 'error' } })
const Next = require('next')
const port = parseInt(process.env.PORT, 10) || 3010
const dev = process.env.NODE_ENV !== 'production'
const proxyMiddleware = require('http-proxy-middleware')
const getPageFile = require('./utils/getPageFile')

const devProxy = {
  '/api': {
    target: "https://suggest.taobao.com",
    pathRewrite: { '^/api': '' },
    changeOrigin: true
  }
}

fastify.register((fastify, opts, next) => {
  const app = Next({dev, dir: '.'})
  app
    .prepare()
    .then(() => {
      if (dev) {
        fastify.get('/_next/*', (req, reply) => {
          return app.handleRequest(req.req, reply.res).then(() => {
            reply.sent = true
          })
        })
        if (devProxy) {
          Object.keys(devProxy).forEach(function (context) {
            fastify.use(proxyMiddleware(context, devProxy[context]))
          })
        }
      }

      getPageFile.forEach((e)=>{
        fastify.get('/' + e, (req, reply) => {
          return app.render(req.req, reply.res, '/' + e, req.query).then((e) => {
            reply.sent = true
          })
        })
      })

      fastify.get('/', (req, reply) => {
        return app.render(req.req, reply.res, '/index', req.query).then((e) => {
          reply.sent = true
        })
      })

      fastify.get('/*', (req, reply) => {
        return app.handleRequest(req.req, reply.res).then(() => {
          reply.sent = true
        })
      })

      fastify.setNotFoundHandler((request, reply) => {
        return app.render404(request.req, reply.res).then(() => {
          reply.sent = true
        })
      })
      next()
    })
    .catch(err => next(err))
})

fastify.listen(port, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})

