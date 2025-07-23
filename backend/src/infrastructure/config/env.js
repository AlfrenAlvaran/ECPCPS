import "dotenv/config";

export const env = {
  port: process.env.PORT || 5000,
  database: process.env.MONGOOSE,
  development: process.env.NODE_ENV,
  ip: process.env.IP,
  Gmail: [
    {
      gmail: process.env.GMAIL_USER,
      password: process.env.GMAIL_PASSWORD,
    },
  ],
  cloudinary: [
    {
      name: process.env.CLOUDINARY_CLOUD_NAME,
      key: process.env.CLOUDINARY_API_KEY,
      secret: process.env.CLOUDINARY_API_SECRET,
    },
  ],
};
