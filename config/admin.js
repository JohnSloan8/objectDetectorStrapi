module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9166ab828339dc550403a44150794df4'),
  },
});
