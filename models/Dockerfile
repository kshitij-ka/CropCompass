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

# Create non-root user
RUN useradd -s /bin/bash nonroot

# Create working directory
RUN mkdir -p /app
RUN chown -R nonroot:nonroot /app
WORKDIR /app
COPY . .

# Switch user
USER nonroot

# Setup virtual env and install stuff
RUN python3 -m venv /app
RUN /app/bin/pip install --no-cache-dir -r requirements.txt
ENV PATH="/app/bin:$PATH"

# Expose model port
EXPOSE 8081

# Run model
CMD ["node", "server.js"]
