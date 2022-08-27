# create-path - promise version of mkdirp

A wrapper for mkdirp to also use it with npm init like:

```
npm init path ~/myProject
```

It is using npm:mkdirp under the hood and it is not usefull for anything else then using it with npm init in general you should always prefer

```
npx mkdirp ~/myProject
```

This only exists because of historical reasons where mkdirp was not Promisifyed and no npx existed. Today this is not needed anymore.
