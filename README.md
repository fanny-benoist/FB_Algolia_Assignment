## Table of contents
* [General info](#general-info)
* [Contents](#Contents)
* [Setup](#setup)

## General info
This folder contains all code files associated with the Part 1 & Part 2.

**Assignment:**   
> • Choose a dataset, either from our list of public datasets (https://github.com/algolia/datasets), or you can go ahead and use your own from a different source if you’d like!
>
> • Create an Algolia account and index the data (https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/). You can do so via the API or dashboard, whichever you prefer.
>
> • Configure the basic relevance settings (https://www.algolia.com/doc/guides/getting-started/how-algolia-works/in-depth/implementation-process/) for the data (again, using the dashboard or API).
>
> • Build out a basic search user interface, taking care to ensure for a good user experience. Use this as an opportunity to be as creative as you would like! Feel free to use one of our InstantSearch libraries if these will ease your development.
>
> • Add your code to a publicly accessible Github repo and then publish it using Github’s gh-pages so we can interact with it.
>
> • Give Algolia admins access (https://www.algolia.com/users/sign_in) to your data so we can view your relevance settings.
> • Write up a few paragraphs outlining your project, what you intended to accomplish, and any feedback for Algolia you have and add these to a README.



I created an app that calls Algolia search librairy to search for a person in a contact database. 
Each records contains the attributes:
- Last Name
- First Name
- Company
- Address
- City
- State
- ZIP
- County
- Email
- Phone
- Fax
- Web

You can search for a last name, a first name or a company.
To help you get result faster, you can facet per company, state, county or followers depending on what you'r looking for.

I created the index-configuration.js so that the index can be configure automatically while runn this js file, instead of having to configure manually on the dashboard. In this way, I assure the search experience will work as expected.

You will notice that the front-end isn't perfectly finish. I would have required extra time to finish it. For inst

But right now, you can try to search for your name, maybe you will get a result, who knows ? ;)

## Contents
- index-configuration.js: (To run)
    This file allows you to create a new Index in your dashboard with correct configurations
  - Initialize client
  - Push Data 
  - Configure


- contact_dataset.json:
  - List of records       

- Search UI: 
    - index.html: front-end search using InstantSearch.js
    - .src_search_ui/app.js: create widgets
    - .src_search_ui/app.css: style front-end

- Customer Questions:
    - Contains answers of Customer questions


## Setup
To run this project:    
- install the git repository locally   
- replace App ID, Admin API Key and SearchOnly API Key on index-configuration.js and app.js
- run index-configuration.js
 ```
    node index-configuration.js
 ```
 
- open index.html for search for a new contact