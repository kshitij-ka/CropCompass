# Base image
FROM node:22

# Metadata
LABEL maintainer="kshitijka"
LABEL version=1.1.0
LABEL description="Crop Compass is a centralized management dashboard designed for farmers, enabling them to efficiently oversee their farms while leveraging advanced AI technology for disease identification and more."

# Update and upgrade
RUN apt update && apt upgrade -y && \
    apt clean all && \
    rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN useradd -s /bin/bash nonroot

# Create working directory
RUN mkdir -p /app
RUN chown -R nonroot:nonroot /app
WORKDIR /app
COPY dist/ .

# Install server
RUN npm install -g serve

# Switch user
USER nonroot

# Expose frontend port
EXPOSE 3000

# Run frontend
CMD ["serve", "-s", "/app"]
