// Example 1: Simple Promise
function askedQuestion(question) {
    return new Promise((resolve, reject) => {
        if (question && question.length > 0) {
            resolve({ you_have_asked: question, status: true });
        } else {
            reject("Invalid question !");
        }
    });
}

askedQuestion("how are you?")
    .then((answer) => {
        console.log("Resolved  :", answer);
    })
    .catch((err) => {
        console.error("Rejected  :", err);
    })
    .finally(() => {
        console.log("Program completed !");
    });


// Example 2: Division with Promise
function division(n, d) {
    return new Promise((resolve, reject) => {
        if (d === 0) {
            reject({ reason: "denominator is 0", solution: "increment denominator by 1" });
        } else {
            resolve(n / d);
        }
    });
}

division(1, 0)
    .then((res) => console.log("Result:", res))
    .catch((err) => console.error("Error:", err));


// Example 3: Chained async tasks (simulate tasks 1 → 2 → 3)
function task(name, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`✅ ${name} completed in ${time / 1000}s`);
            resolve();
        }, time);
    });
}

task("Task 1", 2000)
    .then(() => task("Task 2", 5000))
    .then(() => task("Task 3", 3000))
    .then(() => console.log(" All tasks completed"))
    .catch((err) => console.error("Something failed:", err));
