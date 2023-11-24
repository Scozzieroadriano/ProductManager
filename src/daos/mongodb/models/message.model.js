import { Schema, model } from "mongoose";

export const messageCollectionName = "message";

const messageSchema = new Schema({
    user: {
      type: String,
      required: true,
      index: true,
    },
    msg: {
      type: String,
      required: true,
    },
  })

export const messageModel = model(messageCollectionName, messageSchema);