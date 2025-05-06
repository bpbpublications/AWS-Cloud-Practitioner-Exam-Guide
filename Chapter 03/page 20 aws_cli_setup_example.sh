#!/bin/bash

# setup AWS CLI:

# for macos
brew install awscli

# for ubuntu linux: 
sudo apt-get install awscli


# configure AWS CLI:
aws configure


# check if configuration of AWS CLI is working for yuor system:
aws s3 ls
