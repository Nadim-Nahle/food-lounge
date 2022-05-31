axios({
  method: "get",
  url: "localhost/backend/php/get_users.php",
}).then(function (response) {
  console.log(response.data[0]["username"]);
  document.getElementById("listtable").innerHTML =
    " <tr><th>username</th><th>email</th></tr>";
  for (var i = 0; i < response.data.length; i++) {
    document.getElementById("listtable").innerHTML +=
      "<tr><td>" +
      response.data[i]["username"] +
      "</td><td>" +
      response.data[i]["email"] +
      "</td></tr>";
  }
});
