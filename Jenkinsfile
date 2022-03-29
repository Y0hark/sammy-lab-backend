pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                echo 'Retrieving dependencies..'
				sh 'npm install'
                echo 'Installation completed successfully.'
            }
        }
        stage('Build') {
            steps {
                echo 'Building project..'
				sh 'npm run build'
                echo 'Build completed successfully.'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
				echo 'No tests implemented yet: skipping tests.'
            }
        }
        stage('Docker image') {
            steps {
                echo 'Building docker image..'
				echo 'building new image'
				sh 'docker build -t strapi-sammy-lab .'
				echo 'Image built successfully.'
				echo 'Removing outdated container...'
				sh 'docker rm -f container strapi-sammy-lab'
				echo 'starting new container'
				sh 'docker run -d --name strapi-sammy-lab --net nginx-proxy -e VIRTUAL_HOST=strapisammy.yohark.de strapi-sammy-lab:latest'
            }
        }
    }
}