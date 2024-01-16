# Running the MealMatters Application with Docker Compose

This guide will help you set up and run the MealMatters application using Docker and Docker Compose. It includes instructions for installing Docker on various operating systems, setting up the project, and running the application.

## Installing Docker

### Linux

1. **Update your package index:**
   ```bash
   sudo apt-get update
   ```
2. **Install Docker:**
   ```bash
   sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```
3. **Verify the installation:**
   ```bash
   sudo docker run hello-world
   ```

   For detailed instructions, visit the [Docker installation guide for Linux](https://docs.docker.com/engine/install/ubuntu/).

### Windows

1. **Download Docker Desktop for Windows** from the [official Docker website](https://docs.docker.com/docker-for-windows/install/).
2. **Run the installer** and follow the instructions.
3. **Start Docker Desktop** from your applications or programs menu.

### macOS

1. **Download Docker Desktop for Mac** from the [official Docker website](https://docs.docker.com/docker-for-mac/install/).
2. **Open the downloaded file** and drag the Docker icon to your Applications folder.
3. **Start Docker Desktop** from your Applications folder.

### Docker Compose

Docker Compose should be automatically installed with Docker Desktop for Windows and macOS. For Linux, follow the instructions at [Install Docker Compose](https://docs.docker.com/compose/install/).

## Project Structure

Ensure your project directory is structured as follows:

```
MealMatters/
│
├── client/                   # Frontend source files
│   ├── (frontend files)
│   └── package.json
│
├── server/                   # Backend source files
│   ├── (backend files)
│   └── package.json
│
├── Dockerfile-frontend       # Dockerfile for the frontend
├── Dockerfile-backend        # Dockerfile for the backend
├── docker-compose.yml        # Docker Compose file
└── startup.sh                # Startup script for the backend
```

## Dockerfiles and Docker Compose File

Set up `Dockerfile-frontend`, `Dockerfile-backend`, `docker-compose.yml`, and `startup.sh` as previously outlined.

## Running the Application

1. **Build and Run with Docker Compose:**
   In your project's root directory, run:

   ```bash
   docker-compose up --build
   ```
2. **Accessing the Application:**
   - The frontend is available at `http://localhost:5173`.
   - The backend API is at `http://localhost:5000`.

3. **Stopping the Application:**
   To stop, press `Ctrl+C`. To remove containers, run:

   ```bash
   docker-compose down
   ```

## Additional Notes

- **JWT Secret:** Generated dynamically by `startup.sh` on each container start. Previous JWT tokens become invalid after each restart

.
- **Data Persistence:** MongoDB data persists in a Docker volume as defined in `docker-compose.yml`.
- **Security:** Handle sensitive information carefully, especially in production.

## Conclusion

This guide provides a comprehensive overview of setting up and running the MealMatters application using Docker and Docker Compose. For more information or troubleshooting, refer to the [Docker documentation](https://docs.docker.com/).