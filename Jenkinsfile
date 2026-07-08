pipeline {
    // 'agent any' means this pipeline can run on any available Jenkins executor/server
    agent any 

    environment {
        // Define variables you'll use throughout the pipeline
        APP_NAME = "my-web-app"
        DEPLOY_ENV = "staging"
    }

    stages {
        stage('Fetch Code') {
            steps {
                echo 'Checking out code from Git Repository...'
                // Jenkins handles the git checkout automatically if configured via GUI,
                // but you can add explicit steps here if needed.
            }
        }

        stage('Install & Build') {
            steps {
                echo 'Installing dependencies and building the application...'
                // For a Node.js app, you'd run commands like this:
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running unit and integration tests...'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying application to the ${env.DEPLOY_ENV} environment..."
                // Example deployment command (e.g., copying files, triggering a script, Docker push)
                // sh 'scp -r ./build user@server:/var/www/html'
                echo 'Deployment successful!'
            }
        }
    }

    // Post actions run after the stages finish, depending on success or failure
    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs() // Deletes temporary build files to save disk space
        }
        success {
            echo 'Pipeline completed successfully! Sending notifications...'
        }
        failure {
            echo 'Pipeline failed! Check the logs above to see what broke.'
        }
    }
}