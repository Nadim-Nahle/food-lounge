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



