import {Schema, model, Document, models} from 'mongoose';

interface IUser extends Document {
  name?: string;
  username: string,
  email: string;
  password: string;
  profileImg?: string;
  dob?: Date;
  // oauthProvider: string;
}

const userSchema:Schema<IUser> = new Schema({
  name: {
    type: String,
    min: [3, 'Name must be at least 3 characters long'],
  },
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'Email already linked with another account'],
  },
  password: {
    type: String,
  },
  profileImg: {
    type: String,
  },
  dob: {
    type: Date,
  },
  // oauthProvider: {
  //   type: String,
  //   default: 'credentials',
  // },
}, {timestamps: true});

const User = models.User || model('User', userSchema);

export default User