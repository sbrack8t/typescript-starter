# typescript-starter

Originally created as a starter repository for the exercises in Lesson 4 of [Beginner JavaScript Training](http://developing.ninja/beginner-javascript-training/).

## Dependencies

*  [Node.js](https://nodejs.org/) >=4.2.0

## Installation

1.  Fork this repository by clicking on the "Fork" link near the top-right.
2.  Clone down your fork of the repository:
    ```sh
    git clone git@github.com:YOUR-USERNAME/typescript-starter.git
    ```
3.  Install Node.js packages using npm or [yarn](https://yarnpkg.com/):
    ```sh
    npm install
    
    # Or, if you have yarn:
    yarn install
    ```

## Usage

Source files should go in the "src" directory. This is where the TypeScript compiler has been set up to look for files to compile.

Files will be compiled into the "public" directory, using CommonJS modules. This will run in Node.js (webpack/Browserify support will be added in a future version).

To compile the code:
```sh
npm run build
```

To compile (and then execute) the code:
```sh
npm start
```
