import config from "config";
import OBA,{ DeepPartial } from "@onebro/oba-common";
import { OBACoreConfig } from "./core-main";

const setDefaultConfigWithEnvironment = (prefix:string):OBACoreConfig => {
  const env = process.env.NODE_ENV.toLocaleUpperCase();
  const name = OBA.envvar(prefix,"_NAME");
  const mode = OBA.envvar(prefix,"_MODE");
  let uri = "_MONGODB";
  switch(true){
    case env === "production":
    case (/live-db/.test(env)):uri += "_PROD";break;
    default:uri += "_LOCAL";break;
  }
  const dbs =  {[name]:OBA.envvar(prefix,uri)};
  const initial:OBACoreConfig = config.get("appconfig");
  const atRuntime:DeepPartial<OBACoreConfig> = {
    vars:{name,env,mode,verbose:false},
    logger:{label:name},
    db:{connections:dbs},
  };
  const coreConfig = OBA.merge(initial,atRuntime) as OBACoreConfig;
  return coreConfig;
};
export {setDefaultConfigWithEnvironment as coreConfig};