# Igloo tech challenge

### Income tax calculator (backend)

My attempt to complete my first ever technical interview challenge; a Node.js + Express backend for a UK Income Tax calculator.

The instructions for this 3 hour challenge were to create either a frontend or backend app that should take an input of a user's gross salary, and apply the UK 2020 tax bands in order to provide them with a split of how much they will be taxed on their salary, outputting their net salary (pre-National Insurance contributions) as a result.

#### Setup

After cloning this repo to your local machine, you'll need to install the packages using node by running `npm install`.

Use the node command `npm start` to get the server up and running.

A request to calculate a gross salary can be sent to the root (/) endpoint, using either the REST method (accessible in _at least_ VSCode) or similar (e.g. Postman). The app expects the request body to contain `grossSalary: Number`.

#### Notes

The app has unit tests (Jest & Supertest) which can be run with with node `npm run test`.
