/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppFetchId {
    constructor() {
        this.data = [];
        this.apiRootUrl = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';
    }
    load() {
        fetch(`${this.apiRootUrl}${this.match.params.name}`)
            .then((response) => {
            return response.json();
        }).then((data) => {
            this.data = data;
        });
    }
    componentWillLoad() {
        if (this.match.params.name) {
            this.load();
        }
        console.log('Component is being rendered');
    }
    close() {
        this.history.goBack();
    }
    render() {
        return (h("div", null,
            h("table", null,
                h("tr", null,
                    h("th", null, "Title : "),
                    h("th", null, "Date : ")),
                h("tr", null,
                    h("td", null,
                        " ",
                        this.data['title']),
                    h("td", null,
                        " ",
                        this.data['creationDate'])),
                h("tr", null,
                    h("th", null, "Author: "),
                    h("th", null, "Article : ")),
                h("tr", null,
                    h("td", null,
                        " ",
                        this.data['autor']),
                    h("td", null,
                        " ",
                        this.data['article']))),
            h("stencil-route-link", null,
                h("button", { onClick: () => this.close() }, "Retourner"))));
    }
    static get is() { return "app-fetch-id"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "apiRootUrl": {
            "state": true
        },
        "data": {
            "state": true
        },
        "history": {
            "type": "Any",
            "attr": "history"
        },
        "match": {
            "type": "Any",
            "attr": "match"
        }
    }; }
    static get style() { return "table {\n    font-family: arial, sans-serif;\n    width: 40%;\n    margin-left: 600px;\n    \n}\n\n\ntd {\n  margin-left: 600px;\n    border: 1px solid #ff3333;\n    text-align: left;\n    padding: 8px;\n    background-color: #ffffff;\n    \n  \n}\n\nth {\n    border: 1px solid #ff3333;\n    text-align: left;\n    padding: 8px;\n    background-color: #ff3333;\n    color: #ffffff;\n}\n\nbutton {\n    background: #ff3333;\n    color: white;\n    margin: 8px;\n    border: none;\n    font-size: 13px;\n    font-weight: 700;\n    text-transform: uppercase;\n    padding: 16px 20px;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n    box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n    outline: 0;\n    letter-spacing: .04em;\n    -webkit-transition: all .15s ease;\n    transition: all .15s ease;\n    cursor: pointer;\n    margin-left: 1215px;\n  }\n\n  #article{\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 140px; /*140 caractère c'est beaucoup et donc j'ai mis 140ps au lieu de 140ch*/\n  }"; }
}

export { AppFetchId };
