import app from './App'
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.info(`server is listening on ${port}`)
})
