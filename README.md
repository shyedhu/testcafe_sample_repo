# testcafe_sample_repo

This is sample project for testcafe 


# Prerequisites

Ensure that Node.js (version 6 or newer) and npm are installed on your computer before running it:

```bash
npm install -g testcafe
```

# Install and Run

## Installation
**1.** Clone `testcafe_sample_repo-master`
```console
cd ~
git clone https://github.com/shyedhu/testcafe_sample_repo.git
cd testcafe_sample_repo-master
```


## Running the Test on local 
```console
testcafe chrome test/case1/sampleTest2.js
```

## Installation Docker Image
To install Docker to your system, see : https://docs.docker.com/install/

After Docker is installed, download the TestCafe Docker image from the repository.

docker pull testcafe/testcafe


## Running the Test on docker container
```console

docker run -v /testcafe_sample_repo-master/test:/test -it testcafe/testcafe 'chromium:headless --no-sandbox' /test/case1/sampleTest2.js


```
