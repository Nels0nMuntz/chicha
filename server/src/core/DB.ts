import mongoose from 'mongoose';

const connectDB = async () => {
    const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
    try {
        const db = mongoose.connection;
        db.on('error', () => { throw new Error("Connection to MongoDB faild") });
        db.once('open', () => console.log('We are connected ot MongoDB'));
        await mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    }
    catch (err) {
        process.exit(1);
    }
};

export default connectDB;