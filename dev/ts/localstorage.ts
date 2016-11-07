interface Options {
    value: string;
    save: string;
    result: string;
    remove: string;
}

export class LocalStorage {
    setDataList: string; //localStorageのキー
    obj: {
        data: string;
    };
    key: string;
    $inputArea: JQuery;
    $saveBtn:JQuery;
    $resultArea: JQuery;
    $removeBtn: JQuery;

    constructor(private option: Options) {
        this.setContents();
        this.handleEvents();
        this.initialSet();
        this.showData();
    }

    setContents() {
        this.setDataList = "name";
        this.key = "data";
        this.obj = {
            "data": "名無し",
        };
        this.$inputArea = $(this.option.value);
        this.$saveBtn = $(this.option.save);
        this.$resultArea = $(this.option.result);
        this.$removeBtn = $(this.option.remove);
    }

    handleEvents() {
        this.$saveBtn.on("click", () => {
            this.setData();
            this.showData();
        });
        this.$removeBtn.on("click", () => {
            this.removeData();
            this.showData();
        });
    }

    setData() {
        let val = this.$inputArea.val();
        let obj = this.getData();
        if(!val) {
            obj = this.obj;
        } else {
            obj[this.key] = val;
        }
        // 1. オブジェクトを保存する
        this.setObject(obj);
    }

    setObject(obj) {
        //2. JSONデータに保存して登録する
        let str = JSON.stringify(obj);
        localStorage.setItem(this.setDataList, str);
    }

    getData() {
        // JSONデータに戻してから取得する
        let str = localStorage.getItem(this.setDataList);
        return JSON.parse(str);
    }

    showData() {
        this.$resultArea.empty(); //子要素をすべて削除
        let obj = this.getData();
        if(!obj) {
            obj = this.obj;
        }
        for(let key in obj) {
            this.$resultArea.append(obj[key]);
        }
    }

    removeData() {
        let obj = this.getData();
        if(obj) {
            delete obj[this.key];
            this.setObject(obj);
        }
        if(!obj[this.key]) {
            this.setObject(this.obj);
            this.$inputArea.val("");
        }
    }

    initialSet() {
        let data = this.getData();
        if(!data) {
            this.setObject(this.obj);
        }
    }
}
