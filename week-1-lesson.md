## Why I switched from @originjs/vite-plugin-federation to @module-federation/vite

@originjs/vite-plugin-federation is a legacy library for dev that is struggle with newer Vite version and Typescript version standard. Since it's old/legacy library then I just switch to the newer version which is more stable I guess

## What the “remote is not connected” error actually meant and how I fixed it

I encounter error "remote is not connected" during testing, it's because I misconfigure the remote object in module-federation config. I manage to fix it to update the remote entry url, and add type module, name, etc.

## What shared with singleton: true does for React

shared with singleton config for React in module-federation is to ensure both application consume the same React. Two react in one page is a undefined behaviour which is will causing Uncaught error, hooks error, etc

## Why the tutorial looks like both remote & host is in one repo? I thought it's should independent. but if it's in different repo how they share the react

“Module Federation shares dependencies at runtime through a browser-side registry, not at build time. Each app bundles its own fallback copy, but the first one to load registers in the global MF runtime, and later apps use that instance instead. Repo boundaries are irrelevant — the shared contract is the version range in the shared config, which both apps agree on independently.”