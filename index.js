const url = "https://github.com"


function connect() {
    fetch(url+"/login/oauth/authorize", {
        method: "GET",
        client_id: ${{ secrets.CLIENT_ID }}
    }).then(
        console.log("Redirected")
    )
}
