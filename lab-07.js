/*
CIT 281 Project 6
Name: Rose Gbaanador
*/
class CustomError extends Error {
  constructor (msg) {
    super(msg);
    this.name = "CustomError";
  }
}

function throwGenericError(){
  throw new Error("Generic error");

}

function throwCustomError(){
  throw new CustomError("Custom error");

}

console.log("Force generic error");
try {
 console.log("Generic error try block");
  throwGenericError();
} catch (error) {
  console.log("Generic error catch block");
  console.log(`${error.name}: ${error.message}`);
} finally {
  console.log("Generic error finaly block");
}

console.log("Force Custom Error");
try {
  console.log("Custom error try block");
  throwCustomError();
} catch (err) {
  console.log("Custom Error catch block");
  console.log(`${err.name}: ${err.message}`)
} finally {
  console.log("Custome error finally block")
}

