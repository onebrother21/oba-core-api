import { Document, Model, Schema } from "mongoose";
import { MongoClientOptions } from "mongodb";
import { OBACoreDBType, OBACoreDBConfig } from "./db-types";
export interface OBACoreDB extends OBACoreDBType {
}
export declare class OBACoreDB {
    config: OBACoreDBConfig;
    constructor(config: OBACoreDBConfig);
    start(): Promise<void>;
    shutdown(): Promise<void>;
    startNative(name: string, uri: string, opts: MongoClientOptions): Promise<import("mongodb").Db>;
    print(): void;
    get(dbName: string): import("./db-types").DBConnection;
    model<T extends Document, U extends Model<T>>(dbName: string, modelName: string, schema: Schema<T>, collection: string): Promise<U>;
}
export default OBACoreDB;
