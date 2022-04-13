module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '90aaaee324eddf1acf72087e5ddd1af8'),
  },
});
