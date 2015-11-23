class Node {
    constructor(el, options) {
        this.el = el;
        this.options = options;
        this.id = Math.random();
        this.postMessage('constructor', [this.el, this.options]);
    }
    append(node) {
        this.postMessage('append', [node]);
    }
    setContent(content) {
        this.postMessage('setContent', [content]);
    }
    render() {
        this.postMessage('render');
    }
    postMessage(method, args = []) {
        postMessage({
            method,
            args,
            id: this.id
        });
    }
    on(event) {
        //console.log('Event Handler set on node');
    }
}

class ReactDomStub {
    createElement(el, options) {
        return new Node(el, options);
    }
}

export default new ReactDomStub();
