// ---------------------
// PROMISE CREATION
// ---------------------
function getData(name) {
    return new Promise((resolve, reject) => {
        if (name === "komal") {
            setTimeout(() => {
                resolve({
                    message: "promise is resolved",
                    data: {
                        name: "komal",
                        phone: "1234567890"
                    }
                });
            }, 2000);
        } else {
            setTimeout(() => {
                reject({
                    message: "name not matched, promise is rejected!"
                });
            }, 3000);
        }
    });
}

// ---------------------
// 1. Handling with then / catch / finally
// ---------------------
getData("komal")
    .then((res) => {
        console.log("Promise resolved (then):");
        console.log(res);
    })
    .catch((err) => {
        console.log("Promise rejected (catch):");
        console.error(err);
    })
    .finally(() => {
        console.log("Promise finished (finally)\n");
    });

// ---------------------
// 2. Handling with async / await
// ---------------------
async function handlePromise(name) {
    try {
        let result = await getData(name);
        console.log(`Async/Await Success for "${name}" :`);
        console.log(result);
    } catch (err) {
        console.log(`Async/Await Failure for "${name}" :`);
        console.error(err);
    } finally {
        console.log(`Execution finished for "${name}"\n`);
    }
}

// Run multiple test cases
handlePromise("Komal");   // will resolve after 2s
handlePromise("komal");   //  will reject after 3s
handlePromise("123");    //  will reject after 3s
