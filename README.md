# Trail Stamp

## User Story
This app allows users to rate hikes they’ve been on and check them off their “hike” list. 

If a user is not logged in, they will see the site’s landing page which contains some information about the site. 

When a user signs up for the site, they will be asked to enter a username, password, email, name, and be given a choice of a few avatar icons to choose from. 

Once a user is logged in, they will be taken to their profile which will show their user avatar, name, number of stamps, and stamp card. The stamp card will have circles on it with the name of the hike above them. Hikes that the user has already reviewed will have “stamps” in those circles to indicate that the user has done this hike before and reviewed it. There will be an option to edit or delete a user.

Clicking on these circles will bring you to the hike’s show page which will display an image, the name of the hike, the location of the trail, the difficulty of the hike, the cost of the hike, the length of the hike, the user’s rating of the hike (out of 5 stars), and a written review of the hike with any notes the user would like to add. There will be an option to edit or delete the hike review. Deleting the hike review will remove the circle from the user’s stamp card as well as removing the hike show page.

A user may add a hike they would either like to do or have already completed. If the user checks the “completed” box, they will have the option to then leave a rating out of 5 stars and a written review.
Initial hikes list will be provided from seed data and hikes will be added to the database by the user


## Wireframes

### ERD
<img src="./final-images/erd.png">

### Home Page
<img src="./final-images/home.png">

### Profile Page
<img src="./final-images/profile.png">

### Hike Show Page
<img src="./final-images/hike.png">

### Add HikePage
<img src="./final-images/newhike.png">

### Sign Up Page
<img src="./final-images/signup.png">


## Technologies Used
- HTML5
- CSS3
- JavaScript
- React.js

## Attributions and Acknowledgements

Special thanks to Zach Milan

Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
plant, tree, sun, lizard, fox, fish, flower

Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
leaf

Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
beaver, snake

<img src={record.picture} onError={(e)=>{e.target.onerror = null; e.target.src="image_path_here"}}/>

https://www.uokpl.rs/fpng/f/9-97476_transparent-background-white.png 
stamp circle

https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRz0bxMkl2_ggkVpKeI3VhQtYwwt0hjzTI8Eg&usqp=CAU
leaf stamp

https://unsplash.com/photos/DmVDrTLFHBw

https://unsplash.com/photos/LEgwEaBVGMo

https://unsplash.com/photos/Yizrl9N_eDA

https://unsplash.com/photos/UVyOfX3v0Ls

<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
