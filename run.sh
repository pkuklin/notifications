# Build display-screen app
docker build -f display-screen/Dockerfile.dev -t display-screen .
docker run -d -p 3002:3002 display-screen

# Build sending-screen app
docker build -f sending-screen/Dockerfile.dev -t sending-screen .
docker run -d -p 3001:3001 sending-screen

# # Build server app
docker build -f server/Dockerfile.dev -t server .
docker run -d -p 3000:3000 server

#verify that the containers are running
docker ps