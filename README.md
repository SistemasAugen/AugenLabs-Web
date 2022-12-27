# AugenLabs-Web
# Website with new augenlabs design

## Table of contents

- [Setup](#setup)
- [Commands](#commands)
- [Setup env variables](#setup-env-variables)
- [How to contribute](#how-to-contribute)
- [Docker](#docker)
- [Deployments](./DEPLOYMENTS.md)

## Setup

1. Install latest NodeJS LST (atm is v16.13.2) with [nvm](https://github.com/nvm-sh/nvm)
1. clone repo
1. install dependencies with `npm i`

## Commands

| command | description |
| --- | --- |
| `npm run start:dev` | Start website in dev environment |
| `npm run start` | Start website in prod environment, this requires to build first |
| `npm run build` | Build website |
| `npm run lint` | Verify linting |
| `npm run prettier` | Fix all TSX/TS/JSON to follow code-styling best practices |

## Setup env variables

Create a `.env` file with:

```shell
> touch .env.EXAMPLE .env
```

Modify it with your own values.

## How to contribute

1. You can use feature name to create your feature branch like `feature/add-button`.
1. Run `npm run prettier` and `npm run build`.
1. Create PR and wait for UI team to get reviews and approval.

## Docker

```shell
# build image
> docker build . -t augen/augenlabsdotcom
# create container with recently created image
> docker run --name augenlabsdotcom -d -p 80:3000 augen/augenlabsdotcom
```

Most probably there is already a `augenlabsdotcom` container running, stop it with `docker stop augenlabsdotcom && docker rm augenlabsdotcom`. Then just create the container again.

After all steps, we should have the new version in `143.198.131.61`
