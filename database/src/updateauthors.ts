import { Pool, QueryResult } from 'pg';
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'online_bookstore',
    password: '12345678',
    port: 5432, 
});

async function updateAuthor(authorId, newFirstName, newLastName) {
    try {
        const query = 'UPDATE authors SET FirstName = $1, LastName = $2 WHERE AuthorID = $3';
        const values = [newFirstName, newLastName, authorId];
        const result = await pool.query(query, values);
        return result.rowCount > 0;
    } catch (error) {
        console.error('Error detected while updating author:', error);
        return false;
    }
}


const authorIdToUpdate = 1;
const newFirstName = 'Victor';
const newLastName = 'Hugo';

updateAuthor(authorIdToUpdate, newFirstName, newLastName)
    .then(updated => {
        console.log('Author updated successfully:', updated);
    })
    .catch(err => {
        console.error('Error updating author:', err);
    });

