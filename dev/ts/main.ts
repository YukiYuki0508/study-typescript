import { ScrollTop } from "./scrollTop";

$(function() {
    new ScrollTop('.to-top'); // <= 引数にボタンのエレメントを指定。
});


import { ToggleMenu } from "./toggleMenu";

$(function() {
    let options = {
        nav: ".nav--toggle",
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
        parts: [
            "input:not([name='agree'])",
            "textarea",
            "select"
        ],
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


import  { CoupledSelectBox } from "./coupled-selectbox";

$(function() {
    let options = {
        firstSelectName: "select[name='large-category']",
        secondSelectName: "select[name='medium-category']",
        titleSelectClass: "message",
    };

    new CoupledSelectBox(options);
});

import { FadeInLead } from "./fadein-lead";

$(function() {
    let options = {
        lead: ".fadein-lead p",
        leadNumber: 3,
        startSpeed: 1000,
        delaySpeed: 2500,
        fadeSpeed: 1000,
    };

    new FadeInLead(options);
});

import { OverImg } from "./over-img";

$(function() {
    let options = {
        imgContainer: ".imgContainer",
    };

    new OverImg(options);
});


import { SwitchImg } from "./switch-img";

$(function() {
    let options = {
        switchWidth: 768,
    };

    new SwitchImg(options);
});

import { ToggleImg } from "./toggle-img";

$(function() {
    let options = {
        imgContainer: ".imgContainer",
        beforeImg: ".img-before",
        afterImg: ".img-after",
    };

    new ToggleImg(options);
});

import { AppearBlowing } from "./appear-blowing";

$(function() {
    let options = {
        clickContent: ".hover-img",
        hoverContent: ".appear-img",
    };

    new AppearBlowing(options);
});

import { FadeinFadeout } from "./fadein-fadeout";

$(function() {
    let options = {
        toggleContent: ".img-fadein-fadeout-container",
        contentNumber: 3,
        fadeinSpeed: 500,
        fadeoutSpeed: 1500,
        deltaSpeed: 1500,
    };

    new FadeinFadeout(options);
});

import { ChangeMenu } from "./change-menu";

$(function() {
    let options = {
        header: ".header--with-nav",
        nav: ".nav--with-header",
        navBtn: ".onlySpMenu",
    };

    new ChangeMenu(options);
});

import { AppearSubMenu } from "./appear-sub-menu";

$(function() {
    let options = {
        mainMenu: ".nav__menu--with-submenu",
        header: ".nav--with-header-with-submenu",
    };

    new AppearSubMenu(options);
});

import { ChangeImg } from "./change-img";

$(function() {
    let options = {
        lead: ".img-wrapper img",
        leadNumber: 3,
        startSpeed: 1000,
        delaySpeed: 2500,
        fadeSpeed: 1000,
    };

    new ChangeImg(options);
});

import { LocalStorage } from "./localstorage";

$(function() {
    let options = {
        result: "#result",
        put: "#put",
        key: "#key",
        value: "#value",
        remove: "#remove",
        clear: "#clear",
    };

    new LocalStorage(options);
});
