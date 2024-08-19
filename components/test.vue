<script setup>
import gsap from "gsap";

onMounted(() => {
    gsap.to(".box", {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
            trigger: ".gradient-blue",
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: true,
            markers: true,
        }
    })
});
</script>

<template>
    <section class="panel center gradient-green"></section>
    <section class="panel center gradient-blue">
        <div class="box">Box</div>
    </section>
    <section class="panel center gradient-orange"></section>
</template>

<style scoped>
/* commonly used utils */

.pad-s {
    padding-top: var(--space-s);
    padding-bottom: var(--space-s);
}

.pad-m {
    padding-top: var(--space-m);
    padding-bottom: var(--space-m);
}

.pad-l {
    padding-top: var(--space-l);
    padding-bottom: var(--space-l);
}

.pad-xl {
    padding-top: var(--space-xl);
    padding-bottom: var(--space-xl);
}

.flow>*+* {
    margin-top: 1em;
}

.text-center {
    text-align: center;
}

.box {
    width: 75px;
    height: 75px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: var(--green);
    font-weight: 600;
    color: var(--dark);
    line-height: 1.2;
    will-change: transform;
}

.circle {
    width: 75px;
    height: 75px;
    border-radius: 99px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: var(--green);
    font-weight: 600;
    color: var(--dark);
    line-height: 1.2;
    will-change: transform;
}

/* always doing this */
.flex-row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

/* and this */

.center {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* colors */

.green {
    background-color: var(--green);
}

.blue {
    background-color: var(--blue);
}

.purple {
    background-color: var(--purple);
}

.red {
    background-color: var(--red);
}

.orange {
    background-color: var(--orange);
}

.dark {
    background-color: var(--dark);
    color: var(--light);
}

.light {
    background-color: var(--light);
    color: var(--dark);
}

.text-light {
    color: var(--light);
}

.text-dark {
    color: var(--dark);
}

.gray,
.grey {
    background-color: var(--grey);
}

body {
    color: var(--color-surface-white);
    background-color: var(--dark);
    font-family: Mori, sans-serif;
    font-weight: 400;
    margin: 0;
    font-size: var(--step-0);
    line-height: 1.45;
}

h1,
h2,
h3,
h4 {
    margin: 10px 0 10px 0;
    font-weight: 400;
    line-height: 1.2;
}

h1,
.h1 {
    font-size: var(--step-4);
}

h2,
.h2 {
    font-size: var(--step-3);
}

h3,
.h3 {
    font-size: var(--step-2);
}

h4,
.h4,
.lead {
    font-size: var(--step-1);
}

a {
    color: var(--green);
    font-weight: bold;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.light a {
    color: var(--green-dark);
}

/* button:not('.box') { breaking for some reason in codepen? */
button {
    display: inline-block;
    outline: none;
    padding: 8px 14px;
    background: var(--dark);
    border: solid 2px var(--light);
    color: var(--light);
    text-decoration: none;
    border-radius: 99px;
    padding: 12px 25px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    line-height: 18px;
}

.gsap-logo {
    width: 20vw;
    max-width: 150px;
    position: fixed;
    bottom: 15px;
    right: 15px;
    mix-blend-mode: difference;
    z-index: 9999;
}

.gsap-logo img {
    width: 100%;
}

.gsap-3-logo {
    width: 20vw;
    max-width: 150px;
    position: fixed;
    bottom: 15px;
    right: 15px;
}

/* panels  */

.panel {
    min-height: 100vh;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
}

.panel.gray {
    background-color: #777;
    background-image: var(--gradient-macha);
}

.panel.blue {
    background-color: #2c7ad2;
    background-image: var(--gradient-summer-fair);
}

.panel.orange {
    background-color: #e77614;
    background-image: var(--gradient-orange-crush);
}

.panel.red {
    background-color: #c82736;
    background-image: var(--gradient-lipstick);
}

.panel.purple {
    background-color: #8d3dae;
    background-image: var(--gradient-purple-haze);
}

.panel.green {
    background-color: #28a92b;
    background-image: var(--gradient-macha);
}

/* SCROLL DOWN */
.scroll-down {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);
    color: black;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 16px;
    overflow: visible;
}

.scroll-down .arrow {
    position: relative;
    top: -4px;
    margin: 0 auto;
    width: 20px;
    height: 20px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHBhdGggZmlsbD0iYmxhY2siIGQ9Ik00ODMuMiwxOTIuMmMtMjAuNS0yMC41LTUzLjUtMjAuOC03My43LTAuNkwyNTcsMzQ0LjFMMTA0LjUsMTkxLjZjLTIwLjItMjAuMi01My4yLTE5LjktNzMuNywwLjYKCWMtMjAuNSwyMC41LTIwLjgsNTMuNS0wLjYsNzMuN2wxOTAsMTkwYzEwLjEsMTAuMSwyMy40LDE1LjEsMzYuOCwxNWMxMy4zLDAuMSwyNi43LTQuOSwzNi44LTE1bDE5MC0xOTAKCUM1MDMuOSwyNDUuNyw1MDMuNywyMTIuNyw0ODMuMiwxOTIuMnoiLz4KPC9zdmc+);
    background-size: contain;
}

/* h1, h2, p, li {
    max-width: 800px;
  breaking stuff
  }
  */
.panel p strong,
.panel li strong {
    color: white;
    font-weight: 400;
}

.panel p code,
.panel li code {
    background-color: rgba(255, 255, 255, 0.15);
    padding: 2px 4px;
    border-radius: 5px;
}

.panel li {
    margin: 0;
}

pre.prettyprint {
    max-width: 100%;
    overflow: auto;
}

ul pre.prettyprint {
    margin-left: -0.5rem;
}

/* prism */

pre {
    --ifm-pre-background: var(--ifm-color-gray-800) !important;
    --ifm-font-family-monospace: "Fraktion Mono";
}

/* Plain text style */
code {
    border: none;
    border-radius: 4px;
    padding: 1rem;
    font-weight: bold;
    font-size: 1.2rem;
    vertical-align: baseline;
    background: #28292b;
    color: #f5f4e6de;
}

/* Comment */
code .token.comment {
    color: #9c9c9c;
    font-style: italic;
}

/* String and inserted */
code .token.string,
code .token.inserted {
    color: #63d55a;
}

/* Number */
code .token.number {
    color: rgb(247, 140, 108);
}

/* Builtin, char, constant, and function */
code .token.builtin,
code .token.char,
code .token.constant,
code .token.function {
    color: rgb(130, 170, 255);
}

/* Punctuation and selector */
code .token.punctuation,
code .token.selector {
    color: rgb(199, 146, 234);
}

/* Variable */
code .token.variable {
    color: rgb(191, 199, 213);
}

/* Class-name and attr-name */
code .token.class-name,
code .token.attr-name {
    color: rgb(255, 203, 107);
}

/* Tag and deleted */
code .token.tag,
code .token.deleted {
    color: rgb(255, 85, 114);
}

/* Operator */
code .token.operator {
    color: rgb(137, 221, 255);
}

/* Boolean */
code .token.boolean {
    color: rgb(255, 88, 116);
}

/* Keyword */
code .token.keyword {
    font-style: italic;
}

/* Doctype */
code .token.doctype {
    color: rgb(199, 146, 234);
    font-style: italic;
}

/* Namespace */
code .token.namespace {
    color: rgb(178, 204, 214);
}

/* URL */
code .token.url {
    color: rgb(221, 221, 221);
}

/* Hide elements visually, but not for screenreaders by clipping it */

.vh {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
}

/* checkboxes */

/*  Add a :before to each label and style this as the checkbox you want to have */
.checkbox label {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
}

.checkbox label:before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 2px;
    background: var(--light);
    display: inline-block;
    margin-right: 10px;
}

.checkbox input[type="checkbox"]:checked~label:before {
    background: var(--green) no-repeat center;
    background-size: 12px 12px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ1LjcwMSA0NS43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NS43MDEgNDUuNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMC42ODcsMzguMzMyYy0yLjA3MiwyLjA3Mi01LjQzNCwyLjA3Mi03LjUwNSwwTDEuNTU0LDI2LjcwNGMtMi4wNzItMi4wNzEtMi4wNzItNS40MzMsMC03LjUwNCAgICBjMi4wNzEtMi4wNzIsNS40MzMtMi4wNzIsNy41MDUsMGw2LjkyOCw2LjkyN2MwLjUyMywwLjUyMiwxLjM3MiwwLjUyMiwxLjg5NiwwTDM2LjY0Miw3LjM2OGMyLjA3MS0yLjA3Miw1LjQzMy0yLjA3Miw3LjUwNSwwICAgIGMwLjk5NSwwLjk5NSwxLjU1NCwyLjM0NSwxLjU1NCwzLjc1MmMwLDEuNDA3LTAuNTU5LDIuNzU3LTEuNTU0LDMuNzUyTDIwLjY4NywzOC4zMzJ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}

.flair {
    width: 100px;
    height: 100px;
    background-image: url("https://assets.codepen.io/16327/flair.png");
    background-size: contain;
    background-repeat: no-repeat;
    will-change: transform;
}

.flair--2 {
    background-image: url("https://assets.codepen.io/16327/flair-2.png");
}

.flair--3 {
    background-image: url("https://assets.codepen.io/16327/flair-3.png");
}

.flair--4 {
    background-image: url("https://assets.codepen.io/16327/flair-4.png");
}

.flair--5 {
    background-image: url("https://assets.codepen.io/16327/flair-5.png");
}

.flair--6 {
    background-image: url("https://assets.codepen.io/16327/flair-6.png");
}

.flair--7 {
    background-image: url("https://assets.codepen.io/16327/flair-7.png");
}

.flair--8 {
    background-image: url("https://assets.codepen.io/16327/flair-8.png");
}

.flair--9 {
    background-image: url("https://assets.codepen.io/16327/flair-9.png");
}

.flair--10 {
    background-image: url("https://assets.codepen.io/16327/flair-10.png");
}

.flair--11 {
    background-image: url("https://assets.codepen.io/16327/flair-11.png");
}

.flair--12 {
    background-image: url("https://assets.codepen.io/16327/flair-12.png");
}

.flair--13 {
    background-image: url("https://assets.codepen.io/16327/flair-13.png");
}

.flair--14 {
    background-image: url("https://assets.codepen.io/16327/flair-14.png");
}

.flair--15 {
    background-image: url("https://assets.codepen.io/16327/flair-15.png");
}

.flair--16 {
    background-image: url("https://assets.codepen.io/16327/flair-16.png");
}

.flair--17 {
    background-image: url("https://assets.codepen.io/16327/flair-17.png");
}

.flair--18 {
    background-image: url("https://assets.codepen.io/16327/flair-18.png");
}

.flair--19 {
    background-image: url("https://assets.codepen.io/16327/flair-19.png");
}

.flair--20 {
    background-image: url("https://assets.codepen.io/16327/flair-20.png");
}

.flair--21 {
    background-image: url("https://assets.codepen.io/16327/flair-21.png");
}

.flair--22 {
    background-image: url("https://assets.codepen.io/16327/flair-22.png");
}

.flair--23 {
    background-image: url("https://assets.codepen.io/16327/flair-23.png");
}

.flair--24 {
    background-image: url("https://assets.codepen.io/16327/flair-24.png");
}

.flair--25 {
    background-image: url("https://assets.codepen.io/16327/flair-25.png");
}

.flair--26 {
    background-image: url("https://assets.codepen.io/16327/flair-26.png");
}

.flair--27 {
    background-image: url("https://assets.codepen.io/16327/flair-27.png");
}

.flair--28 {
    background-image: url("https://assets.codepen.io/16327/flair-28.png");
}

.flair--29 {
    background-image: url("https://assets.codepen.io/16327/flair-29.png");
}

.flair--30 {
    background-image: url("https://assets.codepen.io/16327/flair-30.png");
}

.flair--31 {
    background-image: url("https://assets.codepen.io/16327/flair-31.png");
}

.flair--32 {
    background-image: url("https://assets.codepen.io/16327/flair-32.png");
}

.flair--33 {
    background-image: url("https://assets.codepen.io/16327/flair-33.png");
}

.flair--34 {
    background-image: url("https://assets.codepen.io/16327/flair-34.png");
}

.flair--35 {
    background-image: url("https://assets.codepen.io/16327/flair-35.png");
}

.flair-cont {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    flex-wrap: wrap;
}

.gradient-green {
    background: var(--gradient-macha),
        url('https://assets.codepen.io/16327/noise-e82662fe.png');
    /* Replace with the path to your noise texture image */
    background-blend-mode: color-dodge;
    /* Blend the noise texture with the gradient */
}

.gradient-green-2 {
    background: var(--gradient-emerald-city),
        url('https://assets.codepen.io/16327/noise-e82662fe.png');
    /* Replace with the path to your noise texture image */
    background-blend-mode: color-dodge;
    /* Blend the noise texture with the gradient */
}

.gradient-orange {
    background: var(--gradient-orange-crush),
        url('https://assets.codepen.io/16327/noise-e82662fe.png');
    /* Replace with the path to your noise texture image */
    background-blend-mode: color-dodge;
    /* Blend the noise texture with the gradient */
}

.gradient-purple {
    background: var(--gradient-purple-haze),
        url('https://assets.codepen.io/16327/noise-e82662fe.png');
    /* Replace with the path to your noise texture image */
    background-blend-mode: color-dodge;
    /* Blend the noise texture with the gradient */
}

.gradient-blue-2 {
    background: var(--gradient-summer-fair),
        url('https://assets.codepen.io/16327/noise-e82662fe.png');
    /* Replace with the path to your noise texture image */
    background-blend-mode: color-dodge;
    /* Blend the noise texture with the gradient */
}

.gradient-blue {
    background: var(--color-ui-gradient),
        url('https://assets.codepen.io/16327/noise-e82662fe.png');
    /* Replace with the path to your noise texture image */
    background-blend-mode: color-dodge;
    /* Blend the noise texture with the gradient */
}

.gradient-red {
    background: var(--gradient-lipstick),
        url('https://assets.codepen.io/16327/noise-e82662fe.png');
    /* Replace with the path to your noise texture image */
    background-blend-mode: color-dodge;
    /* Blend the noise texture with the gradient */
}



.noise {
    position: relative;
}

.noise:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: url('https://assets.codepen.io/16327/noise-e82662fe.png');
    opacity: 0.4;
    pointer-events: none;
}
</style>