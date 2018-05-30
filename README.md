# Train Scheduler

Train app using Firebase. Adds new trains based on user input, and then calculates when the next train will arrive.


## How it Works:

Trains are made up by the users, and then logged to Goggle's Firebase. Once a user adds a train, the current time is automatically calculated using moment.js. 


## Running the app:
```
1. Start by entering all of the information in the "Add Train" section. 
2. Navigate to the other tab/window, and enter a username and email address for User 2.
3. Navigate back to User 1's tab, and click the 'ihaveArrived' button. 
4. Navigate to User 2's tab, and click the 'onTheWay' button.
```

## Break down:

The app requires a sequential order. 
```
- Once User 1 exists, the  option to create User 2 is available. 
- Click the submit button.
- Once the submit button is clicked, the application logs that information to Firebase. 
- After the train is logged to Firebase, calculations are made and printed to the "Current Train Schedule" section. 
```

## Deployment:
```
https://nakrap.github.io/trainScheduler/
```

## Built With:

HTML,
CSS,
Bootstrap,
Javascript,
JQuery,
Firebase,
Moment.js
