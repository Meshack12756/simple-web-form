import init, { greet } from './wasm_greetings';

async function initWasm() {
    await init();
}

initWasm();

function processForm() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const email = document.getElementById('email').value;
    
    const message = `Hello ${name}, ` + greet(age);
    
    document.getElementById('result').innerText = message;
}
