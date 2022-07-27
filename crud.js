var url = "https://62a8204c943591102b9a5c4a.mockapi.io/users";

// async function readdata() {

//     let res = await fetch (url)

//     let res1 = await res.json();

//     console.log(res1);

// }
// readdata();

// async function createdata(){

//     let data = {

//         name:"vidhya",
//         email:"vidhya123@gmail.com",
//         age:"30"

//     }

//     var res = await fetch (url,{
//         method: "POST",
//         body:JSON.stringify(data),
//         headers:{
//             "Content-type":"application/json;charset=UTF-8"
//         }
//     })
// var resjson = await res.json()

// console.log(resjson);

// }
// createdata();

// async function updatedata(){

//     let data = {

//         name:"john doe",
//         email:"johndoe123@gmail.com",
//         age:"50"

//     }

//     var res = await fetch (url + "/16",{
//         method: "PUT",
//         body:JSON.stringify(data),
//         headers:{
//             "Content-type":"application/json;charset=UTF-8"
//         }
//     })
// var resjson = await res.json()

// console.log(resjson);

// }
// updatedata();

async function deletedata() {

    let res = await fetch (url + "/10",{
        method:"DELETE",
    })

    let res1 = await res.json();

    console.log(res1);

}
deletedata();


