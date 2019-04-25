// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import BlockModel from "../models/RapiDevKit_db/BlockModel";
import BlockTypeModel from "../models/RapiDevKit_db/BlockTypeModel";
import ItemModel from "../models/RapiDevKit_db/ItemModel";
import ItemTypeModel from "../models/RapiDevKit_db/ItemTypeModel";
import RoleModel from "../models/RapiDevKit_db/RoleModel";
import UserModel from "../models/RapiDevKit_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.RapiDevKit_db_dbUrl);

    // Start Init Models

		BlockModel.init();
		BlockTypeModel.init();
		ItemModel.init();
		ItemTypeModel.init();
		RoleModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_RapiDevKit_db = await mongoose.connect(
        "mongodb://" + properties.RapiDevKit_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_RapiDevKit_db;
  }
}

export default new Database();
