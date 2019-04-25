import Properties from "../../../properties";
import BlockModel from "../../../models/RapiDevKit_db/BlockModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/blocks`;
    router.post(baseUrl + "", authorize([]), generatedControllers.create);
    router.delete(baseUrl + "/:id", authorize([]), generatedControllers.delete);
    router.get(baseUrl + "/findByActyve/:key", authorize([]), generatedControllers.findByActyve);
    router.get(baseUrl + "/findByBlockType/:key", authorize([]), generatedControllers.findByBlockType);
    router.get(baseUrl + "/findByFontendAPIHook/:key", authorize([]), generatedControllers.findByFontendAPIHook);
    router.get(baseUrl + "/:id", authorize([]), generatedControllers.get);
    router.get(baseUrl + "/:id/getBlockType", authorize([]), generatedControllers.getBlockType);
    router.get(baseUrl + "", authorize([]), generatedControllers.list);
    router.post(baseUrl + "/:id", authorize([]), generatedControllers.update);
  },


  // CRUD METHODS


  /**
  * BlockModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await BlockModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BlockModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await BlockModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BlockModel.findByActyve
  *   @description CRUD ACTION findByActyve
  *   @param Objectid key Id of the resource Actyve to search
  *
  */
  findByActyve: async (req, res) => {
    try {
      const result = await BlockModel.findByActyve(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BlockModel.findByBlockType
  *   @description CRUD ACTION findByBlockType
  *   @param Objectid key Id of the resource BlockType to search
  *
  */
  findByBlockType: async (req, res) => {
    try {
      const result = await BlockModel.findByBlockType(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BlockModel.findByFontendAPIHook
  *   @description CRUD ACTION findByFontendAPIHook
  *   @param Objectid key Id of the resource FontendAPIHook to search
  *
  */
  findByFontendAPIHook: async (req, res) => {
    try {
      const result = await BlockModel.findByFontendAPIHook(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BlockModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id 
  *
  */
  get: async (req, res) => {
    try {
      const result = await BlockModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BlockModel.getBlockType
  *   @description CRUD ACTION getBlockType
  *   @param Objectid id ID of Block from BlockType
  *
  */
  getBlockType: async (req, res) => {
    try {
      const result = await BlockModel.getBlockType(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BlockModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await BlockModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * BlockModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await BlockModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
