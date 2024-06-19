const express = require('express');
const cookieParser = require('cookie-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const testRoutes = require('./routes/testRoutes');
const attemptRoutes = require('./routes/attemptRoutes');

require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', testRoutes);
app.use('/api', attemptRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
