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

## MVP



## Stretch Goals

1. Convert retrieved data into strings that directly access the each key value pair of the return JSON

1. Use regex to highlight key values in different colors on the JSON display.

1. Click to save to clipboard.

## Functional Requirements

- A user can search a url by inputing into the form and receiving the JSON results displayed

- A user can view a history of other users and their own searches

- A user can choose to save their search to our database

- A user can view information about the creators of the website

### Data Flow

The user navigates to the site. LocalStorage checks to see if user has visited before. If user hasn't visited, LocalStorage notes that they now have and the site displays an alert informing user to not use urls with API keys. User sees a form that asks for a public API search url and inputs their search along with an option to select a category. If there is any issue with search an error alert is displayed and the reason for the error. If there's no issue, our server used superagent to communicate with said API and displays the returned JSON result along with a form at the bottom to input a "codename" and save the search to our DB. In addition to the results we will use the category selection to hit the PAPI for PAPI's and display info on API's from that category as suggestions for other API's our user might want to use. If user didn't select category we will display info on random API's. From there user can continue searching or use the navigation to check out our about us page which will display the expected info or check out the collection page. The collection page will take info from our DB and display all of the saved searches with code names and time stamps. 

## Non-Functional Requirements

- Security: this websit will not be not be protecting the information it transfers so it's important to alert our users not to use urls with API keys via a site disclaimer. We could use local storage to determine whether a user has visited our site before and display an alert on navigating to the page to confirm that the user is aware of this.

- Usability: On this website you should be able to navigate from any given page to any of the others. There shouldn't be any dead ends. Fields that the user needs to input into in order to proceed should be displayed prominently with contrasting colors that meet the 2 check mark industry standard. Errors should be visible, explanatory and prominently display so users know whether there's a problem with their input our server or the API they're trying to access.

- 