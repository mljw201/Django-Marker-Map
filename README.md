# Django-Marker-Map
# Setup

```bash
pip install django
```

```
pip install psycopg2-binary
```

```
pip install django-filter
```

```
pip install djangorestframework
```

```
pip install djangorestframework-gis
```

Download and Install 'GDAL'

Download and Install 'PostgreSQL' - https://www.postgresql.org/
 - after installation, remember your password and use the StackBuilder to download the PostGIS Extension

add the filepath to the PostgreSQL bin folder to system environment variables if necessary (PATH)

```
psql -U postgres
```

(input password)

```
CREATE DATABASE mapdatabase WITH ENCODING 'UTF8' LC_COLLATE='English_United Kingdom' LC_CTYPE='English_United Kingdom';
```

```
\c mapdatabase
```

```
CREATE EXTENSION postgis;
```


make sure to add the correct port, name, database name, host, password etc. to the setting.py file

```
python3 manage.py makemigrations
```

```
python3 manage.py migrate
```

```
python3 manage.py runserver
```
