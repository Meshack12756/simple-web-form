function processForm() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const email = document.getElementById('email').value;
    
    let message;
    
    if (age <= 18) {
        message = `Hey ${name}, you're a young star! 🌟`;
    } else if (age <= 35) {
        message = `Hello ${name}, you're in your prime! 🚀`;
    } else if (age <= 50) {
        message = `Hi ${name}, age is just a number! 🌟`;
    } else {
        message = `Greetings ${name}, wisdom comes with age! 🌟`;
    }
    
    document.getElementById('result').innerText = message;
}
