const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function handler(req, res) {
  
    const body = JSON.parse(req.body);

    const msg = `Message From Blog :-\r\n Name: ${body.fullname}\r\n Email: ${body.email}\r\n Message: ${body.desc}`;
  
    const data = {
      to: 'vikramksm2009@gmail.com',
      from: 'vikramksm2009@gmail.com',
      subject: 'Message From Blog:-',
      text: msg,
      html: msg.replace(/\r\n/g, '<br>') 
    }

  mail.send(data);

  
  }