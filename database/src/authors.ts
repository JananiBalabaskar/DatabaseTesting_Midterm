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


async function createAuthor(author: Author): Promise<number | null> {
    try {
        const query = 'INSERT INTO authors (FirstName, LastName) VALUES ($1, $2) RETURNING AuthorID';
        const values = [author.FirstName, author.LastName];
        const result = await pool.query(query, values);
        return result.rows[0].AuthorID;
    } catch (error) {
        console.error('Error creating author:', error);
        return null;
    }
}


async function getAllAuthors(): Promise<Author[]> {
    try {
        const query = 'SELECT * FROM authors';
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error fetching authors:', error);
        return [];
    }
}


async function getAuthorById(id: number): Promise<Author | null> {
    try {
        const query = 'SELECT * FROM authors WHERE AuthorID = $1';
        const result = await pool.query(query, [id]);
        return result.rows[0] || null;
    } catch (error) {
        console.error('Error fetching author by ID:', error);
        return null;
    }
}


async function updateAuthor(author: Author): Promise<boolean> {
    try {
        const query = 'UPDATE authors SET FirstName = $1, LastName = $2 WHERE AuthorID = $3';
        const values = [author.FirstName, author.LastName, author.AuthorID];
        const result = await pool.query(query, values);
        return result.rowCount > 0;
    } catch (error) {
        console.error('Error updating author:', error);
        return false;
    }
}


async function deleteAuthor(id: number): Promise<boolean> {
    try {
        const query = 'DELETE FROM authors WHERE AuthorID = $1';
        const result = await pool.query(query, [id]);
        return result.rowCount > 0;
    } catch (error) {
        console.error('Error deleting author:', error);
        return false;
    }
}


async function exampleCRUDOperations() {

    const authorIdToDelete = 5; // Replace with existing AuthorID
    const isDeleted = await deleteAuthor(authorIdToDelete);
    console.log('Author deleted successfully:', isDeleted);
}
exampleCRUDOperations().catch(err => console.error('Error in example:', err));
