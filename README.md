# Week7-DEKN 

API link: [click here](https://travel--jar.herokuapp.com/)

## Theme
Travel stories

## Installation Locally
1. Clone this repo
2. Run `npm install`
3. Create local database using the `init.sql` located in the database folder
4. Create `.env` file with the DATABASE_URL, JWT_SECRET, TEST_DATABASE_URL

## Running tests
1. Complete steps 1-4 in Installation Locally
2. Create test database 
3. Run `npm test`

## User Stories
- [x] As an API user, I want to: get a list of all available resources
- [ ] As an API user, I want to: get all the information on a specific resource
- [x] As an API user, I want to: create a new resource
- [ ] As an API user, I want to: update an existing resource
- [ ] As an API user, I want to: delete an existing resource
- [ ] As an API user, I want to: only be able to change an existing resource if I am authenticated to do so


## User Journey
1. Users have to log in to post
2. Anyone can see the posts
3. Only users can delete their posts
4. Anyone can view posts of a particular place

## Backend Stories

<details>
<summary>Routes</summary>

- [x] Route to show all posts
- [ ] Route to show posts of particular places
- [ ] Route for users (Authentication to post)
- [x] Sign up for users
- [ ] Login for users

</details> 

<details>
<summary>Tests</summary>

- [ ] Nock Tests

</details> 


## Acceptance Criteria

- [ ] An Express server that only returns JSON
- [ ] A Postgres database to store the data
- [ ] Endpoints for creating, reading, updating & deleting resources
- [ ] Token-based authentication so only the owner of a resource can change it
- [ ] Correct headers and response metadata
- [ ] Error-handling to make it easy to use the API to build something
- [ ] Tests for server routes and database access
- [ ] Not process user input as SQL commands
- [ ] Hidden environment variables (i.e. not on GitHub)

## Team
* Jihyun - Scrum Facilitator
* Shaya - Quality
* Ephie - Deployment
* My Hoa - Design

## Tech Stack
* Miro
* [wheeldecide](https://wheeldecide.com/)

## Non-Tech Stack
* Bed :bed:
* Food :cake:
