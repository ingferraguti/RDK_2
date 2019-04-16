import Properties from "../../../properties";
import ItemModel from "../../../models/RapiDevKit_db/ItemModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/items`;
    router.post(baseUrl + "", authorize([]), generatedControllers.create);
    router.delete(baseUrl + "/:id", authorize([]), generatedControllers.delete);
    router.get(baseUrl + "/findByType/:key", authorize([]), generatedControllers.findByType);
    router.get(baseUrl + "/:id", authorize([]), generatedControllers.get);
    router.get(baseUrl + "/:id/getLink", authorize([]), generatedControllers.getLink);
    router.get(baseUrl + "/:id/getLink", authorize([]), generatedControllers.getLink);
    router.get(baseUrl + "", authorize([]), generatedControllers.list);
    router.post(baseUrl + "/:id", authorize([]), generatedControllers.update);
  },


  // CRUD METHODS


  /**
  * ItemModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await ItemModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ItemModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await ItemModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ItemModel.findByType
  *   @description CRUD ACTION findByType
  *   @param Objectid key Id della risorsa Type da cercare
  *
  */
  findByType: async (req, res) => {
    try {
      const result = await ItemModel.findByType(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ItemModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id 
  *
  */
  get: async (req, res) => {
    try {
      const result = await ItemModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ItemModel.getLink
  *   @description CRUD ACTION getLink
  *   @param Objectid id ID of Item from Link
  *
  */
  getLink: async (req, res) => {
    try {
      const result = await ItemModel.getLink(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ItemModel.getLink
  *   @description CRUD ACTION getLink
  *   @param Objectid id ID of Item from Link
  *
  */
  getLink: async (req, res) => {
    try {
      const result = await ItemModel.getLink(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ItemModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await ItemModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * ItemModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await ItemModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
