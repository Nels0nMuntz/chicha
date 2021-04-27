import mongoose from 'mongoose';

const connectDB = async (processEnv: NodeJS.ProcessEnv) => {
    const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = processEnv;
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
        console.log(err);
        process.exit(1);
    }
};

export default connectDB;