const url = "https://github.com"


// function loginWithGithub() {
//     console.log("Here")
//     fetch(url+"/login/oauth/authorize", {
//         method: "GET",
//         client_id: "d26698775db52875ec91"
//     }).then(
//         console.log("Redirected")
//     )

    
// }

$(".btn").click(function() {
    $.get(url+"/login/oauth/authorize?client_id=d26698775db52875ec91", function (data) {
        console.log(`${data}`)
    })
})
