# Serverless Lambda SNS Example

Example illustrating the flow:

Lambda (publisher) => SNS => Lambda (consumer)

## Setup

- Install Node 8.10 (latest runtime supported by AWS Lambda)

- Install serverless (tested against serverless v1.28.0)
````
$ npm i -g serverless 
````
- Install node modules
````
$ npm i 
````
- Initialize env variables file
````
$ touch env.yml 
````
- Run tests
````
$ npm test
````