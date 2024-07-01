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

async function deleteAuthor(id: number): Promise<boolean>
{
    try {
        const query = 'DELETE FROM authors WHERE AuthorID = $1';
        const result = await pool.query(query, [id]);
        return result.rowCount > 0;
       }
catch (error)
	{
        console.error('Error detected when deleting author:', error);
        return false;
	}
}
async function DeleteOperations() {

    const authorIdToDelete = 6; 
    const isDeleted = await deleteAuthor(authorIdToDelete);
    console.log('Author deleted successfully:', isDeleted);
}
DeleteOperations().catch(err => console.error('Error in Detected :', err));
