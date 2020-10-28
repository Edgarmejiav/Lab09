const mongoose = require('mongoose');
const dbconection = async() => {
    try {

        await mongoose.connect(process.env.DB_CN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('conexion exitosa a la base de datos');
    } catch (error) {
        console.log(error);
        throw new error('Error en la conxion a al base de datos');
    }
};
module.exports = { dbconection }