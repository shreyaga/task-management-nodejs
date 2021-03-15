class Logger {
    debug(value){
        console.log(`[DEBUG] ${value}`);
    }
    info(value){
        console.log(`[INFO] ${value}`);
    }
    error(value){
        console.log(`[ERROR] ${value}`);
    }
}

module.exports = new Logger();