import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
import { IClasse } from "./classe.model";

export interface IStudent extends Document {
    fullName: string;
    classe: string; // This should store the combined ID of the class
}

const studentSchema: Schema = new Schema({
    fullName: { type: String, required: true },
    classe: { type: String, required: true }, // Reference to the class ID
});

studentSchema.plugin(uniqueValidator);

export default mongoose.model<IStudent>('Student', studentSchema);
