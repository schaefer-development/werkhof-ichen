module.exports = ({ env }) => ({
  email: {
    provider: 'nodemailer-v3',
    providerOptions: {
      host: 'localhost',
      port: 1025,
      ignoreTLS: true,
    },
  },
});
