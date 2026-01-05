import mongoose, { Schema, Document, model, models } from "mongoose";

export interface IContactMessage extends Document {
  username: string;
  content: string;
  createdAt: Date;
}

const ContactMessageSchema = new Schema<IContactMessage>(
  {
    username: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const ContactMessage =
  models.ContactMessage || model<IContactMessage>("ContactMessage", ContactMessageSchema);

export default ContactMessage;
