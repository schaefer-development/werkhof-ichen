# Usage

Source code of website [werkhof-ichen.de](werkhof-ichen.de).

## Docker setup

The `docker-compose.yml` configuration in this repository is supposed to provide
a close-to-production installation.

Run:
```
docker-compose up
```

### Restore database backup

Run:
```bash
$ docker-compose down -v
# followed by
$ docker-compose up

# open another terminal and run:
$ cat backups/<DUMP> | docker-compose exec -T db pg_restore -c -U <POSTGRES_USER> -d postgres
```
