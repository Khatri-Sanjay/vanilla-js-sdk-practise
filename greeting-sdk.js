// Vanilla JS SDK implementation
(function(global) {
    // Greeting class constructor
    function Greeting() {
        this.version = '1.0';
        console.log('Web SDK initialized.');
    }

    // Greet method
    Greeting.prototype.greet = function(name) {
        if (!name || typeof name !== 'string') {
            console.error('Invalid name provided');
            return null;
        }

        const greeting = `Hello, ${name}! Welcome to the Web SDK.`;
        console.log(greeting);
        return greeting;
    };

    // Advanced method: Multilingual greeting
    Greeting.prototype.greetInLanguage = function(name, language) {
        const greetings = {
            'en': `Hello, ${name}!`,
            'es': `¡Hola, ${name}!`,
            'fr': `Bonjour, ${name}!`,
            'de': `Hallo, ${name}!`,
            'default': `Hello, ${name}!`
        };

        const greeting = greetings[language] || greetings['default'];
        console.log(greeting);
        return greeting;
    };

    // Expose the Greeting constructor to the global scope
    global.Greeting = Greeting;
})(typeof window !== 'undefined' ? window : global);