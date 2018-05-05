
// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyByeQ7FuTFaK6SC0RXIhZWrpQfYCkx4RRc",
    authDomain: "trainscheduler-fb2c7.firebaseapp.com",
    databaseURL: "https://trainscheduler-fb2c7.firebaseio.com",
    projectId: "trainscheduler-fb2c7",
    storageBucket: "",
    messagingSenderId: "1091248033168"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  var currentTime = moment();

  
  // 2. Button for adding trains
  $("#add-train-btn").on("click", function(event) {
        event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var traindestination = $("#destination-input").val().trim();
    var trainStart = $("#start-input").val().trim();
    var trainfreq = $("#freq-input").val().trim();


    var firstTrainConverted = moment(trainStart, "HH:mm");

    var difference = currentTime.diff(moment(firstTrainConverted), "minutes");
    var remainder = difference % trainfreq;
    var minUntilTrain = trainfreq - remainder;
    var nextTrain = moment().add(minUntilTrain, "minutes").format("HH:mm a");

    // Creates local "temporary" object for holding train data
    var newtrain = {
        name: trainName,
        destination: traindestination,
        start: trainStart,
        freq: trainfreq,
        min: minUntilTrain,
        next: nextTrain
    };
  
    // Uploads train data to the database
    database.ref().push(newtrain);

    // Alert
    alert("Train " + newtrain.name + " successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#start-input").val("");
    $("#freq-input").val("");
  });
  
  // 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
  
    // console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var traindestination = childSnapshot.val().destination;
    var trainStart = childSnapshot.val().start;
    var trainfreq = childSnapshot.val().freq;
    var min = childSnapshot.val().min;
    var next = childSnapshot.val().next;
  
  
    // Add each train's data into the table
    $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + traindestination + "</td><td>" 
    + trainfreq + "</td><td>" + next + "</td><td>" + min + "</td></tr>");
  });

  