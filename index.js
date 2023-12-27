import express from 'express';
import morgan from 'morgan';
const app = express();

app.use(morgan('dev')); 
app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
