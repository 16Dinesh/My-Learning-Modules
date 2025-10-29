const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(`Log: ${message}`);
    this.emit('messageLogged', { id: 1, text: message });
  }
}

const logger = new Logger();

logger.on('messageLogged', (data) => {
  console.log('Listener called with data:', data);
});

logger.log('Hello from Node.js!');
