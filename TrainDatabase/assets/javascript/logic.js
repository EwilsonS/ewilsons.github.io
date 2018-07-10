var config = {
    apiKey: "AIzaSyBJsQqR8-r-MTDDrY5DqI89Vue7j0DAxGc",
    authDomain: "train-scheduler-e9ab9.firebaseapp.com",
    databaseURL: "https://train-scheduler-e9ab9.firebaseio.com",
    projectId: "train-scheduler-e9ab9",
    storageBucket: "train-scheduler-e9ab9.appspot.com",
    messagingSenderId: "1025973669481"
};
firebase.initializeApp(config);

var database = firebase.database();

// var name = ""; 
// var destination= "";
// var firstTrainTime = "";
// var frequency = "";

    $("#submit").on("click", function (event) {
        var name = $("#name").val().trim();
        var destination = $("#destination").val().trim();
        var firstTrainTime = moment($("#time").val().trim(), "HH:mm").subtract(10, "years").format("X")
        var frequency = $("#frequency").val().trim();

        database.ref().push({
            name: name,
            destination: destination,
            firstTrainTime: firstTrainTime,
            frequency: frequency
        });
        console.log(firstTrainTime)
        $("#name").val("");
        $("#destination").val("");
        $("#time").val("");
        $("#frequency").val("");

    });

database.ref().on("child_added", function (childSnap) {

    var name = childSnap.val().name
    var destination = childSnap.val().destination
    var firstTrainTime = childSnap.val().firstTrainTime
    var frequency = childSnap.val().frequency

    var remainder = moment().diff(moment.unix(firstTrainTime), "minutes")%frequency;
    var minutes = frequency - remainder
    var nextArrival = moment().add(minutes, "m").format("hh:mm A")

    console.log(remainder);
    console.log(minutes);
    console.log(nextArrival);


    $("#new-train-row").append(
        "<tr><td>" + name + "</td>" +
        "<td>" + destination + "</td>" +
        "<td>" + frequency + "</td>" +
        "<td>" + nextArrival + "</td>" +
        "<td>" + minutes + "</td></tr>")

    console.log("-------");

})