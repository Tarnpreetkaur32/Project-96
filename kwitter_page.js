var firebaseConfig = {
    apiKey: "AIzaSyCt2u73fwhQYDCOosvA7XJsOG_jEAo0FSY",
    authDomain: "kwitter-da854.firebaseapp.com",
    databaseURL: "https://kwitter-da854-default-rtdb.firebaseio.com",
    projectId: "kwitter-da854",
    storageBucket: "kwitter-da854.appspot.com",
    messagingSenderId: "1071920017500",
    appId: "1:1071920017500:web:5ee1b203ddc72cd71e3699",
    measurementId: "G-BR42J7LNZR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
 } });  }); }
getData();
