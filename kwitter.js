
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCIwYhwTxjluiq-QFwM7KlfTVr6Zuo2Qew",
  authDomain: "kwitter-ced80.firebaseapp.com",
  databaseURL: "https://kwitter-ced80-default-rtdb.firebaseio.com",
  projectId: "kwitter-ced80",
  storageBucket: "kwitter-ced80.appspot.com",
  messagingSenderId: "689213001990",
  appId: "1:689213001990:web:45caa8a0856cca7e254e87"
};
firebase.initializeApp(firebaseConfig)
function addUser() {

  userName = document.getElementById("userName").value;

  localStorage.setItem("userName", userName);
  firebase.database().ref("/").child(userName).update({
    purpose:"adding user"
  })
    window.location = "kwitterRoom.html";
}

