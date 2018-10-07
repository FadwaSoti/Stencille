/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppFetch {
    constructor() {
        this.name = '/fetch/';
        this.apiRootUrl = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';
    }
    load() {
        fetch(`${this.apiRootUrl}`).then(rsp => {
            return rsp.json();
        }).then(data => {
            this.data = data;
        }).catch((err) => {
            console.error('Could not load data', err);
        });
    }
    componentWillLoad() {
        console.log('Component is being rendered');
        this.load();
    }
    componentDidLoad() {
        this.load();
        console.log('Component has been rendered');
    }
    componentDidUpdate() {
        this.load();
        console.log('Component did update');
    }
    render() {
        if (this.data && this.data.length > 0) {
            return (h("div", null, this.data.map((data) => h("div", null,
                h("table", null,
                    h("tr", null,
                        h("th", null, "Title : "),
                        h("th", null, "Date : ")),
                    h("tr", null,
                        h("td", null,
                            " ",
                            data.title),
                        h("td", null,
                            " ",
                            data.creationDate)),
                    h("tr", null,
                        h("th", null, "Author: "),
                        h("th", null, "Article : ")),
                    h("tr", null,
                        h("td", null,
                            " ",
                            data.autor),
                        h("td", { id: "article" },
                            " ",
                            data.article))),
                h("stencil-route-link", { url: this.name + data._id },
                    h("button", null, "Details"))))));
        }
        else {
            return (" Nothing to render ");
        }
    }
    static get is() { return "app-fetch"; }
    static get properties() { return {
        "data": {
            "state": true
        },
        "load": {
            "method": true
        },
        "name": {
            "type": String,
            "attr": "name"
        }
    }; }
    static get style() { return "table {\n    font-family: arial, sans-serif;\n    width: 40%;\n    margin-left: 600px;\n    \n}\n\n\ntd {\n  margin-left: 600px;\n    border: 1px solid #ff3333;\n    text-align: left;\n    padding: 8px;\n    background-color: #ffffff;\n    \n  \n}\n\nth {\n    border: 1px solid #ff3333;\n    text-align: left;\n    padding: 8px;\n    background-color: #ff3333;\n    color: #ffffff;\n}\n\nbutton {\n    background: #ff3333;\n    color: white;\n    margin: 8px;\n    border: none;\n    font-size: 13px;\n    font-weight: 700;\n    text-transform: uppercase;\n    padding: 16px 20px;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n    box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n    outline: 0;\n    letter-spacing: .04em;\n    -webkit-transition: all .15s ease;\n    transition: all .15s ease;\n    cursor: pointer;\n    margin-left: 1215px;\n  }\n\n  #article{\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 140px; /*140 caractère c'est beaucoup et donc j'ai mis 140ps au lieu de 140ch*/\n  }"; }
}

class AppHome {
    render() {
        return (h("div", { class: 'app-home' },
            h("app-fetch", null),
            h("br", null)));
    }
    static get is() { return "app-home"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".app-home {\n  padding: 10px;\n}\n\nbutton {\n  background: #ff3333;\n  color: white;\n  margin: 8px;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 16px 20px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n  box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n  outline: 0;\n  letter-spacing: .04em;\n  -webkit-transition: all .15s ease;\n  transition: all .15s ease;\n  cursor: pointer;\n  margin-left: 1229px;\n}\n  \nbutton:hover {\n  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n  box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n  -webkit-transform: translateY(1px);\n  transform: translateY(1px);\n}"; }
}

export { AppFetch, AppHome };
