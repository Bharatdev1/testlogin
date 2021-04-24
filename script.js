 var firebaseConfig = {
    apiKey: "AIzaSyAIMBlShJtFXtiCJOMF-gK49PlZWMosQW8",
    authDomain: "blogin-59247.firebaseapp.com",
    projectId: "blogin-59247",
    storageBucket: "blogin-59247.appspot.com",
    messagingSenderId: "1039628675839",
    appId: "1:1039628675839:web:fe6365b9d5607d4e2bbaca",
    measurementId: "G-RB4MQN0CSJ"
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.then(promise=>{
        console.log(promise.message);
        window.location.href = 'Home.html';
    })
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })

  