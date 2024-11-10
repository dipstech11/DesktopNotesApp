import { contextBridge } from "electron";

if (!process.contextIsolated){
  throw new Error("contextisolation should be enabled")
}

try{
  contextBridge.exposeInMainWorld("context", {
    // TODO
  })

}catch(error){
  console.error("error", error)
}