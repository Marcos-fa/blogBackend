import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/blog.routes';
const app: Express = express();


app.use(morgan('dev')); 
app.use(express.json());
app.use("/api", routes);

export default app;