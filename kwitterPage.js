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
userName=localStorage.getItem("userName")
roomName=localStorage.getItem("roomName")
function send(){
    msg=document.getElementById("msg").value
    firebase.database().ref(roomName).push({
        name:userName,
        message:msg,
        like:0
    })
    document.getElementById("msg").value=""
}
function getData(){
    firebase.database().ref("/"+ roomName).on("value", function(snapshot){
        document.getElementById("output").innerHtml=""
        snapshot.forEach(function(childSnapshot){
            childKey=childSnapshot.key
            childData=childSnapshot.val()
            if(childKey!="purpose"){
                firebase_message_id=childKey
                message_data=childData
                console.log(firebase_message_id)
                console.log(message_data)
                name=message_data["name"]
                message=message_data["message"]
                like=message_data["like"]
                name_com_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
                mensagem_com_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Curtir: "+ like +"</span></button><hr>";
                row=name_com_tag+mensagem_com_tag+like_button+span_with_tag
                document.getElementById("output").innerHTML+=row
            }
        })
    })
}
getData()
function updateLike(firebase_message_id)
{
  console.log("clicked on like button - " + firebase_message_id);
	button_id = firebase_message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(roomName).child(firebase_message_id).update({
		like : updated_likes  
	 });

}

function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
        window.location = "index.html";
    }
