module.exports = ({ env }) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST'),
      port: env('SMTP_PORT'),
      username: env('SMTP_USERNAME'),
      password: env('SMTP_PASSWORD'),
    },
    settings: {
      defaultFrom: 'default-from@example.org'
    }
  },
});
