# models/ 

This directory holds code for AI model used for disease detection in crops.

---

## Requirements

- `${FRONTEND_URI}` is used in [server.js](./server.js). This should be passed when creating the Docker container as an environment variable.
- `${FRONTEND_URI}` is essentially the URI where the frontend is hosted.

## Docker Run

It is recommended that you use the [docker-compose.yaml](../docker-compose.yaml) file which creates all the required containers, however if you wish to run only the "models" part of this project in Docker run the following docker command.

```shell
docker run -tid \
  --name cropcompass-model \
  --restart always \
  -p "8081:8081" \
  -e "FRONTEND_URI=<frontend_uri>" \
  kshitijka/cropcompass-model:<version>
```

> [!NOTE]
> Replace `<frontend_uri>` with the actual frontend URI such as http://localhost:3000 & `<version>` with an actual version number such as `1.1.0`.

## Manual Run

To run only the "models" part of this project, you will have to create a python virtual environement, followed by installing all the dependencies and then running the [server.js](./server.js) file using node.

1. Install required packages (for Debian based systems):

```shell
sudo apt install python3 python3-pip python3.11-venv
```

2. Create a virtual environment:

```shell
python3 -m venv .
```

> [!NOTE]
> Assuming you're in the `models/` directory.

3. Install required packages using `pip`:

```shell
pip install -r requirements.txt
```

4. Run [server.js](./server.js):

```shell
node server.js
```

> [!NOTE]
> Assuming you already have `node` installed on your system.

---
