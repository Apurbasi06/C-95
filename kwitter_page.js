
const firebaseConfig = {
      apiKey: "AIzaSyBeWKN9m2Lqi11jZHhjCP2BwD1k_A9TvG0",
      authDomain: "kwitter-d8f4f.firebaseapp.com",
      databaseURL: "https://kwitter-d8f4f-default-rtdb.firebaseio.com",
      projectId: "kwitter-d8f4f",
      storageBucket: "kwitter-d8f4f.appspot.com",
      messagingSenderId: "472086760901",
      appId: "1:472086760901:web:50cff1f2b9b155dae30fac"
    };
    
    firebase.intializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
           name: user_name,
           message: msg,
           like: 0 
      });

      document.getElementById("msg").value = "";

    }
   
function getData() { 
      firebase.database().ref("/"+room_name).on
      ('value', function(snapshot) 
      { document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) 
      { childKey  = childSnapshot.key; childData = childSnapshot.val(); 
            if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();
