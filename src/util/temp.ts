const options = {
    method: "PUT",
    headers: {
        "Authorization": "Bearer" + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTNhMjI4YS03MmZlLTRhNzQtYTFlZC0xYmZiYzQxOGNjNDYiLCJpYXQiOjE2ODYyNDEwMTYsImV4cCI6MTY4NjM0MTAxNn0.A1pHPSq2mK1Sccw39huMi0Lub2Qn9ksJasGCn9sA11F38WAYhCdt03d1rQmX7eexaBfcD13VUUXfoCDWdc5GAg"
    },
    body: JSON.stringify({
        "username": "john"
    })
}

fetch("http://localhost:8080/personal/updateusername", options)
    .then(response => response.json())
    .then(data => console.log(data + " " + data.message))
    .catch(error => console.log(error))