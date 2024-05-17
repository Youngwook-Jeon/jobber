#!/bin/bash
cd volumes

echo "Starting the backing services of Jobber..."
docker-compose start
echo "Done"
echo "Sleeping for 15s"
sleep 15
cd ../services

server_dirs=("auth-service" "user-service")

for dir in "${server_dirs[@]}"; do
  echo "Starting the $dir"
  cd "$dir"
  npm run dev & 
  cd ..
done

echo "All servers started"