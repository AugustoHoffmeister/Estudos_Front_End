export class PwTitle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open' })
        this.shadowRoot.innerHTML = `
        <style>
            h1{
                font-size: 30px;
                font-weight: bold;
            }
            
        </style>

            <h1><slot></slot></h1>
        `
    }
}

