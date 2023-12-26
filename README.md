## Project Setup

1) run server (proxy)

cd server
```sh
npm install // once
DEBUG=myapp:* npm start
```

2) run front-end
cd ../
```sh
npm install // once
npm run dev 
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
