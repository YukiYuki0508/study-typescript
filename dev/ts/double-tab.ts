interface Options {
  tab: string;
  tabContent: string;
}

export class DoubleTab {
  $tab: JQuery;
  $tabList: JQuery;
  $tabContent: JQuery;
  $tabContentList: JQuery;

  constructor(private option: Options) {
    this.setContents();
    this.handleEvents();
  }

  setContents() {
    this.$tab = $(this.option.tab);
    this.$tabList = this.$tab.find("li");
    this.$tabContent = $(this.option.tabContent);
    this.$tabContentList = this.$tabContent.find("li");
  }

  handleEvents() {
    this.$tabList.on("click", (e) => {
      this.onClick(e);
    });
  }

  onClick(e) {
    const _self = e.currentTarget;
    const index = this.$tabList.index(_self)%2;

    this.changeTabBg(index);
    this.changeTabContents(index);
  }

  changeTabBg(index) {
    this.$tabList.removeClass("select");
    $.each([index,index+2],(i,value) => {
      this.$tabList.eq(value).addClass("select");
    });
  }

  changeTabContents(index) {
    this.$tabContentList.eq(index).removeClass("hide");
    this.$tabContentList.eq(1-index).addClass("hide");
  }
}