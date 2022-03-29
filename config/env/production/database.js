const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: "ec2-63-35-156-160.eu-west-1.compute.amazonaws.com",
      port: 5432,
      database: "duk1ri1n5i57b",
      user: "gmuxupkwrxnijo",
      password: "8fc48ac103a7dc3a689726a28391e242ec9bc9c03b7c48245c6e1de91d813217",
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
