# create-path

runs `npx mkdirp <path>` when you write `npm init path <path>`.
**This only exists out of historical reasons** where mkdirp was not promisified and no npx existed.
Today this is not needed anymore.
It only protects the create-path namespace on npmjs with a useful package wrapper.

A wrapper for mkdirp to also use it with npm init like:

```
npm init path ~/myProject
```

It is using `npm:mkdirp` under the hood, and it is not useful for anything other than using it with `npm init`.
Generally, you should always prefer

```
npx mkdirp ~/myProject
```

This only exists because of historical reasons where mkdirp was not promisified and no npx existed. Today this is not
needed anymore.
