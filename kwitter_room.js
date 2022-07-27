var firebaseConfig = {
  apiKey: "AIzaSyBou49edJ2yp2q1Awc8RpzzGmC7QJfpYG4",
  authDomain: "kwitter-8f8e4.firebaseapp.com",
  databaseURL: "https://kwitter-8f8e4-default-rtdb.firebaseio.com",
  projectId: "kwitter-8f8e4",
  storageBucket: "kwitter-8f8e4.appspot.com",
  messagingSenderId: "458266627644",
  appId: "1:458266627644:web:5c36a2094236d2305d3d39"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
    room_name =  document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}