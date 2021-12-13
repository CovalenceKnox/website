/*!
* Start Bootstrap - One Page Wonder v6.0.4 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let wheight = 0;
let wwidth = 0;
let remsize = 0;

const ytembed_max = 600;

let resize_jobs = [];

window.onresize = () => {resize_jobs.forEach(e => e())}

window.onload = () => {
    // define constant
    resize_jobs.push(() => {
        wheight = window.innerHeight;
        wwidth = window.innerWidth;
        remsize = parseFloat(getComputedStyle(document.documentElement).fontSize);    
    })

    resize_jobs.push(() => $(".yt-embed").each((i, elm) => {
        resize_center(elm, ytembed_max);
    }));

    console.log("hehe")

    window.onresize()
}

function resize_center(elm, max) {
    const rect = elm.getBoundingClientRect();
    console.log(rect)
    console.log(wwidth)
    elm.setAttribute("width", `${Math.min(wwidth - rect.left - (remsize * 8), ytembed_max)}px`);
}