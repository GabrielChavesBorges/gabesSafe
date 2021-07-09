import Mongoose from 'mongoose';
import Encrypt from 'mongoose-encryption';

const entrySchema = new Mongoose.Schema({
    title: String,
    login: String,
    password: String,
    link: String
});

entrySchema.plugin(Encrypt, { 
  secret: process.env.ENCRYPT_SECRET, 
  encryptedFields: ['password'],
});

export default entrySchema;