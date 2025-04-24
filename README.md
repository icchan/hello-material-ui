# This is my first Material UI React application

## Why?

I am using this hello world to demonstrate how to use Azure OpenAI to review a pull request.

## Getting started
The quick way to get started is to 
1. copy the `.github/workflows/code-review.yml`
1. create an environment in your github settings named `OpenAI_Intelligent_DevOps`
1. populate `AZURE_OPENAI_API_KEY` and `AZURE_OPENAI_ENDPOINT` in that enviroment's secrets
1. create a variable in the environment named `AZURE_OPENAI_DEPLOYMENT` and set it to your model deployment. At this time `o1` models do not work as it does not support `system` messages (can be fixed by replacing the system prompt)
1. create a pull request
1. wait for the review to be completed
1. check the review comments


