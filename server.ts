// Require the framework and instantiate it
import fastify from "fastify"
const app = fastify();

// Declare a route
app.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await app.listen(4000)
    console.log('running')
  } catch (err) {
    app.log.error(err)
  }
}
start()