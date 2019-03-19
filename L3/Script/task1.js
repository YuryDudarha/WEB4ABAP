function enterUserName() {
    var person = prompt("Please enter your name");
    if (person != null || person != "") {
        if (checkContainsOfNumbers(person)) {
            person = person.toUpperCase();
        } else {
           person = reverseString(person);
        }
        document.getElementById("userName").innerHTML =
            "Result is: " + person;
    }
}

function checkContainsOfNumbers(name) {
    return /\d/.test(name);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}