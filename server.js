const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/userDetails', require('./routes/userDetails'));
app.use('/api/Qualification', require('./routes/qualification'));
app.use('/api/Bank', require('./routes/bank'));
app.use('/api/Address', require('./routes/address'));
app.use('/api/Event', require('./routes/event'));
app.use('/api/Study', require('./routes/study'));
app.use('/api/PO', require('./routes/po'));
app.use('/api/Contract', require('./routes/contract'));
app.use('/api/Notification', require('./routes/notification'));
app.use('/api/Invoice', require('./routes/invoice'));
app.use('/api/Company', require('./routes/company'));
app.use('/api/StudyComp', require('./routes/studyComp'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
