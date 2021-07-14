import express from 'express';
import cors from 'cors';
import userRoute from './routes/userRoute';
import { connectMongoose } from './config/connect';
// set up express app
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/api/v1', userRoute);

connectMongoose.then(() => { app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server running ${PORT}`);
  });
})

// Wrong endpoints
app.use((_req, res) => res.status(404).send({
  status: 404,
  error: 'URL doesn\'t exist, Please check again ',
}));
app.use((err, res) => res.status(400).send({
  status: err.statusCode,
  message: 'Bad Request',
}));
const PORT = process.env.PORT || 3002;



export default app;
