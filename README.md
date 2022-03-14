## Current Status

[![Build Status](http://yohark.de:8080/buildStatus/icon?job=sammy-lab-back)](http://yohark.de:8080/job/sammy-lab-back/)

# Backend of SammyLab

**SammyLab** is my personal blog and website project. 

I got the idea mid 2021 and started to build the site in early 2022 *on the free time of my free time*.

## The project
I chose the stack **NuxtJS + Strapi + Axios** to make everything up and running.

## Now the backend 
I believe Strapi is unbeatable at providing an open source fully free and customizable Headless CMS experience. 

When you're a single dev, knowing your stuff and just wanting to get a smart backend, this one is just made for you. With a lot of plugins and options, Strapi gave me everything I wanted to build my content creation and management interface.

### My Strapi configuration

- I took a strapi official blog template to save configuration time.
- I configured a postgres database.
- I added the AWS S3 plugin to plug the backend images storage to my AWS bucket.
- I switched from original text editor to the newest version of ckeditor.
- I enable the API documentation to be generated with swagger.
- I have the comments management plugin enable.
- The whole thing is running in a container on my VPS.

### How to run this project

**Disclaimer:** this is not a tutorial to create a Strapi application. 

Once you've cloned the project on your device make sure to follow these quick and easy steps:

1. run the `npm install` command
2. adapt the *config* folder to your needs (database, images management, server port). Take care: I couldn't run the server on my 1337 port (default Strapi port) so had to changed it to 1338. 
3. Once you've done all that, you can run the `npm run dev` command.

