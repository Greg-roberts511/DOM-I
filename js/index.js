const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//nav bar
let navBar = document.querySelectorAll("nav a");
navBar.forEach((e, i) => {
  e.textContent = siteContent["nav"][`nav-item-${i + 1}`];
});

// cta section
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];
ctaText.style.textAlign = "center";

let ctaBt = document.querySelector(".cta-text button");
ctaBt.textContent = siteContent["cta"]["button"];

//main content section

let head1 = document.querySelectorAll(".main-content h4");

let mainText = document.querySelectorAll(".main-content p");

//features

let fTitle = head1[0];

fTitle.textContent = siteContent["main-content"]["features-h4"];

let fText = mainText[0];

fText.textContent = siteContent["main-content"]["features-content"];

// about
let aTitle = head1[1];

aTitle.textContent = siteContent["main-content"]["about-h4"];

let aText = mainText[1];

aText.textContent = siteContent["main-content"]["about-content"];

//img
let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//bottom content
//serviecs
let servTitle = head1[2];
servTitle.textContent = siteContent["main-content"]["services-h4"];

let servText = mainText[2];
servText.textContent = siteContent["main-content"]["services-content"];

//product
let prodTitle = head1[3];
prodTitle.textContent = siteContent["main-content"]["product-h4"];

let prodText = mainText[3];
prodText.textContent = siteContent["main-content"]["product-content"];

//vision
let visTitle = head1[4];
visTitle.textContent = siteContent["main-content"]["vision-h4"];

let visText = mainText[4];
visText.textContent = siteContent["main-content"]["vision-content"];

//contact section
let conTitle = document.querySelector(".contact h4");
conTitle.textContent = siteContent["contact"]["contact-h4"];

let conText = document.querySelectorAll(".contact p");

//address
let address = conText[0];
address.textContent = siteContent["contact"]["address"];

//phone
let phoneNum = conText[1];
phoneNum.textContent = siteContent["contact"]["phone"];

//email
let email = conText[2];
email.textContent = siteContent["contact"]["email"];

//footer
let footText = document.querySelector("footer p");
footText.textContent = siteContent["footer"]["copyright"];
