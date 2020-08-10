# Environment Setup
- This project was bootstrapped with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).
- Please download and use [VSCode](https://code.visualstudio.com/) as your IDE
    -  Download the following extensions:
        - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
        - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
        - [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)
- Make sure you have [Git](https://git-scm.com/) installed on your machine
- Download [NPM](https://www.npmjs.com/get-npm)

# Get Started With The Template
- Clone the web app template
`git clone https://github.com/QueensTechMediaAssociation/React_Web_BoilerPlate.git`

- Open your terminal and navigate to your team's GitHub repo on your machine
- Run 
`npx create-react-app <your_app_name>`

In Finder:
- Navigate to the template
- Copy both the src folder and the package.json file
- Navigate to your newly created project and replace the src folder and package.json file you just copied
- Make sure any package-lock.json or yarn.lock files are deleted
In Terminal:
- Navigate to your projects top level directory 
- Install the projects dependencies
`npm install`
- Run the project
`npm start`

## Configure Your Application With A Firebase Project :fire:

- Go to [Firebase](https://firebase.google.com/)
- Click Get Started > Create New Project, follow the steps to create your project and make sure Google Analytics is enabled.
- Now it's time to add this project to your app
  - In the Firebase project overview click on add app and select web
  - Copy the firebaseConfig variable presented to you in the firebase console
  - Navigate to /src/components/Firebase/firebase.js and replace the config variable with your projects specific info

# Add your project to GitHub
- Add, commit and push the template to your teams repository
```sh
    git add --all
    git commit -m "SB-1 initial commit"
    git push
```

# Learn More
This boiler plate was made using this [tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial#react-router-for-firebase-auth), refer to it for any implementation questions.

Check out the [React documentation](https://reactjs.org/) to learn more.


