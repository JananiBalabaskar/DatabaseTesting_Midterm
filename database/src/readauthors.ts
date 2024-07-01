import { Pool, QueryResult } from 'pg';
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'online_bookstore',
    password: '12345678',
    port: 5432, 
});

interface Author {
    AuthorID?: number; 
    FirstName: string;
    LastName: string;
}
async function getAllAuthors(): Promise<Author[]> {
    try {
        const query = 'SELECT * FROM authors';
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error dtected while reading authors:', error);
        return [];
    }
}
async function ReadOperations() {
 const allAuthors = await getAllAuthors();
    console.log('All authors:', allAuthors);
}
ReadOperations().catch(err => console.error('Error in example:', err));
