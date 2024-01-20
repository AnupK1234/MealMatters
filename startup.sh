#!/bin/bash

# Generate a new JWT secret
export JWT_SECRET=$(openssl rand -base64 32)

# Start the Node.js application
npm start