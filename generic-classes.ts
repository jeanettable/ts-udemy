// Generic Classes:
class DataStorage <T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    };

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    };

    getItems() {
        return [...this.data];
    }
};

const newStorage = new DataStorage<string>()
// newStorage.addItem(7);  //will throw error, since 7 is not a string
newStorage.addItem('hello');