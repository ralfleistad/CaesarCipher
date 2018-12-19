
window.onload = start;

function start() {

    let placeholder = "Enter a secret message, choose an amount to shift, encrypt and have fun!";

    document.getElementsByName("inputfield")[0].placeholder = placeholder;
}


function encrypt() {

    let input = document.getElementById("string").value;
    let amount = parseInt(document.getElementById("shift").value);
    let result = "";

    for (let i = 0; i < input.length; i++) {
        const c = input.charCodeAt(i);

        let uppercase = String.fromCharCode(mod(c - 65 + amount, 26) + 65);
        let lowercase = String.fromCharCode(mod(c - 97 + amount, 26) + 97);

        if (65 <= c && c <=  90) {
            result += uppercase;
        }
        else if (97 <= c && c <= 122) {
            result += lowercase;
        }
        else {
            result += input.charAt(i); 
        }
    }

    document.getElementById('string').value = result;
}


function decrypt() {

    let input = document.getElementById("string").value;
    let amount = parseInt(document.getElementById("shift").value);
    let result = "";

    for (let i = 0; i < input.length; i++) {
        const c = input.charCodeAt(i);

        let uppercase = String.fromCharCode(mod(c - 65 - amount, 26) + 65)
        let lowercase = String.fromCharCode(mod(c - 97 - amount, 26) + 97)

        if (65 <= c && c <=  90) {
            result += uppercase;
        } 
        else if (97 <= c && c <= 122) {
            result += lowercase;
        }
        else {
            result += input.charAt(i); 
        }
    }

    document.getElementById('string').value = result;
}

// custom modulus operator since JS don't calculate the correct remainder
function mod(x, y) {
    return (x % y + y) % y;
}
