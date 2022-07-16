This is a personal project for Ajaib's Web Engineer Test .

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Next, unit testing with Jest:

```bash
npm run test
```

## Method and Results

I try to implement 2 types of general pagination methods : Client side pagination and server side pagination, based on my experience using [JQuery Datatables](https://datatables.net/) or [Ext JS](https://www.sencha.com/products/extjs/).

## Directory Structure

Based on Next.js Framework, I personally try to take a simple approach, keep things separated basically in a class model/view style. We will be using three primary folders similar to mvc architecture:

- component - The individual UI components that make up the app will live in here
- lib - Models & API logic will live in here.
- pages - Will be the actual routes/pages as per the required Next.js structure.

```
component/
├─ header/
├─ filter/
├─ table/
├─ footer/
lib/
├─ apis/
├─ models/
pages/
├─ api/
├─ index.js
public/
styles/
├─ globals.css
tests/
jest.config.js
next.config.js
package.json
```

## Frameworks & Libraries

To learn more about Frameworks & Libraries used in this project, take a look at the following resources:

- [Next.js](https://nextjs.org/) - The React Framework for Production.
- [React Data Table Component](https://www.npmjs.com/package/react-data-table-component) - A simple table component with awesome features.
- [React Bootstrap](https://react-bootstrap.github.io) - The most popular front-end framework Rebuilt for React.
- [Jest.io](https://jestjs.io/) - A delightful JavaScript Testing Framework with a focus on simplicity.

## Demo on Vercel

[Demo App](https://david-ajaib-test.vercel.app/) avalilable on Vercel

## What's Next ?

For a better web performance using Next.js we can refer to this [official recommendation](https://nextjs.org/docs/going-to-production).

Happy Coding! 😋🖥️
