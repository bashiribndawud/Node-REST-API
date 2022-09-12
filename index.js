import express from 'express';
import bodyparser from 'body-parser'
import userRoutes from './routes/user.js'
const app = express();
const PORT = 5000;

app.use(express.json());


app.use('/users', userRoutes)




app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})