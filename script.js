// Main function to generate the payload
function generatePayload() {
    const tag = document.getElementById('tag').value; // Get selected HTML tag
    const event = document.getElementById('event').value; // Get selected event handler
    const payload = document.getElementById('payload').value; // Get user-entered JavaScript payload
    const encoding = document.getElementById('encoding').value; // Get selected encoding method
    const obfuscation = document.getElementById('obfuscation').checked; // Check if obfuscation is enabled

    // Construct the base payload
    let basePayload = `<${tag} ${event}="${payload}">`;

    // Apply encoding
    let encodedPayload = applyEncoding(basePayload, encoding);

    // Apply obfuscation if enabled
    if (obfuscation) {
        encodedPayload = applyObfuscation(encodedPayload);
    }

    // Display the final payload
    document.getElementById('output').value = encodedPayload;
}

// Function to apply encoding
function applyEncoding(payload, encodingType) {
    switch (encodingType) {
        case 'url':
            return encodeURIComponent(payload);
        case 'base64':
            return btoa(payload);
        case 'hex':
            return payload
                .split('')
                .map(char => `\\x${char.charCodeAt(0).toString(16)}`)
                .join('');
        default:
            return payload; // No encoding
    }
}

// Function to apply obfuscation
function applyObfuscation(payload) {
    // Insert random comments or spaces to break up the payload
    return payload
        .replace(/</g, '<!-- -->') // Break up "<"
        .replace(/>/g, '<!-- -->'); // Break up ">"
}

// Debugging function to log generated payload
function logDebugInfo(payload, encodedPayload, obfuscationEnabled) {
    console.log('Original Payload:', payload);
    console.log('Encoded Payload:', encodedPayload);
    console.log('Obfuscation Enabled:', obfuscationEnabled);
}
