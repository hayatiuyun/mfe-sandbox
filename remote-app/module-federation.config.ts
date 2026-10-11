import { createModuleFederationConfig } from "@module-federation/vite";

export default createModuleFederationConfig({
  name: "remote_app",
  filename: "remoteEntry.js",
  manifest: true,
  exposes: {
    "./Button": "./src/components/Button",
    "./Header": "./src/components/Header",
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
