Project deployed at https://munro-app.herokuapp.com/home



Munro Walking App

MVP

A page that shows a leaflet or google map populated by all the munro’s (using a map function) with a clickable link to more information about the specific munro
A page that has a list populated with all the munro data where you can filter by different properties including height, name, region and anything else we can think of.
A page with a calculator that takes in the user input to work out how many calories will be burned depending on the munro height. Taking in the user age and BMI. Another calculator for BMI.
A page where you can enter a location and it gives you back data from the sunset/sunrise API

Extension

A weather page
Store user data (Google authentication) in Java






Git Commands:

When you are in your terminal please type ‘git pull origin develop’.

Then create a new branch. (eg: ‘gco -b feature/add-get’)

From here you are working from within your own branch.


When it comes time to commit then you can just type the usual stuff to commit eg: ‘gaa - to add all files to staging area, gcmsg “message” to commit with a detailed message’

Then when it comes to pushing the files make sure the red font in your terminal says the name of tyour branch and then type ‘git push origin <branchname>’

Go to the github repo and check that changes have been made and the correct files are there in your own branch.

Then create a new pull request and request that the other two people need to see it. This can be done on the right hand side of the screen.

Also make sure that the base of the merge is the develop branch. This will be default set to master, so make sure you change it.

As long as you set the request that the other two people need to review it then they will get an email and will be able to go and check it. Once the pull request is made then send a message in the slack groupchat. Once everyone has had a chance to check it then the pull request can be merged.

After your own merge request has been approved, delete your branch and make a new pull request for the develop branch so that your files are up to date.

If you are working on something during this merge then wait until your work is finished and then make your own merge request. After this is approved you will need to pull down the most recent version of develop.








This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
