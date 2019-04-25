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
      * Block
      */
    const blockSchema = new mongoose.Schema({
      Actyve: {
        type: "Boolean", 
        required : true
      },
      FontendAPIHook: {
        type: "String"
      },
      Settings: {
        type: "String"
      },
      //RELATIONS
      BlockType: {
        type: Schema.ObjectId, 
        required : true,
        ref : "BlockType"
      },
      Privileges: {
        type: Schema.ObjectId,
        ref : "Role"
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    });

    generatedModel.setModel(db.connection.model("Block", blockSchema));
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
  * BlockModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * BlockModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * BlockModel.findByActyve
  *   @description CRUD ACTION findByActyve
  *   @param Objectid key Id of the resource Actyve to search
  *
  */
  async findByActyve(key) {
    return await generatedModel.model.find({ 'Actyve' : key});
  },
  
  /**
  * BlockModel.findByBlockType
  *   @description CRUD ACTION findByBlockType
  *   @param Objectid key Id of the resource BlockType to search
  *
  */
  async findByBlockType(key) {
    return await generatedModel.model.find({ 'BlockType' : key});
  },
  
  /**
  * BlockModel.findByFontendAPIHook
  *   @description CRUD ACTION findByFontendAPIHook
  *   @param Objectid key Id of the resource FontendAPIHook to search
  *
  */
  async findByFontendAPIHook(key) {
    return await generatedModel.model.find({ 'FontendAPIHook' : key});
  },
  
  /**
  * BlockModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id 
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({_id: id});
  },
  
  /**
  * BlockModel.getBlockType
  *   @description CRUD ACTION getBlockType
  *   @param Objectid id ID of Block from BlockType
  *
  */
  async getBlockType(id) {
    return await generatedModel.model.findOne({ _id : id}).populate("BlockType")
  },
  
  /**
  * BlockModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * BlockModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
