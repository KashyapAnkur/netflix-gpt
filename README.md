# Netflix GPT
- Create React App
- Configured Tailwind CSS
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase setup
- Deploying our App to production
- Create SignUp User Account

# Features
- Login/Sign up
    - Sign IN/Sign Up Form
    - Redirect to Browse page
- Browse (After Authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestions
            - MoviesLists * N

- NetflixGPT
    - Search Bar
    - Movie Suggestions

# Firebase issue fix:
Step 1 : open Windows PowerShell (Run as administrator)
Step 2 : Type in Get-ExecutionPolicy -List and hit Enter.
Step 3 : Type in Set-ExecutionPolicy Unrestricted and hit Enter again.
Step 4 : Type Y and hit Enter.
Step 5 : Type Set-ExecutionPolicy Unrestricted -Force and hit Enter.

# How to deploy to firebase
- npm install firebase
- Create a firebase.js file and paste the given code
- Install firebase CLI  ->   npm install -g firebase-tools
- Deploy to hosting:-
  - firebase login
  - firebase init
  - create npm run build and then
  - firebase deploy