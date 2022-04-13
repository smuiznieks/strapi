module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "54ca6eb682f90e567222b06683831664"),
  },
});
