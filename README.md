# Project API 10

-   se agrega [] en vite.config
    base: "https://slinkter.github.io/myprojectapi0x",
-   se instala paquete de github
    npm i --save-dev gh-pages
-   ir a package.json predeply y deploy

```javascript
"scripts": {
"dev": "vite",
"build": "vite build",
"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
"preview": "vite preview",
"predeploy":"npm run build",
"deploy" : "gh-pages -d dist"
},

```

-   y ejecutar en terminal

npm run deploy

##

![alt text](./api10.png)

https://github.dev/sangammukherjee/shopping-cart-25-reactjs-interview-projects

https://fakestoreapi.com/
