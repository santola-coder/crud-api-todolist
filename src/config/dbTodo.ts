import mysql from "mysql2/promise";

// create object connection string to stream data from db
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "St!@#20031901",
  database: "todolist",
});

// db.ts
export const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Database connected successfully!');
        connection.release(); // release back to the pool
    } catch (error) {
        console.error('❌ Database connection failed:', error);
    }
};

export default pool;
