// pitfalls

// 1. excessive logging is bas as it takes a network latency.
// 2. while doing local logging make sure you have a string message associated with it.
// (console.log("somestr", value));

// 3. sometimes we forget to use await in service or in controller.
/*
if you see this Promise { <pending> }
then you are missing a await statement in your code.
*/

// 4. EaddrinUse : https://stackoverflow.com/questions/4075287/node-express-eaddrinuse-address-already-in-use-how-can-i-stop-the-process
// if you want to know more about lsof and kill command use 
// man lsof
// man kill

// man is command for manual page for given commands 

// 5. package-lock.json is keeping dependency of dependencies for our project which we can modify (NOT RECOMMENDED)


