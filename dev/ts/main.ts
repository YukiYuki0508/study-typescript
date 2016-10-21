import { ScrollTop } from "./scrollTop";

$(function() {
    new ScrollTop('.to-top'); // <= 引数にボタンのエレメントを指定。
});


import { ToggleMenu } from "./toggleMenu";

$(function() {
    let options = {
        nav: ".nav",
        btnOpen: ".open-menu",
        btnClose: ".close-menu",
    };

    new ToggleMenu(options);
});


import { Tab } from "./tab";

$(function() {
    let options = {
        tabs: ".tab-menu li",
        contents: ".tab-contents",
    };
    new Tab(options);
});


import { Human } from "./getset";

$(function() {
    var yuki = new Human();
    yuki.name = "yuki";
    // console.log(yuki.name);
});


import  { ToggleDisable } from "./agree";

$(function() {
    let options = {
        checkbox: "#agree",
        form: ".form-agree",
    };

    new ToggleDisable(options);
});


import  { AdditionalText } from "./input-other-content";

$(function() {
    let options = {
        commonName: "[name='job']",
        textName: "[name='job-other']",
        otherNum: 3,
    };

    new AdditionalText(options);
});
