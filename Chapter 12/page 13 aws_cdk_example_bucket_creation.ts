import { Bucket } from '@aws-cdk/aws-s3';
import { Stack, App, RemovalPolicy } from '@aws-cdk/core';

const app = new App();
const stack = new Stack(app, 'MyStack');

new Bucket(stack, 'MyBucket', {
 versioned: true,
 removalPolicy: RemovalPolicy.DESTROY,
});
