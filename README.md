# My Cloud Resume Challenge Front-end Code

## Project to create and host my resume in the cloud

While looking for cloud training resources I found the <a href="https://cloudresumechallenge.dev/docs/the-challenge/" target="_blank">cloud resume challenge</a>. 
This is my code repository for the front-end code (HTML, CSS, and java script). I used VSCode to code the HTML/CSS with help from various tutorials I found online.

## Current workflow

* Changes synced from VSCode logged into Github
* Github Actions copies website files to an AWS S3 bucket which is setup to host static web sites

## Resume Properties

* Uses CSS grid for the page layout so it can be viewed in desktop and mobile
* Javascript increments and displys visitor count using API Gateway/Lamnda/DynamoDB (I needed a lot of help with javascript and admittedly not exactly sure how it works so I need to study it more)

## To-do

* Host this in Azure and GCP
* Add javascript to generate PDF copy of the resume
