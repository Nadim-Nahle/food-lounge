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
// Add restaurant script 
let restBtn = document.getElementById("contact-submit");
let newImage = document.getElementById("new-image ")
  if(restBtn){
    restBtn.addEventListener("click", function(event){
      window.open('restaurant.html');
      event.preventDefault();
      
      const restName = document.getElementById("rest-name").value;
      const restDescription = document.getElementById("rest-description").value;
      let data = new FormData();
      data.append('name', restName);
      data.append('description', restDescription);
      axios({
          method: 'post',
          url: 'http://localhost/backend/php/add_restaurant.php',
          data: data,
      })
      .then(function (response) {
        let result = (response.data);
        let message = result.status;
        window.open('restaurant.html');
        
        
                  
      })
      
  })
  }
  
// Get restaurants script
let nxtBtns = document.querySelector(".nxt-btn")
if(nxtBtns){
  window.addEventListener('load', (event) => {

    let restName;
    let restDescription;
    let data = new FormData();
    data.append('name', restName);
    data.append('description', restDescription);

    axios({
      method: 'post',
      url: 'http://localhost/backend/php/get_restaurants.php',
      data: data,
  })
      .then(function(response) {
        
        let result=(response.data);
        //console.log(result.length);
        for (let i =0; i<result.length; i++){
          newName = (result[i].name);
          newDescription =(result[i].description);

          
          const restContainer = document.querySelector(".rest-container");
          const restCard = document.createElement("div");
          restCard.classList.add("rest-card");

          const restImage = document.createElement("div");
          restImage.classList.add("rest-image");

          const restInfo = document.createElement("div");
          restInfo.classList.add("rest-info");

          const a = document.createElement("a");

          const img = document.createElement("img");
          img.classList.add("rest-thumb");

          const h2 = document.createElement("h2");
          h2.classList.add("rest-name");
          h2.innerHTML=newName;

          const p1 = document.createElement("p");
          p1.classList.add("rest-short-description");
          p1.innerHTML=newDescription;

          restContainer.appendChild(restCard);
          restCard.appendChild(restImage);
          restImage.appendChild(a);
          a.appendChild(img);
          restCard.appendChild(restInfo);
          restInfo.appendChild(h2);
          restInfo.appendChild(p1);
          a.setAttribute('href', "review.html")
        }
        
      })

               
  })

}




//Login script
  const loginBtn = document.querySelector(".login-btn");
  const emailLogin = document.getElementById("email-login");
  const passwordlogin = document.getElementById("password-login");
  if(loginBtn){
    loginBtn.addEventListener("click", function (event) {
   
      event.preventDefault();
       let data = new FormData();
 
       data.append('email', emailLogin.value);
       data.append('password', passwordlogin.value);
       
       axios({
         method: 'post',
         url: 'http://localhost/backend/php/login.php',
         data: data,
     }).then(function (response) {
          
          //console.log(response.data["id"]);
 
          let dataV2 = new FormData();
                 dataV2.append('id', response.data["id"])
                 axios({
                     method: 'post',
                     url: 'http://localhost/backend/php/get_user_type.php',
                     data: dataV2
                     
                 }).then(function (type_response) {
         
 
                   if(response.data["success"]){
                       if (type_response.data[0]['type'] == 1) {  
                         localStorage.setItem("id", response.data["id"]);
                         location.href = 'http://localhost/frontend/restaurant.html';
                     }
                       if (type_response.data[0]['type'] == 2) {
                         localStorage.setItem("id", response.data["id"]);
                         location.href = 'http://localhost/frontend/adminpanel.html';
                     
                     }
 
                         }
                        else{
                           alert("worong email or password!")
                         } 
 
 
                 })
 
     })
       
 
   
 
 });
  }

//monitor reviews

  
window.addEventListener('load', (event) => {

  let newReview;
  let newDesc;
  let newStatus;
  let data = new FormData();
  data.append('name', newReview);
  data.append('message', newDesc);
  data.append('status', newStatus);

  axios({
    method: 'post',
    url: 'http://localhost/backend/php/get_reviews.php',
    data: data,
})
    .then(function(response) {
      
      let result=(response.data);
      //console.log(result.length);
      for (let i =0; i<result.length; i++){
        newReview1 = (result[i].name);
        newDesc1 =(result[i].message);
        let newStatus =(result[i].status);
        //console.log(newStatus);
        

        const reviewboxcontainer = document.querySelector(".review-box-container-1");
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

        const deletenew = document.createElement("div");
        deletenew.classList.add("l"+i);

        const deleteReview = document.createElement("button");
        deleteReview.innerHTML = "delete review";

         
        reviewboxcontainer.appendChild(reviewbox);
        reviewbox.appendChild(boxtop);
        boxtop.appendChild(profile);
        reviewboxcontainer.appendChild(deletenew);
        deletenew.appendChild(deleteReview);
        profile.appendChild(nameuser);
        nameuser.appendChild(strong);
        
        reviewbox.appendChild(usercomment);
        usercomment.appendChild(p);
        if(newStatus === 0){
          strong.innerHTML = newReview1;
          p.innerHTML = newDesc1;
        }
      }
      
    })

             
})






  
