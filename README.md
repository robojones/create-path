# create-path - create paths asynchronous

## Installation
```
npm install create-path --save
```

## Example
Lets pretend the path `/pathToExample/hello/frank` exists

```
const createPath = require('createPath');

createPath('/pathToExample', 'hello/world')
.then((p) => {
    console.log(`the path ${p} exists now`);
})
.catch((err) => {
    //there will be no error, if the path already exists partitially or completely
    console.error('critical error', err);
})

```

## Specification

### Arguments

1. Working directory
2. Path to create within the working directory

### Returns

Promise
