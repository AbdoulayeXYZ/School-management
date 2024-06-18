import mongoose, { Schema, Document } from "mongoose";

export interface IClasse extends Document {
    serie: string;
    niveau: string;
}

const classeSchema: Schema = new Schema({
    _id: { type: String },
    serie: { type: String, required: true },
    niveau: { type: String, required: true },
});

// Middleware to set the _id field before saving
classeSchema.pre<IClasse>('save', function(next) {
    this._id = `${this.niveau}-${this.serie}`;
    next();
});

export default mongoose.model<IClasse>('classe', classeSchema);
