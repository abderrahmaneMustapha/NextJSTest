## Get Started

### Prequesties

make sure you have:
- [Git](https://git-scm.com/)
- [Nodejs](https://nodejs.org/) version v16.18.0 or higher (we recommend using
  [nvm](https://github.com/nvm-sh/nvm))

### Run it locally

- Clone the repository:
```sh
git clone https://github.com/abderrahmaneMustapha/NextJSTest.git
```

- Make sure you are in the root of the repository
```sh
cd NextJSTest
```

- And then run
```
npm run dev
````

### Technical Choices

- [MaterialUI](https://mui.com/) it offers a set of ui tools that make the
  development faster and the code cleaner.

- I tried to follow the DRY principle as much as i could, for example i
  created a customized List component in the components, because this
  component was used in 3 pages.

- extensive usage of hooks to fetch data from the server and reduce the code
  in my components, and make the error handling process easier.
