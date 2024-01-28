/*Q1 : write a program to load a js file in a browser using promises. use .then() to display an alert when the load is completed. */

// let p1 = new Promise((resolve , reject )=>{
//     let script = document.createElement("script");
//     script.src ="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
//     document.body.append(script);
//     script.onload = ()=>{resolve(1)}
//     script.onerror = ()=>{reject(0)}
// })
// p1.then((value)=>{
//     console.log("file loaded successfully")
// })
// p1.catch((error)=>{
//     console.log("file not loaded ")
// })
