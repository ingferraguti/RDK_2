import Properties from "../../../properties";
import BlockTypeModel from "../../../models/RapiDevKit_db/BlockTypeModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/blocktypes`;
    router.post(baseUrl + "", authorize([]), generatedControllers.create);
    router.delete(baseUrl + "/:id", authorize([]), generatedControllers.delete);
    router.get(baseUrl + "/findByName/:key", authorize([]), generatedControllers.findByName);
    router.get(baseUrl + "/:id", authorize([]), generatedControllers.get);
    router.get(baseUrl + "", authorize([]), generatedControllers.list);
    router.post(baseUrl + "/:id", authorize([]), generatedControllers.update);
  },


  // CRUD METHODS


  /**
  * BlockTypeModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await BlockTypeModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BlockTypeModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await BlockTypeModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BlockTypeModel.findByName
  *   @description CRUD ACTION findByName
  *   @param Objectid key Id of the resource Name to search
  *
  */
  findByName: async (req, res) => {
    try {
      const result = await BlockTypeModel.findByName(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BlockTypeModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id 
  *
  */
  get: async (req, res) => {
    try {
      const result = await BlockTypeModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BlockTypeModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await BlockTypeModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * BlockTypeModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await BlockTypeModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
