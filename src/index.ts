import app from './App'
const port = process.env.PORT ?? '3000'

app.listen(port, () => {
  console.info(`server is listening on ${port}`)
})
