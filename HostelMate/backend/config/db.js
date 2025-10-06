import mongoose from 'mongoose'

function connectToDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then( () => console.log('Connected to DB'))
}

export default connectToDB;