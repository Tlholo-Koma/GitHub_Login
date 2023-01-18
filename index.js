const url = "https://github.com"


function connect() {
    console.log("Here")
    fetch(url+"/login/oauth/authorize", {
        method: "GET",
        client_id: "d26698775db52875ec91"
    }).then(
        console.log("Redirected")
    )
}
