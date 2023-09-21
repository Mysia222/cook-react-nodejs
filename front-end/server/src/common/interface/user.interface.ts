import { Document } from 'mongoose';
export interface IUser extends Document {
  readonly _id: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly refreshToken?: string;
  // readonly createdAt: Date;
  // readonly updatedAt: Date;
}
