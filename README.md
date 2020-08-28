# Week7-DEKN 

API link: [click here](https://travel--jar.herokuapp.com/)

## Theme
Travel stories

## Installation Locally
1. Clone this repo
2. Run `npm install`
3. Create local database called `travel__jar` using the `init.sql` located in the src/database folder
4. Create `.env` file with the DATABASE_URL, JWT_SECRET
<details>
  <summary> .env to include </summary>
DATABASE_URL=postgres://myuser:mypassword@localhost:5432/travel__jar
TEST_DATABASE_URL=postgres://myuser:mypassword@localhost:5432/travel__jar__test
JWT_SECRET=insert your secret
</details>

## Running tests
1. Complete steps 1-4 in Installation Locally
2. Create local database called `travel__jar` using the `test.sql` located in the src/database folder
3. Update `.env` file to include TEST_DATABASE_URL=postgres://myuser:mypassword@localhost:5432/travel__jar__test
4. Run `npm test`

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

1. `GET /` - will show all the travel posts
2. `POST /signup` - the body for the request requires a url form username and password as keys and values
3. `POST /login` - the body for the request requires a url form username and password as keys and values
4. `POST /posts` - the body for the request requires a url form username and password as keys and values
5. `GET /posts/user.id` - get all the posts the user has listed

<details>
<summary>Routes</summary>

- [x] Route to show all posts
- [ ] Route to show posts of particular places
- [ ] Route for users to post (Authentication required)
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

## Known Issues
- [ ] Authentication for users posting required
- [ ] Relating posts to users required

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
