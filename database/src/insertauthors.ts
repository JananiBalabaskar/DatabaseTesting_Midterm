import { Pool, QueryResult } from 'pg';


const pool = new Pool(
{
    user: 'postgres',
    host: 'localhost',
    database: 'online_bookstore',
    password: '12345678',
    port: 5432, 
}
);

interface Author {
    FirstName: string;
    LastName: string;
    
}

async function createAuthor(author: Author): Promise<number | null>
{
    try {
        const query = 'INSERT INTO authors (FirstName, LastName) VALUES ($1, $2) RETURNING AuthorID';
        const values = [author.FirstName, author.LastName];
        const result = await pool.query(query, values);
        return result.rows[0].AuthorID;
    } catch (error) {
        console.error('Error detected when creatinga new author:', error);
        return null;
    }
}

async function InsertOperations()
{
    const newAuthor: Author = {
        FirstName: 'Rhonda',
        LastName: 'bryne',
    };
    const createdAuthorId = await createAuthor(newAuthor);
    console.log('Author added successfully:', createdAuthorId);
}

InsertOperations().catch(err => console.error('Error Detected:', err));
