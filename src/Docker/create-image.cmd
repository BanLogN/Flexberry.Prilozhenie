docker build --no-cache -f SQL\Dockerfile.PostgreSql -t prilozhenie/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t prilozhenie/app ../..
