const express = require('express')
const homeRoutes = require('./routes/home')
const apiRoutes = require('./routes/api')

const app = express();
app.use(express.json());

app.use('/', homeRoutes);
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`)
})