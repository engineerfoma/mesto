export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    rendererItems() {
        this._renderItems.forEach(item => {
            this._renderer(item);
        });
    }

    addItem(item) {
        this._container.append(item);
    }
}