# Base image
FROM node:22

# Metadata
LABEL maintainer="kshitijka"
LABEL version=1.1.0
LABEL description="Crop Compass is a centralized management dashboard designed for farmers, enabling them to efficiently oversee their farms while leveraging advanced AI technology for disease identification and more."

# Update, upgrade + install python3+req
RUN apt update && apt upgrade -y && \
    apt install -y python3 python3-pip python3.11-venv && \
    apt clean all && rm -rf /var/lib/apt/lists/*

# Create working directory
RUN mkdir -p /app /app/public/images/
WORKDIR /app
COPY . .

# Installing npm packages
RUN npm install

# Setup virtual env and install stuff
RUN pip3 install --break-system-packages -r requirements.txt

# Expose model port
EXPOSE 8081

# Run model
CMD ["node", "server.js"]
