
import express  from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose  from 'mongoose';
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express();
const mongooseUrl = 'mongodb+srv://merndb:Azerty@cluster0.sjxrc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(mongooseUrl,{useNewUrlParser :true, useUnifiedTopology: true})
.then(() => app.listen(PORT , () => console.log('Server running on port 5000')))
.catch ((error) => {console.log(error.message)});
//mongoose.set('useFindAndModify', false);

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);