## Running locally

Clone repository and then run:

```bash
$ docker-compose -f local.yml up
```

### How to

#### Run tests

```bash
$ docker-compose -f local.yml run --rm web sh ./ci
```

#### Run remote debugger

```bash
$ docker-compose -f local.yml -f local.debug.yml up
```

#### Re-create database

```bash
$ docker-compose -f local.yml run --rm web python manage.py reset_db
$ docker-compose -f local.yml run --rm web python manage.py migrate
```

#### Create superuser

```bash
$ docker-compose -f local.yml run --rm web python manage.py createsuperuser
```
