#!/bin/bash

echo "Stopping Node.js processes..."
killall node

echo "Stopping Docker containers..."
cd volumes
docker-compose stop

echo "All services stopped and cleaned up."