"use script";

interface Options {
  accordion: string;
}

export class AccordionMenu {
  $accordion: JQuery;

  constructor(private option: Options) {
    this.setContents();
    this.handleEvents();
  }

  setContents() {
    this.$accordion = $(this.option.accordion);
  }

  handleEvents() {
    this.$accordion.find("dt").on("click", e => {
      this.onClick(e.currentTarget);
    });
  }

  onClick(target) {
    $(target).next("dd").slideToggle(200);
  }
}