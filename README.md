# My Cloud Resume Challenge Front-end Code

## A project to host my resume online and learn more about cloud technologies

This is my repository for the front-end code built as part of the <a href="https://cloudresumechallenge.dev/docs/the-challenge/" target="_blank">Cloud Resume Challenge</a>. I used VS Code to write the HTML/CSS/JavaScript with help from various tutorials I found online.

## Current workflow

* VS Code connected via remote-ssh to a redhat VM I am using to learn enterprise linux
* Changes pushed from VS Code to this GitHub repo
* GitHub Actions copies website files to an AWS S3 bucket which is setup to host static web sites

## Resume Properties

* Uses CSS grid for the page layout so it can be comfortably viewed in desktop or mobile browsers
* Javascript increments and displays visitor count using API Gateway/Lambda/DynamoDB (I needed a lot of help with javascript and admittedly not exactly sure how it works so I need to study it more)

## To-do

* Host this in Azure and GCP
* Add javascript to generate PDF copy of the resume
