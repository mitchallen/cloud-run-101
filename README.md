cloud-run-101
==
A Google Cloud Run starter project
--

This package was created as a gloud run demo.

## Installation

    $ git clone https://github.com/mitchallen/cloud-run-101.git
  
* * *

## Create a Google Cloud Platform account

* https://cloud.google.com

* * *

## Note about billing

Please note that this demo shows how to use services that Google will bill you for.  New users are given a credit and some services are offered for free, below a minimal use.

Be sure to keep an eye on billing and delete test resources when no longer needed.

See: https://console.cloud.google.com/billing

* * *

## Create a GCP (Google Cloud Platform) project

* https://cloud.google.com

## Install the gcloud CLI (command line interface)

### Mac OS

```
brew cask install google-cloud-sdk
```

* * *

## Initialize a project

```
gcloud init
```

* * *

## Initialize Beta components

At the time of this writing, Cloud Run is still in Beta

```
gcloud components install beta
gcloud components update
```

* * *

## Set the region

For example, I chose __us-central1__.

```
gcloud config set run/region us-central1
```

* * *

## Create the Docker image in GCP

Substitute __PROJECT-ID__ with your current gcloud project id:

```
gcloud builds submit --tag gcr.io/PROJECT-ID/hello
```

Select Y, if you get a warning like this:

```
API [cloudbuild.googleapis.com] not enabled on project [############].
 Would you like to enable and retry (this will take a few minutes)? 
(y/N)?
```

If you forgot your project ID:

```
gcloud projects list
```

To see and manage the container image, browse to:

* https://console.cloud.google.com/gcr

* * *

## Deploy to Cloud Run

While Cloud Run is in Beta, you will need to run it as as beta component below:

Substitute __PROJECT-ID__ with your current gcloud project id:

```
gcloud beta run deploy hello-web --image gcr.io/PROJECT-ID/hello
```

You should see a menu like this:

```
Please choose a target platform:
 [1] Cloud Run (fully managed)
 [2] Cloud Run for Anthos deployed on GKE
 [3] Cloud Run for Anthos deployed on VMware
 [4] cancel
Please enter your numeric choice:
```

To keep things simple, just select: __1__.

The other options would require additional setup.

You may then see a message like this:

```
To specify the platform yourself, pass `--platform managed`. Or, to make this the default target platform, run `gcloud config set run/platform managed`.
```

That's tell you that for in the future you could skip the menu either with a command line or config setting (helpful when running via scripts, etc.)

Assuming you don't care if anyone runs your app (as in making it public):

```
Allow unauthenticated invocations to [hello-web] (y/N)?
```

If you are concerned about billing, no one will know the URL address if you don't publicly post it anywhere.  And you can immediately kill the service when done testing to avoid any unauthorized access or billing.

The command line will then give you the URL of your app, with a message like this (with your own unique URL):

```
Service [hello-web] revision [hello-web-abcd] has been deployed and is serving 100 percent of traffic at https://hello-web-SOMETHING-RANDOM-ID.a.run.app
```

Copy the URL and paste the address into a browser or use `curl`.

## See the service in the console

To see and manage the service in the Google Cloud Platform console, browse to:

* https://console.cloud.google.com/run

* * *

## Cleanup

To save money you should consider taking down private and test resources when not in use.  To use them again, be sure to document how to recreate them.

Visit the following console pages to delete test resources:

* https://console.cloud.google.com/run
* https://console.cloud.google.com/gcr

To monitor billing:

* https://console.cloud.google.com/billing

* * * 

## References

* https://console.cloud.google.com
* https://cloud.google.com/run/docs/tutorials/system-packages#follow-cloud-run
* https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/run/system-package
