interface Options {
    result: string;
    put: string;
    key: string;
    value: string;
    remove: string;
    clear: string;
}

export class LocalStorage {
    key: string; // localStorageのキー
    obj: {
        foo: string;
        bar: string;
        hoge: string;
    };
    $result:JQuery;
    $put: JQuery;
    $key: JQuery;
    $value: JQuery;
    $remove: JQuery;
    $clear: JQuery;

    constructor(private option: Options) {
        this.initialize();
        this.setContents();
        this.handleEvents();
        this.setData();
        this.showStorage();
    }

    initialize() {
        this.key = "test";
        this.obj= {
            "foo": "aaa",
            "bar": "bbb",
            "hoge": "ccc"
        };
    }

    setContents() {
        this.$result = $(this.option.result);
        this.$put = $(this.option.put);
        this.$key = $(this.option.key);
        this.$value = $(this.option.value);
        this.$remove = $(this.option.remove);
        this.$clear = $(this.option.clear);
    }

    showStorage() {
        this.$result.empty(); // empty():要素内の子要素(テキストも対象)を全て削除します。
        let obj = this.getObject();
        for(let key in obj) {
            this.$result.append("<p>" + key + ":" + obj[key] + "</p>");
        }
    }

    getObject () {
        let str = localStorage.getItem(this.key);
        return JSON.parse(str);
    }

    setObject(obj) {
        let str = JSON.stringify(obj);
        localStorage.setItem(this.key, str);
    }

    handleEvents() {
        this.$put.on("click", () => {
            this.additionKeyValue();
        });
        this.$remove.on("click", () => {
            this.removeValue();
        });
        this.$clear.on("click", () => {
            this.removeAllData();
        });
    }

    additionKeyValue() {
            let key = this.$key.val();
            let value = this.$value.val();
            let obj = this.getObject();
            if(!obj){
                obj = new Object();
            }
            obj[key] = value;
            this.setObject(obj);
            this.showStorage();
    }

    removeValue() {
            let key = this.$key.val();
            let obj = this.getObject();
            if(obj) {
                delete obj[key];
                this.setObject(obj);
                this.showStorage();
            }
    }

    removeAllData() {
            localStorage.clear();
            this.showStorage();
    }

    setData() {
        let data = this.getObject();
        if(!data) {
            this.setObject(this.obj);
        }
    }
}
