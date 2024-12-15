function generatePayload() {
    const tag = document.getElementById('tag').value;
    const event = document.getElementById('event').value;
    const payload = document.getElementById('payload').value;

    // Construct the XSS payload
    const generatedPayload = `<${tag} ${event}="${payload}">`;
    document.getElementById('output').value = generatedPayload;
}
