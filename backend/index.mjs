import express  from 'express';
import dotenv  from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static('build'));


app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});