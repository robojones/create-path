# create-path
runs npx mkdirp \<path\> when you write npm init path \<path\>. This only exists because of historical reasons where mkdirp was not Promisifyed and no npx existed. Today this is not needed anymore. Today it only Protects the create-path namespace on npmjs with a usefull package wrapper.

A wrapper for mkdirp to also use it with npm init like:

```
npm init path ~/myProject
```

It is using npm:mkdirp under the hood and it is not usefull for anything else then using it with npm init in general you should always prefer

```
npx mkdirp ~/myProject
```

This only exists because of historical reasons where mkdirp was not Promisifyed and no npx existed. Today this is not needed anymore.
