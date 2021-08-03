const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to:email,
        from: 'lalo2000x@hotmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email,name) =>{
    sgMail.send({
        to:email,
        from: 'lalo2000x@hotmail.com',
        subject: 'We are sad to see you leave',
        text: `Goodbye, ${name}. We are sad to see you leave, but we want to know why are you leaving`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}