export default class StringBuilder{
    constructor(startText){
        this.#content = [];

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
        this#conent.join('');   
    }
}