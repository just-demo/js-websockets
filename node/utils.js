module.exports = {
    now() {
        return new Date().toISOString();
    },

    response(message) {
        return JSON.stringify({
            time: this.now(),
            counter: message ? JSON.parse(message).counter + 1 : 1
        })
    }
};