sudo docker-compose -f docker-compose.yml -f docker-compose-test.yml build && docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --force-recreate mongo
