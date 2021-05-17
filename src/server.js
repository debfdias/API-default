import app from './app'

app.listen(process.env.PORT || 3334, () => {
  console.log('The API default is running on some PORT')
})
