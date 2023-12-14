require('dotenv').config();
module.exports = {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.NODE_ENV === 'test' ? 'test' : process.env.DB_NAME,
  define: {
    timestamps: true,
    undescored: true
  }
};
