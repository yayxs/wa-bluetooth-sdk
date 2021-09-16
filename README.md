## Generate different environments

### Browser

> iife

```bash
npx rollup main.js --file bundle.js --format iife
```

### Node.js

> cjs
> // import the entire utils object with CommonJS
> const utils = require('./utils');

```bash
npx rollup main.js --file bundle.js --format cjs
```

### Browser and Node.js

```bash
npx rollup main.js --file bundle.js --format umd --name "myBundle"
```

### publish esm
