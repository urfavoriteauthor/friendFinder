# friendFinder

I began my project by structuring my HTML and CSS since those were the simplest items.
I created separate html files for the home and the survey page and linked them with a simple button.
I used bootstrap to create a jumbotron as well as the forms then used two input fields to capture the names of the items.
I created identifiers for all of the buttons and added a submit button at the end to trigger the search/event.

in my friends.js file I created the an array variable with which to store the data served back from the request by the server

in the htmlRoutes.js file I created pathways for the server to access html file for the survey. I required path and used an app.get with app being express as a variable.

in the apiRoutes.js file i structured the function that would cycle through the array's to match friends with the most compatible friend. This was done using if statements and cycling through an array then returning the response in json format. 

in the server.js I made my connections to the server I also required express here as well as requireing the two routing javascript files. This is where my connection is opened. I had to npm install express and path to run this app.

<!-- issues. Could not get the app to store the data in the array which lead me to believe there was an issue with my Post function. Was able to console.log the result which provided the object in the form of an array. However when returning to the friends.js file, the information did not persist. -->
