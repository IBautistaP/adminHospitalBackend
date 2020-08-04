const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            //      await mongoose.connect('mongodb: //mean_user:nwnAvVvyGenANakud@cluster0.5x2ew.mongodb.net/hospitaldb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error(`Error a la hora de iniciar la conexion con la BD ve logs`)
    }
}

module.exports = {
    dbConnection
}


//mongodb+srv://mean_user:nwnAvVvyGenANaku@cluster0.5x2ew.mongodb.net/hospitaldb