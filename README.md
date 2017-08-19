# AdonisJs Phone Book Application

This repository was created for simple AdonisJs Application.

# Install Adonis CLI

Maybe you need Adonis CLI for ace

```bash
$ npm i -g adonis-cli
```

# Run

```bash
$ npm install
$ npm run serve:dev
```

# Database

You must set database variables in the `.env` file. Simple `.env` settings should be like this.

```nginx
HOST=localhost
PORT=3333
APP_KEY=YOUR_APP_KEY
NODE_ENV=development
CACHE_VIEWS=false
SESSION_DRIVER=cookie
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=phonebook
```

# Migration

```bash
$ ./ace migration:run
```
