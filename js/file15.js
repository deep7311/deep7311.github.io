//JavaScript Object Notation (JSON)
// JSON is a lightweight data interchange format that is easy for humans 
// to read and write, and easy for machines to parse and generate.
// It is often used to transmit data between a server and a web application as an alternative to XML.

const student = {
    name: "John Doe",
    age: 23
}

const jsonString = JSON.stringify(student); // Convert JavaScript object to JSON string
console.log(jsonString); // Output: {"name":"John Doe","age":23}
const parsedObject = JSON.parse(jsonString); // Convert JSON string back to JavaScript object
console.log(parsedObject); // Output: { name: 'John Doe', age: 23 }