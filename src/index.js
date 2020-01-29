const express   = require('express');
const app       = express();
const morgan    = require('morgan');
const mongoose  = require('mongoose');
const cors      = require('cors');
const userRoutes   = require('./routers/userRoutes');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(userRoutes);
app.use('/api/users', userRoutes);
app.get('/', (req,res)=>{
    res.json({message: 'Wellcome to my app'});
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{ console.log(`Server listen on port ${PORT}`) });