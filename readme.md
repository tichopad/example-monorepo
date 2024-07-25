# example-monorepo

This is an example of a Javascript monorepo using [pnpm](https://pnpm.io/) and [Turborepo](https://turbo.build/repo/docs/getting-started).

## Getting Started

1. Install the dependencies - ```pnpm install```
2. Run the development server - ```pnpm run dev```
3. Run linter - ```pnpm run lint```
4. Run the tests - ```pnpm run test```
5. ???
6. Profit! 🎊

## Project Structure

The project is structured as follows:

```
├── apps
│   ├── rest-api
│   └── web-react
├── libs
│   └── utilities
├── packages
│   └── fancy-button
└── readme.md
```

- `apps`: Applications (e.g. web app, REST API, etc.).
- `components`: Front-end components.
- `configs`: Configuration files.
- `libs`: Helpers, utilities, misc.
