# My Place

### By [Bryce Frazier](https://github.com/SiR-Frazier), [Kimberly Huynh](https://github.com/kihuynh), [Frank Ngo](https://github.com/FrankNgo), [Logan Tanous](https://github.com/logmannn)

## Description
An Angular application rendering a collaborative art space.

## User Stories
There will be two levels of user for this site: Administrator and Reader.

**User**
* A user can view the landing page, which is a real time display of the canvas where all users can participate in creating pixel drawings or drawing over current ones.

* A user is only able to contribute to the art space by creating an account
  * A user can create an account
  * A user can log in to their newly created account by either creating their new login with their email or their google login.

* A user can then place a pixels on the canvas.

**ADMIN**
* An Admin can view created accounts within database.

* An Admin can also place pixels on the canvas.

## Methodology and Comments

I began by trying to adapt the online store lesson from learnhowtoprogram.com and went on from there. In the process I rebuilt my logic from the ground up on more than one occasion. (I even found a bug in Angular where a reserved word as a part of a parameter name included in the constructor of an object renders the argument undefined.)

## Technologies Used

* HTML
* CSS
* Typescript/Javascript
* Node
* Angular
* Firebase
* Canvas

## Dependencies and plugins

**Dependencies**
* Webpack 4.0.1 (as my module bundler)
* Jasmine (for tests)
* Angular/ *

**Dev Dependencies**
* Webpack 4.0.1
* Webpack-cli 2.0.9
* Karma (for test running)
* ESLint (for linting my code, looking for dropped semi-colons and whatnot)
* Babel (to transpile my code)
* Bootstrap 4.0.0
* jQuery 3.3.1
* Popper.js 1.14.0
* tslint
* typescript

## Setup/Installation Requirements
* You can find the app online at: https://myplace-b54f2.firebaseapp.com/
**otherwise:**
* Download the project from the repository https://github.com/FrankNgo/place
* Install and initialize (init -y) Node (if it isn't already)
* Navigate to your root project directory
* Type "npm init" and run through the package.json file filling in details as needed
* Navigate to node_modules/.bin/ and type "jasmine init"
* Navigate back to the project's root directory

* Type "npm install dotenv-webpack --save-dev" to process environment variables (if you don't have Dotenv installed).
* Type "npm install typescript -g" (unless you already have Typescript installed)
* Type "npm install -g @angular/cli@1.6.5 --save" (unless you already have Angular installed)
  - If you're on a Mac and get an error: Type "brew upgrade node"
* Type "npm install angularfire2@4.0.0-rc.0 firebase@^3.6.6 --save" to add firebase if you don't have it.
  - The app's key will be provided in a separate file (OR YOU WILL HAVE TO GET YOUR OWN!).
* Add: ",
    "types": [ "firebase" ]" to the end of your tsconfig.json file if it's not in there.
* Type "npm install"
* Type "ng serve"
* Point your browser to localhost:4200

## Deployed Site Link

* https://myplace-b54f2.firebaseapp.com/login

## Known Bugs and Issues

There are no known bugs at this time.

## Support and contact details

* Bryce Frazier: bx.frazier@gmail.com
* Kimberly Huynh: kimberly.huynh@gmail.com
* Frank Ngo: frankngomusic@gmail.com
* Logan Tanous: logantanous@gmail.com

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
