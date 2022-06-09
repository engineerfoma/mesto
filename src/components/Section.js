export default class Section {
    constructor({ items, renderer }, container) {
        this._renderItems = items;
        this._renderer = renderer;
        this._container = container;
    }

    rendererItems() {
        this._renderItems.forEach(item => {
            this._renderer(item);
        });
    }

    addItem(item) {
        this._container.prepend(item);
    }
}