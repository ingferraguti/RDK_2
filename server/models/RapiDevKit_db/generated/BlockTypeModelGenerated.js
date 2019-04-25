// Database
import Database from "../../../classes/Database_RapiDevKit_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * BlockType
      */
    const blocktypeSchema = new mongoose.Schema({
      Code: {
        type: "String"
      },
      Name: {
        type: "String", 
        required : true
      },
      //RELATIONS
      ItemType: {
        type: Schema.ObjectId, 
        required : true,
        ref : "ItemType"
      },
      
      
      //EXTERNAL RELATIONS
      /*
      BlockType: {
        type: Schema.ObjectId, 
        required : true,
        ref : "Block"
      },
      */
    });

    generatedModel.setModel(db.connection.model("BlockType", blocktypeSchema));
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * BlockTypeModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * BlockTypeModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * BlockTypeModel.findByName
  *   @description CRUD ACTION findByName
  *   @param Objectid key Id of the resource Name to search
  *
  */
  async findByName(key) {
    return await generatedModel.model.find({ 'Name' : key});
  },
  
  /**
  * BlockTypeModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id 
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({_id: id});
  },
  
  /**
  * BlockTypeModel.getItemType
  *   @description CRUD ACTION getItemType
  *   @param Objectid id ID of BlockType from ItemType
  *
  */
  async getItemType(id) {
    return await generatedModel.model.findOne({ _id : id}).populate("ItemType")
  },
  
  /**
  * BlockTypeModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * BlockTypeModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
