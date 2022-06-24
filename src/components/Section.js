export default class Section {
    constructor({ renderer }, container) {
        this._renderer = renderer;
        this._container = container;
    }

    rendererItems(items) {
        items.forEach(item => {
            this._renderer(item);
        });
    }

    addItem(item) {
        this._container.prepend(item);
    }
}