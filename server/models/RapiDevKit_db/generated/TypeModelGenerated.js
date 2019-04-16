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
      * Type
      */
    const typeSchema = new mongoose.Schema({
      Name: {
        type: "String"
      },
      Schema: {
        type: "String"
      },
      Validation: {
        type: "String"
      },
      Visualization: {
        type: "String"
      },
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      ItemType: {
        type: Schema.ObjectId,
        ref : "Block"
      },
      Type: {
        type: Schema.ObjectId, 
        required : true,
        ref : "Item"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Type", typeSchema));
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
  * TypeModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * TypeModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * TypeModel.findByName
  *   @description CRUD ACTION findByName
  *   @param Objectid key Id of the resource Name to search
  *
  */
  async findByName(key) {
    return await generatedModel.model.find({ 'Name' : key});
  },
  
  /**
  * TypeModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id 
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({_id: id});
  },
  
  /**
  * TypeModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * TypeModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
