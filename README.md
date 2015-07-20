# PairmiscuousAPI

Node/Express API built to communicate with a MondoDB database and accept requests from an Ember front-end.  This API is part of the Pairmiscuous project. 

This app is a currently unfinished. Pairmiscuous is a team project originally built in rails, which I attempted to rebuild with an Ember front end and a Node/Express API.  The front end can be found here: https://github.com/MollieS/PairmiscuousEmber

Pairmiscuous is an app that we built in order to help students at Makers Academy find pair partners. It should automatically generate a pair partner for the user, so to reduce the awkwardness of asking a fellow cohort member to pair and ensure that everyone is always paired.

User stories
-----

basic user stories:

```
As a maker
I want to be paired with someone
So that I can learn faster

As a bewildered maker
I want to see a list of everyone in my cohort
So that I know who these weird people are

As a promiscuous maker
I want to see a sorted list of people in my cohort that I have/have not paired with
So that I can keep pairing with more people

As a shy maker  
I want a pair partner to be randomly assigned to me  
So that I don’t have to ask them 

```

further user stories:

```
As a security-conscious maker
I want to be able to log in with a password
So that nobody can see my lists

As a lazy security-conscious maker
I want to sign in through github
So that I don't have to remember another password

As a curious maker
I want to see other students' github commit history
So that I can compare my progress to theirs

As a maker with many commits
I want to be preferentially paired with someone who has fewer commits
So that I can accelerate our learning by pairing together

```

To Do
-----

* As I have only had a day to work on this project, I have only completed the basic setup for the API.  Currently it accepts get requests from the front end, but is ready to accept post and patch requests also.
* I hope to be able to get at least the basic user stories working in the future.
* I am yet to test the backend, as, so far, this has been an experiment with Ember, I wanted to get the API working as fast as I could.  I hope to be able to go back and test what I have already written before expanding the API.

Installation
-----

* git clone https://github.com/MollieS/PairmiscuousAPI.git
* change into the new directory
* npm install

How to run
-----

* ensure you are serving mongodb by using `mongod`
* in a seperate window run `node app.js` to serve the API



