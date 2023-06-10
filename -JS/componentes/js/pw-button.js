export class PwButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open' })
        this.shadowRoot.innerHTML = `
        <style>
            button{
                background: green;
                padding: 10px;
                border-radius: 5px;
                color: white;
                border: nome;
            }
            button:hover{
                background: blue;
            }
            
        </style>

            <button><slot></slot></button>
        `
    }
}

