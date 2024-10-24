 import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Traditional food of ",
  subtitle: "Bosnia and Herzegovina",
  img: heroimg,
  btntext: "Search products",
  videos: [
   /*  { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip }, */
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "Domaci Hljeb",
      text: "Whole wheat flour",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "3.99",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Cevapi",
      text: "U pola s lukom",
      rating: "5.0",
      btn: "Buy Now",
      img: psale1,
      price: "6.5",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Begova Čorba",
      text: "Delises",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "7.5",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "TRADITIONAL",
  title: "BOSNIAN HERZEGOVINA CUISINE",
  text: "The traditional Bosnian-Herzegovinian cuisine boasts a diversity of tastes and aromas, reflecting the rich cultural heritage of the region. Dishes like cevapi, burek, and sarma are often prepared with care and love, using authentic recipes passed down through generations. ",
  btn: "Explore More",
  url: "https://bookaweb.com/sr/blog/tradicionalna-bosanska-jela",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "SPECIALTIES OF BOSNIA AND HERZEGOVINA CUISINE",
  text: "Bosnian-Herzegovinian cuisine often utilizes locally sourced ingredients such as lamb, veal, and vegetables, imparting an authentic taste and texture to its dishes. Additionally, desserts like baklava, tufahija, and hurmašica represent an integral part of the rich tradition of sweet treats in this cuisine. Each meal is typically complemented by fresh homemade bread, such as somun or lepinja, baked in traditional stone ovens, adding a special dimension to every menu.",
  btn: "Explore More",
  url: "https://putnikofer.hr/hrana-i-recepti/tradicionalna-bosanska-kuhinja-najbolja-jela-koja-morate-probati/#google_vignette",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Top popular dishes",
  items: [
    {
      id: "0M0x1",
      title: "Rolana Tortilja",
      text: "Extra",
      rating: "5+",
      btn: "Buy Now",
      img: product7,
      price: "7.95",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Sirnica",
      text: "Blago rumena",
      rating: "5+",
      btn: "Buy Now",
      img: product2,
      price: "150",
      color: "from-orange-400 to-emerald-100",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Sirnica slagana",
      text: "Blago meka",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "3.0",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Corba sa persunom",
      text: "Blaga",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "6.0",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Sarma",
      text: "Extra quality",
      rating: "5+",
      btn: "Buy Now",
      img: product5,
      price: "6.00",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Kupus corba",
      text: "Blaga",
      rating: "5+",
      btn: "Buy Now",
      img: product6,
      price: "5.95",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Krompirusa",
      text: "Zvrk",
      rating: "5+",
      btn: "Buy Now",
      img: product1,
      price: "3.00",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Mantije",
      text: "extra quality",
      rating: "5+",
      btn: "Buy Now",
      img: product9,
      price: "7.95",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Punjene paprike",
      text: "Blago zacinjene",
      rating: "5+",
      btn: "Buy Now",
      img: product10,
      price: "6.95",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Tufahija",
      text: "Traditional best",
      rating: "5+",
      btn: "Buy Now",
      img: product12,
      price: "3.00",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Tulumbe",
      text: "Extra quality",
      rating: "5+",
      btn: "Buy Now",
      img: product11,
      price: "4.00",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Rolo sarma",
      text: "Extra ",
      rating: "5+",
      btn: "Buy Now",
      img: product8,
      price: "7.00",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "Top Stories",
  news: [
    {
      title: "",
      text: "Bosnian-Herzegovinian cuisine often utilizes locally sourced ingredients such as lamb, veal, and vegetables, imparting an authentic taste and texture to its dishes. Additionally, desserts like baklava, tufahija, and hurmašica represent an integral part of the rich tradition of sweet treats in this cuisine. Each meal is typically complemented by fresh homemade bread, such as somun or lepinja, baked in traditional stone ovens, adding a special dimension to every menu.",
      img: "https://putnikofer.hr/wp-content/uploads/2022/11/tradicionalni-burek.jpg",
      url: "https://www.hanumakocht.at/balkan-food/",
      like: "3/5",
      time: "11 Mins",
      by: "Jasmin L",
      btn: "Read More"
    },
    {
      title: "",
      text: "Bosnian-Herzegovinian culinary delights often feature locally sourced ingredients like succulent lamb, tender veal, and an array of vibrant vegetables, infusing each dish with an unmistakable regional flair. Indulgent desserts such as baklava, tufahija, and hurmašica serve as beloved staples, showcasing the intricate sweetness of Bosnian-Herzegovinian confectionery tradition. A meal is incomplete without the accompaniment of freshly baked homemade bread like somun or lepinja, crafted in traditional stone ovens to impart a rustic charm.",
      img: "https://putuj.ba/wp-content/uploads/Bosanski-cevap.jpg",
      time: "41 Mins",
      like: "5/5",
      url: "https://www.kuhar.ba/recepti/kategorije/bosanska-kuhinja/",
      by: "Rifet K",
      btn: "Read More"
    },
    {
      title: "",
      text: "The essence of Bosnian-Herzegovinian cuisine lies in its utilization of locally procured components, including flavorsome lamb, delicate veal, and a medley of vibrant vegetables, elevating each dish with a distinct regional essence. Delightful desserts like baklava, tufahija, and hurmašica stand as cherished symbols of the region's rich confectionery heritage, boasting intricate sweetness and flavor profiles. No meal is truly complete without the addition of freshly baked homemade bread, such as somun or lepinja, lovingly prepared in traditional stone ovens, imparting a rustic charm to every bite.",
      img: "https://putnikofer.hr/wp-content/uploads/2022/11/sarma.jpg",
      time: "2 Hours",
      url: "https://zepce.ba/tradicionalna-bosanska-kuhinja-5-slatkih-i-5-slanih-jela-za-prste-polizat/",
      like: "5/5",
      by: "Dzenan H",
      btn: "Read More"
    },
    {
      title: "",
      text: "The heart of Bosnian-Herzegovinian gastronomy beats with locally sourced ingredients like tender lamb, succulent veal, and a colorful array of seasonal vegetables, imbuing every dish with an authentic regional touch. Tempting desserts such as baklava, tufahija, and hurmašica serve as delightful manifestations of the region's culinary prowess, offering intricate flavors and textures. An essential element of any meal experience is the inclusion of freshly baked homemade bread, be it somun or lepinja, meticulously crafted in traditional stone ovens, infusing each bite with a rustic allure.",
      img: "https://podravkaiovariations.blob.core.windows.net/ac7a218c-63d0-11eb-840e-0242ac120059/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/480x360-f2b21622-64bc-11eb-a2bd-0242ac130010.webp",
      time: "7 Months",
      url: "https://www.coolinarika.com/inspiracija/bosanska-jela-4fcf107e-610e-11eb-aaf9-0242ac12002d",
      like: "5/5",
      by: "Safet R",
      btn: "Read More"
    },
    {
      title: "",
      text: "Bosnian-Herzegovinian cuisine celebrates the bounty of locally available ingredients, from flavorful lamb and tender veal to a vibrant assortment of vegetables, ensuring each dish encapsulates the essence of the region. Decadent desserts like baklava, tufahija, and hurmašica exemplify the region's rich confectionery tradition, offering a symphony of sweet flavors and textures. Complementing every meal is the presence of freshly baked homemade bread, such as somun or lepinja, expertly prepared in traditional stone ovens, infusing each slice with an irresistible rustic charm.",
      img: "https://static.klix.ba/media/images/vijesti/140118013.jpg",
      time: "1 Months",
      url: "https://bosanskakuhinja.ba/recepti",
      like: "3/5",
      by: "Adnan K",
      btn: "Read More"
    },
    {
      title: "",
      text: "Bosnian-Herzegovinian culinary artistry shines through the use of locally procured ingredients like succulent lamb, tender veal, and a vibrant selection of vegetables, ensuring each dish embodies the essence of the region. Irresistible desserts like baklava, tufahija, and hurmašica showcase the region's rich tradition of sweets, with intricate flavors and textures to delight the palate. A meal experience is elevated by the presence of freshly baked homemade bread, whether it's somun or lepinja, crafted with care in traditional stone ovens, imparting a comforting rustic appeal.",
      img: "https://putovanjazapet.com/wp-content/uploads/2022/02/Begova-corba-bosanska-jela-1024x683.jpg",
      time: "25 Days",
      url: "https://www.coolinarika.com/inspiracija/bosanska-kuhinja-52d23c1a-610e-11eb-878d-0242ac120067",
      like: "3/5",
      by: "Senad B",
      btn: "Read More"
    },
    {
      title: "",
      text: "The soul of Bosnian-Herzegovinian cuisine lies in its reliance on locally sourced elements such as savory lamb, tender veal, and an array of vibrant vegetables, resulting in dishes that capture the very essence of the region. Delightful desserts like baklava, tufahija, and hurmašica serve as testaments to the region's rich confectionery heritage, offering complex flavors and textures. Completing the meal is the addition of freshly baked homemade bread, be it somun or lepinja, painstakingly prepared in traditional stone ovens, lending each bite a nostalgic rustic quality.",
      img: "https://putovanjazapet.com/wp-content/uploads/2021/09/pita-sa-Prokoskog-jezera-1024x768.jpg",
      url: "https://recepti.index.hr/recepti/bosanska-kuhinja",
      time: "6 Days",
      like: "4/5",
      by: "Omer A",
      btn: "Read More"
    },
    {
      title: "",
      text: "Bosnian-Herzegovinian culinary craftsmanship flourishes with the use of locally procured ingredients like succulent lamb, tender veal, and an assortment of colorful vegetables, ensuring each dish reflects the distinctive flavors of the region. Decadent desserts like baklava, tufahija, and hurmašica epitomize the rich confectionery tradition of the region, boasting intricate sweetness and texture. Enhancing the dining experience is the inclusion of freshly baked homemade bread, whether somun or lepinja, lovingly made in traditional stone ovens, imparting a comforting rustic essence.",
      img: "https://podravkaiovariations.blob.core.windows.net/74af012c-c9d4-11eb-9ea9-623a724d11be/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/480x360-f2b21622-64bc-11eb-a2bd-0242ac130010.webp",
      url: "https://www.pinterest.com/2e60i4rxifwyif9/bosanska-kuhinja/",
      time: "5 Days",
      like: "4/5",
      by: "Mehmed K",
      btn: "Read More"
    },
    {
      title: "",
      text: "The essence of Bosnian-Herzegovinian cuisine lies in its reliance on locally sourced components such as flavorful lamb, tender veal, and an array of fresh vegetables, resulting in dishes that encapsulate the very essence of the region. Tempting desserts like baklava, tufahija, and hurmašica stand as testament to the region's rich confectionery heritage, offering a symphony of intricate flavors and textures. Completing the meal is the presence of freshly baked homemade bread, whether somun or lepinja, meticulously crafted in traditional stone ovens, infusing each bite with a comforting rustic charm.",
      img: "https://recepti-api.index.hr/img/preview/medium/recipe/1feb781c-ab3d-4dd7-bec0-0ae5b3c7c4a4/shutterstock_1723231303.jpg",
      url: "https://putovanjazapet.com/najbolja-jela-u-bosni-i-hercegovini/",
      time: "5 Days",
      like: "4/5",
      by: "Osman H",
      btn: "Read More"
    },
  ],
};


const footerAPI = {
  titles: [ {title: "About Bosnia"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Prupose"},
      {link: "Sustainability"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Gift Card Balance"},
      {link: "Contact Us"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promotions"},
      {link: "Find A Store"},
      {link: "Signup"},
      {link: "Bosnia Jouneral"},
      {link: "Send Us Feeback"},
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };
 