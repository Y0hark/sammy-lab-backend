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
		stage('SonarQube analysis') {
			steps {
				echo 'Running SonarQube analysis..'
				withSonarQubeEnv('sq-main') { 
					sh "/home/yohark/utils/sonarscanner/sonar-scanner-4.7.0.2747-linux/bin/sonar-scanner"
				}
				echo 'SonarQube analysis completed successfully.'
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
				sh 'docker run -d --name strapi-sammy-lab -p 1338:1337 strapi-sammy-lab:latest'
            }
        }
    }
}