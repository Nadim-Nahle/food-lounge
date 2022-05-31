// Signup Script

let signupBtn = document.getElementById("sign-up-btn");
if( signupBtn){
  signupBtn.addEventListener("click", function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const emailSignup = document.getElementById("email").value;
    const passwordSignup = document.getElementById("pwd").value;
    let data = new FormData();
    data.append('username', username);
    data.append('email', emailSignup);
    data.append('password', passwordSignup);
    axios({
        method: 'post',
        url: 'http://localhost/backend/php/signup.php',
        data: data,
    })
    .then(function (response) {
      let result = (response.data);
      let message = result.status;

                
    })
})
}


// submit review script
let button = document.getElementById("submitreview");
if(button){
  button.addEventListener("click", function(event){
    event.preventDefault();
    const name = document.getElementById("reviewname").value;
    const message = document.getElementById("message").value;
    let data = new FormData();
    data.append('name', name);
    data.append('message', message);
    axios({
        method: 'post',
        url: 'http://localhost/backend/php/add_review.php',
        data: data,
    })
    .then(function (response) {
      let result = (response.data);
      let message = result.status;
      

        const reviewboxcontainer = document.querySelector(".review-box-container");


         const reviewbox = document.createElement("div");
         reviewbox.classList.add("review-box");

         const boxtop = document.createElement("div");
         reviewbox.classList.add("box-top");

         const profile = document.createElement("div");
         reviewbox.classList.add("profile");

         const nameuser = document.createElement("div");
         reviewbox.classList.add("name-user");

         const strong = document.createElement("STRONG");

         const usercomment = document.createElement("div");
         usercomment.classList.add("user-comment");

         const p = document.createElement("p");

          
         reviewboxcontainer.appendChild(reviewbox);
         reviewbox.appendChild(boxtop);
         boxtop.appendChild(profile);
         profile.appendChild(nameuser);
         nameuser.appendChild(strong);
         strong.innerHTML = result[0];
         reviewbox.appendChild(usercomment);
         usercomment.appendChild(p);
         p.innerHTML = result[1];



      
                
    })
})
}

  


