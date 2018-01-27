# Angular 5 Universal Starter [![Universal Angular](https://img.shields.io/badge/universal-angular2-brightgreen.svg?style=flat)](https://github.com/angular/universal)
> Current Version 1.0.0

Angular 5 universal starter, Triadi Prabowo version from official Angular Universal Seed.

## Getting Started
* Clone repo from this URI
* run `npm install`
* Make sure you have Node.js >= 8.0, npm >= 5.5, typescript >= 2.4.2 (global)

---

### Features Added
* Optimization script using `gulp-gzip`
* Staging server config files, to make differences each environment
* Angular Material supported
* Docker supported
* Bootstrap added (local)
* jQuery 3+ added (local)
* Font-Awesome Added (local)

### Installation
* `npm install` or `yarn install`

### Development (Client-side only rendering)
* run `npm start` which will start `ng serve`

### Production (also for testing SSR/Pre-rendering locally)
**`npm run build:ssr && npm run serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

**`docker build . -t <image_name>`** - create docker image
**`docker run -dit -p 4000:4000 --name=<container_name> <image_name>`
** - create and run docker container, to deploy and run on `http://localhost:4000`
**`docker stop <container_name>`** - stop currently running docker container
**`docker start <container_name>`** - resume / starting service of selected container
**Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`

# Author
Triadi Prabowo

# License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
