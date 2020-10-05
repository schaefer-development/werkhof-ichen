module.exports = ({ env }) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST'),
      port: env('SMTP_PORT'),
      auth: {
        user: env('SMTP_USERNAME'),
        pass: env('SMTP_PASSWORD'),
      }
    },
    settings: {
      defaultFrom: env('SMTP_DEFAULT_FROM', 'default-from@example.org'),
      defaultReplyTo: env('SMTP_DEFAULT_REPLY_TO', 'default-reply-to@example.org'),
    }
  },
});
