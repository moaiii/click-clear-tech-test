# Technical Test

by Christopher Melville

# Quick start

- From root run `npm run setup` to install all modules for project
- From root run `npm start`. Both api and client will run one concurrent process

# API

- Written in ExpressJS
- `/tracks` returns results by fuzzy search
- `/` returns all tracks

# Client

- Utilizes React 16 (Hooks) with Typescript
- Semantic UI component library used
- One test with React Testing Library
- multi env variables stored in `.env` file

# Testing

- tests can be run in each project with the following commands
- - `cd api/; npm run test`
- - `cd client/; npm run test`