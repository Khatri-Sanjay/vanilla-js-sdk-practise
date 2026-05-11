export class Greeting {
    constructor() {
        this.version = '1.0';
        console.log('Web SDK initialized.');
    }

    greet(name) {
        if (!name || typeof name !== 'string') {
            console.error('Invalid name provided');
            return 'Invalid name provided';
        }

        const greeting = `Hello, ${name}! Welcome to the Web SDK.`;
        console.log(greeting);
        return greeting;
    }

    greetInLanguage(name, language) {
        if (!name || typeof name !== 'string') {
            console.error('Invalid name provided');
            return 'Invalid name provided';
        }

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
    }
}