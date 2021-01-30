# Software Requirements

## Vision

We aim to deliver a clean, RESTful app that assists users with figuring out exactly what the need to reference to access various parts of public API's. It will also share information about other cool API's to explore and use in your projects. Why spend hours parsing console logs when you can get what you need in a user friendly manner?

## Scope

### IN

- take in a URL for accessing an API and display useful information about what the API returned in an easy to read format (JSON files)

- Store searches and display them in a public collection page

- About Me page displays information about the creators

- Recommendations are displayed with info about other API's users might be interested in.

- Collection page shows a history of searches from all users

### OUT

- we wont be accepting API urls that contain user keys

- we won't be using https protocol

- we wont have a tablet display

## Stretch Goals

1. Convert retrieved data into strings that directly access the each key value pair of the return JSON

1. Use regex to highlight key values in different colors on the JSON display.

## Functional Requirements

- A user can search an