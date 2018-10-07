/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppAdd {
    constructor() {
        this.apiRootUrl = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';
        this.autor = null;
        this.title = null;
        this.article = null;
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        data.append("json", JSON.stringify(data));
        fetch(`${this.apiRootUrl}`, {
            method: 'POST',
            body: JSON.stringify({
                title: this.title.value,
                autor: this.autor.value,
                article: this.article.value
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => { alert('Les données sont bien enregistrées!'); this.goback(); });
    }
    componentWillLoad() {
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    goback() {
        this.history.goBack();
    }
    render() {
        return (h("div", { class: "app-add", id: "stage" },
            h("form", { onSubmit: this.handleSubmit },
                h("div", { class: "row" },
                    h("div", { class: "col-25" },
                        h("b", null, "Titre:")),
                    h("div", { class: "col-75" },
                        h("input", { type: "text", id: "fname", name: "titre", placeholder: "Le titre...", ref: (title) => this.title = title, required: true }))),
                h("div", { class: "row" },
                    h("div", { class: "col-25" },
                        h("b", null, "Author:")),
                    h("div", { class: "col-75" },
                        h("input", { type: "text", id: "lname", name: "author", placeholder: "The author...", ref: (autor) => this.autor = autor, required: true }))),
                h("div", { class: "row" },
                    h("div", { class: "col-25" },
                        h("b", null, "Contenu:")),
                    h("div", { class: "col-75" },
                        h("input", { type: "text", id: "lname", name: "article", placeholder: "Ecrivez le contenu... ", ref: (article) => this.article = article, required: true }))),
                h("br", null),
                h("div", { class: "row" },
                    h("input", { type: "submit", value: "Ajouter" })))));
    }
    static get is() { return "app-add"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "apiRootUrl": {
            "state": true
        },
        "history": {
            "type": "Any",
            "attr": "history"
        }
    }; }
    static get style() { return "* {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n\ninput[type=text], select, textarea {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    resize: vertical;\n}\nb{\n    color: white;\n}\n\ninput[type=submit] {\n    color: #ff3333;\n    background-color: white;\n    padding: 12px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    float: right;\n}\n\ninput[type=submit]:hover {\n    color: white;\n    background-color: #383737;\n}\n\n.app-add {\n    border-radius: 5px;\n    background-color: #ff3333;\n    width: 900px;\n    padding: 20px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.col-25 {\n    float: left;\n    width: 25%;\n    margin-top: 6px;\n\n}\n\n.col-75 {\n    float: left;\n    width: 75%;\n    margin-top: 6px;\n\n}\n\n/* Clear floats after the columns */\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n\@media screen and (max-width: 600px) {\n    .col-25, .col-75, input[type=submit] {\n        width: 100%;\n        margin-top: 0;\n    }\n}"; }
}

export { AppAdd };
