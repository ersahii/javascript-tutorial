// syntax of promise and and then and catch in promises
let p1 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        // resolve(1);
        reject(new Error ("This promise is rejected to check the use of Promise.any"))
    } , 1000)
});
let p2 = new Promise ((resolve , reject)=>{
    setTimeout(()=>{
        resolve(2);
    } , 2000)
});
let p3 = new Promise ((resolve , reject)=>{
    setTimeout(()=>{
        resolve(3);
    } , 3000)
});
let p4 = new Promise ((resolve , reject)=>{
    setTimeout(()=>{
        // resolve(4);
        reject(new Error ("This is a error "))
    } , 4000)
});
// using then in promise 
    // p1.then((value)=>{
    //     console.log(value)
    // })
    // using promise API's in js ( Promise.all)

// let all_promises = Promise.all([p1, p2 , p3 , p4]);
    // all_promises.then((value)=>{
    //         console.log(value)
    //     })
    
// using promise API's in js ( Promise.allSettled)
    // let all_promises = Promise.allSettled([p1 , p2 , p3 , p4])
    // all_promises.then((value)=>{
    //     console.log(value);
    // })
// using promise API's in js ( Promise.any)
    // let all_promises = Promise.any([p1 , p2 , p3 , p4])
    // all_promises.then((value)=>{
    //     console.log(value);
    // })
// using promise API's in js ( Promise.race)
// let all_promises = Promise.race([p1 , p2 , p3 , p4])
// all_promises.then((value)=>{
//     console.log(value);
// })
// using promise API's in js ( Promise.resolve)
// let all_promises = Promise.resolve("This promise is resolved")
// console.log(all_promises)

// using promise API's in js ( Promise.reject)
// let all_promises = Promise.reject("This promise is rejected by Promise.reject")
// console.log(all_promises)
p1.catch((error)=>{
    console.log("Error has been cathed and the error is "  + error)
})
p4.catch((error)=>{
    console.log("Error has been cathed and the error is "  + error)
})