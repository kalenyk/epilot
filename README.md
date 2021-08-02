# Epilot

## Available Scripts

In the project directory, you can run:

### `yarn`

Install all dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn cypress:open`

Launches the Cypress tests\

### Implemented functionality

All tasks from the test were implemented. The APP user can find the user github and view all of his public repositories. When you click on a table row, a new tab with a repository will open. You can also see the user's repositories after reloading the page.

I decided to complicate the task, because the maximum number of repositories that API can return only 100 items, the rest will not be visible in the table. so I decided to implement pagination. Now the user can see all the repositories. By default, 10 repositories are displayed on each page. The current pagination page is also displayed in the URL parameters ( covered this scenario with tests )