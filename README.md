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
- Implement Sign In user API
- Created Redux store with userSlice
- Implemented Sign Out
- Update Profile
- Validation done
- Redux done
- Auth done
- Bug fix: Sign up user displayName and profile picture update
- Bug fix: if the user is not logged in, Redirect /browse to Login page and vice versa
- Unsubscribed to the onAuthStateChange callback
- Added hardcoded values to the constants file
- Register TMDB API & create an app and get access token
- Get Data from TMDB now playing movies list API
- Custom hook for Now Playing movies
- Create movieSlice
- Update store with movies data
- Planning for MainContainer and secondary container
- Fetch data for trailer video
- Update store with trailer video data
- Embedded the youtube video and make it autoplay and mute
- Tailwind classes to make main container look awesome
- Build secondary component
- Built movie list
- Built movie card
- Added TMDB image cdn url
- Made the UI look better(browse page with Tailwind CSS)-
- Create usePopularMovies, useUpcomingMovies and useTopRatedMovies custom hooks for fetching the related movies
- Added UserDropdownobject in already created UserDropdown component
- GPT Search Feature
- GPT Search Bar
- Multi language feature
- Integrate GPT APIs
- Installed openai package:- npm install --save openai
- REACT_APP_OPEN_AI_KEY = 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
    - Here it is mandatory to add REACT_APP to OPEN_AI_KEY
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
  - create "npm run build" and then
  - firebase deploy