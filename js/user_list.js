axios({
  method: "get",
  url: "http://localhost/Foodlounge/get_users.php",
}).then(function (response) {
  console.log(response.data[0]["F_Name"]);
  document.getElementById("listtable").innerHTML =
    " <tr><th>username</th><th>email</th><th>bio</th></tr>";
  for (var i = 0; i < response.data.length; i++) {
    document.getElementById("listtable").innerHTML +=
      "<tr><td>" +
      response.data[i]["username"] +
      "</td><td>" +
      response.data[i]["email"] +
      "</td><td>" +
      response.data[i]["bio"] +
      "</td></tr>";
  }
});
