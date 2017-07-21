# twilio-google-cloud-functions-burner


The Twilio blog had a [recent article](https://www.twilio.com/blog/2017/07/building-a-fully-featured-burner-phone-with-kotlin.html) on creating a burner phone service using Kotlin,
so you can give out a disposable number when need to register for services etc, without
giving out your primary personal number, to avoid spam calls and SMS.

The implementation used Kotlin, which has become my favourite language to use on the JVM.
and their example deployed to Heroku. In this case you would have a server, or droplet in Heroku speak,
running 24/7 to respond to the occasional Twilio callbacks.

This kind of low volume service is perfect to implement with a serverless architecture,
e.g. AWS Lambda or Google Cloud Functions. And with the free tier allowance you probably wont even have to pay a cent.

As the Google Cloud Platform is my cloud of choice, I'll show you how to implement the Twilio
burner phone server using Google Cloud Functions.




In package.json replace the YOUR_STAGING_BUCKET_NAME] tokens with the name of your staging Cloud Storage bucket.


Triggering the function

To make an HTTP request to your function, run the following command:

curl "https://[YOUR_REGION]-[YOUR_PROJECT_ID].cloudfunctions.net/helloGET"


For the update to date basic Cloud functions tutorial visit
https://cloud.google.com/functions/docs/tutorials/http
https://cloud.google.com/functions/docs/writing/http
https://cloud.google.com/functions/docs/calling/http

https://console.cloud.google.com/functions/list