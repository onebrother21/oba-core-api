import {OBACoreVars,OBACoreVarsConfig} from "./vars-main";
import {OBACoreErrorFactory,OBACoreErrorFactoryConfig} from "./error-factory-main";
import {OBACoreEmitter,OBACoreEmitterConfig} from "./emitter-main";
import {OBACoreLogger,OBACoreLoggerConfig} from "./logger-main";
import {OBACoreDB,OBACoreDBConfig} from "./db-main";

export type OBACoreConfigObj = {
  vars:OBACoreVarsConfig;
  events:OBACoreEmitterConfig;
  logger:OBACoreLoggerConfig;
  errors:OBACoreErrorFactoryConfig;
  db:OBACoreDBConfig;
};
export type OBACoreObj<EV> = {
  config:OBACoreConfig;
  vars:OBACoreVars;
  events:OBACoreEmitter<EV>;
  logger:OBACoreLogger;
  db:OBACoreDB;
  e:OBACoreErrorFactory;
};
export type OBACoreConfig = Partial<OBACoreConfigObj>;
export type OBACoreType<EV> = Partial<OBACoreObj<EV>>;