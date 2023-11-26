// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // You can use any port you prefer

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { toEmail, productName } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '727721euit035@skcet.ac.in', // Replace with your Gmail email
      pass: '@Elangomail363', // Replace with your Gmail password
    },
  });

  const mailOptions = {
    from: '727721euit035@skcet.ac.in', // Replace with your Gmail email
    to: toEmail,
    subject: 'Order Confirmation',
    text: `Thank you for ordering ${productName}. Your order has been received.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
