class StringBuilder{
    #content = [];

    constructor(startText){
        append(startText);
    }

    appendLine(text){
        append(text);
        this.#content.push('\n');
    }

    append(text){
        typeof text === 'string' 
            ? this.#content.push(text) 
            : this.#content.push(text.toString());
    }

    clear(){
        this.#content = [];
    }

    toString(){
        this.#content.join('');   
    }
}

module.exports = { StringBuilder };