import { messageModel } from "./models/message.model";

export default class MessageDaoMongoDB {
    
    async getAll() {
      try {
  
        const response = await messageModel.find({});
        return response;
      } catch (error) {
        console.log(error);
      }
    }

}