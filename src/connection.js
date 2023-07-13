import { createPool } from 'mysql2/promise';

console.log("passou no db")

export const connection = createPool({
  host: 'db4free.net',
  user: 'gabrielbarreto',
  password: '20031998GRb*',
  database: 'dbbeautyhub',
  port: 3306,
  waitForConnections: true,
});
