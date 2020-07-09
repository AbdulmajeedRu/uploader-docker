## Start with
`docker build . -t react-jeej`

-t is for the image tag

### Then
`docker run -dt -p 3000:3000 react-jeej`

This runs a container on port 3000

### After confirming that the container is running, open your browser and go to [localhost:3000](http://localhost:3000)