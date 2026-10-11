import { createModuleFederationConfig } from "@module-federation/vite";

export default createModuleFederationConfig({
  name: "host_app",
  manifest: true,
  remotes: {
    remote_app: {
      // the key = the name you import from
      type: "module", // MUST be inside the object
      name: "remote_app", // same as the remote's own `name`
      entry: "http://localhost:5001/remoteEntry.js", // the actual URL
      entryGlobalName: "remote_app", // match the remote's name
      shareScope: "default",
    },
  },
   shared: {
    react: {
      singleton: true,
    },
    'react/': {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
});
