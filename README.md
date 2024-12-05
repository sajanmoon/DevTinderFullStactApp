# DevTinder

# Part1

- Create vite + React project
- Remove unecesary code from vite app
- Install Tailwind
- Install daisy UI
- Add Navbar from daisy UI
- Create a Navbar seprate component
- Install React Router Dom
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Creae an Outlet in your body component
- Create Footer

# Part2

# LOGIN FORM

- Create a Login page (Daisy UI)
- Add input
- Add label
- Set email password using useState hook
- Attach to input
- Create a Handle Login Function

# AXIOS

- Install axios
- Make an API call with
- Attact to a login button
- CORS install cors in backend => add middleware to with configaration :origin ,creditals true
- Whenever you are making API call so pass axios => {withCretidtials:true}

# REDUX-TOOLKIT

- Install redux-toolkit
- Install react-redux
- Folder > utils > appStore.js > store > in app.js add/wrap provider > createSlice > add reducer to store
- Write the slice code > useDispatch > subscribe to store useSelector
- Change the Navbar photo according to user {user && ...}
- Navigate user to feedpage useing useNavigate hook

# Part3

- TASK - You should not be able to access other route without login
- Body.jsx useNavigate in error
- TASK - Even after refreshing a page user profile should stay
- In a body.jsx create a fetchUser function
- Get a profile/view api call from backend
- TASK - If not login not able to access other page
- In Body.jsx in fetch user function in error Navigate to "./" page

# LOGOUT-Profile

- Navbar.jsx make an api call of logout
- We need to clear the redux store => useDispatch from createSlice => removeUser in Navbar.jsx
- navigate to "./login" route

# FEED - API

- getfeed api function in feed.jsx
- Get the feed api with axios
- create a feed slice
- add to redux store
- with dispatch get data in feed path
- with the useEffect render getfeed function
- create a Usercard componet > add Card(Daisy UI)
- send data from feed to usercard
- display all the information in UI with props