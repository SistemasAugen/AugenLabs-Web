# Deployments

We use DigitalOcean infrastructure for deployments. At this moment is manually and we are using Droplets with Docker(Ubuntu 20.04) images.

## Deployment steps

1. Login to DigitalOcean
    * Login to DigitalOcean dashboard using `sistemasweb@augenopticos.com` email.
1. Select project
    * Select `augenopticos-com` project and click on `docker-ubuntu-s-1vcpu-1gb-sfo3-01` droplet. 
    * In the left sidebar you will see the `Access` menu and in the very top of that page you can log in directly to the console by clicking in `Launch Droplet Console`.

1. Update code and Deploy
    * Normally, we will have a `projects` folder and we will be using the default `root` user.
    * cd into `projects` with `cd projects/augenopticos.com` and pull latest changes with `git pull`. 
    * Now, recreate the docker image and run a docker container with the following commands:

```shell
# build image
> docker build . -t augen/augenopticosdotcom
# create container with recently created image
> docker run --name augenopticosdotcom -d -p 80:3000 augen/augenopticosdotcom
```

Most probably there is already a `augenopticosdotcom` container running, stop it with `docker stop augenopticosdotcom && docker rm augenopticosdotcom`. Then just create the container again.

After all steps, we should have the new version in `augenopticos.com` and `143.198.131.61`