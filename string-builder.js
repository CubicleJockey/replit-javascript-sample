class StringBuilder{
    constructor(startText){
        this.#content = [];

        typeof startText === 'string' 
            ? this.#content.push(startText) 
            : this.#content.push(startText.toString());
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
}