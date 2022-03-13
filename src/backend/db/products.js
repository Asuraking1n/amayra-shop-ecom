import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "FAME AND PARTNERS TALL VALENCIA MAXI DRESS",
    price: "4999",
    description:'With an eye to the catwalks, Fame and Partners Tall apply their cool and individual style to a collection of hand-curated designs, exclusively for ASOS.',
    categoryName: "women",
    rating:4,
    stock:'true',
    imgOne:"https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/6369928-1-mint.jpg",
    imgTwo:"https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/6369928-2.jpg",
    imgThree:"https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/6369928-3.jpg",
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/6369928-3.jpg'
  },
  {
    _id: uuid(),
    title: "OUT FROM UNDER STARDUST SLIP DRESS",
    price: "7999",
    description:'Sleek and slinky slip dress that will put the stars in your eyes by UO’s own Out From Under. Silky v-neck slip with a relaxed fit and side slit featuring skinny adjustable shoulder straps.',
    categoryName: "women",
    rating:4.2,
    stock:'true',
    imgOne:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2017/01/stardust-slip-black-01.jpg',
    imgTwo:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2017/01/stardust-slip-black-02.jpg',
    imgThree:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2017/01/stardust-slip-black-03.jpg',
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2017/01/stardust-slip-black-02.jpg'
  },
  {
    _id: uuid(),
    title: "AVIATOR JACKET IN FAUX SUEDE",
    price: "2999",
    description:'Score a wardrobe win no matter the dress code with our Collection own-label collection.',
    categoryName: "women",
    rating:4.8,
    stock:'false',
    imgOne:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/6950715-1-mint.jpeg',
    imgTwo:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/6950715-2.jpeg',
    imgThree:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/6950715-4.jpeg',
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/6950715-3.jpeg'
  },
  {
    _id: uuid(),
    title: "MISSGUIDED RIBBED WRAP FRONT SLEEVELESS CROP TOP",
    price: "699",
    description:'With an eye on the catwalks and hottest gals around, Missguided’s in-house team design for the dreamers, believers and night lovers.',
    categoryName: "women",
    rating:1.2,
    stock:'true',
    imgOne:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/7071727-1-chartreuse.jpeg',
    imgTwo:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/7071727-2.jpeg',
    imgThree:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/7071727-3.jpeg',
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/7071727-4.jpeg'
  },
  {
    _id: uuid(),
    title: "DEEP ONE SHOULDER MIDI BODYCON DRESS",
    price: "999",
    description:'Score a wardrobe win no matter the dress code with our ASOS Collection own-label collection.',
    categoryName: "women",
    rating:2.9,
    stock:'false',
    imgOne:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/12/7183324-1-khaki.jpeg',
    imgTwo:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/12/7183324-2-1.jpeg',
    imgThree:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/12/7183324-3.jpeg',
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/12/7183324-4.jpeg'
  },
  {
    _id: uuid(),
    title: "MONKI LONGLINE WOVEN TOP",
    price: "8888",
    description:'Offering irresistible fashion and fast off the runway styles, New Look joins the ASOS round up of great British high street brands.',
    categoryName: "women",
    rating:4.9,
    stock:'true',
    imgOne:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/7100131-1-green.jpeg',
    imgTwo:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/7100131-2.jpeg',
    imgThree:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/7100131-3.jpeg',
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/7100131-1-green.jpeg'
  },
  {
    _id: uuid(),
    title: "ELEMENT BUFFALO PLAID FLANNEL SHIRT IN REGULAR FIT",
    price: "2999",
    description:'Skate hard and look good is the motto of skate brand Element. Founded during the early 90s in the surf ‘n’ skate state of California, the label fuses high-quality construction with skate-inspired designs.',
    categoryName: "men",
    rating:3,
    imgOne:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/6833618-1-green.jpeg',
    imgTwo:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/6833618-2.jpeg',
    imgThree:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/6833618-4.jpeg',
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/6833618-3.jpeg'
  },
  {
    _id: uuid(),
    title: "SKINNY SHIRT IN KHAKI TWILL",
    price: "2499",
    description:'Designed in-house in our London studio by our dedicated menswear team.',
    categoryName: "men",
    rating:3.8,
    stock:'true',
    imgOne:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/5796822-1-green.jpg',
    imgTwo:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/5796822-2.jpg',
    imgThree:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/5796822-3.jpg',
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/5796822-4.jpg'
  },
  {
    _id: uuid(),
    title: "SKINNY SHIRT IN KHAKI TWILL WITH SHORT SLEEVES",
    price: "2499",
    description:'Designed in-house in our London studio by our dedicated menswear team, ASOS offer a range of men’s clothing designed and created exclusively for ASOS.',
    categoryName: "men",
    rating:3.8,
    stock:'false',
    imgOne:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/6026004-1-fourleafclover.jpg',
    imgTwo:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/6026004-2.jpg',
    imgThree:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/6026004-4.jpg',
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/6026004-3.jpg'
  },
  {
    _id: uuid(),
    title: "UNITED COLORS OF BENETTON FAUX SHEARLING HOODED JACKET",
    price: "6499",
    description:'United Colors of Benetton became infamous in the ’90s for their shock-tactic advertising campaigns and continued drive of creativity and courage with their global outlook and worldwide communication.',
    categoryName: "men",
    rating:4.6,
    stock:'true',
    imgOne:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/7038094-1-black100.jpg',
    imgTwo:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/7038094-2.jpg',
    imgThree:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/7038094-4.jpg',
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/7038094-3.jpg'
  },
  {
    _id: uuid(),
    title: "RIVER ISLAND SKINNY FIT BLAZER IN LIGHT BLUE",
    price: "5559",
    description:'High street favorites River Island are known for the unique touches they add to their directional pieces of men’s clothing.',
    categoryName: "men",
    rating:5,
    stock:'false',
    imgOne:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/6274395-1-lightblue.jpg',
    imgTwo:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/6274395-4.jpg',
    imgThree:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/6274395-3.jpg',
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/6274395-1-lightblue.jpg'
  },
  {
    _id: uuid(),
    title: "SELECTED HOMME OVERCOAT",
    price: "2555",
    description:'Still continuing to stand at the forefront of men’s fashion; Selected Homme specialises in raw and simple designs that are never obviously trend-driven, but always edgy, elegant and masculine with focus on attention to detail.',
    categoryName: "men",
    rating:3,
    stock:'true',
    imgOne:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/6673031-1-camel.jpeg',
    imgTwo:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/6673031-3.jpeg',
    imgThree:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/6673031-1-camel.jpeg',
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/6673031-3.jpeg'
  },
  {
    _id: uuid(),
    title: "NEW BALANCE 996 RUNNING TRAINERS",
    price: "2200",
    description:'Superstar trainers by sportswear giant adidas Originals have made themselves unforgettable both on the basketball court and the street since 1970.',
    categoryName: "shoe",
    rating:4.8,
    stock:'true',
    imgOne:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2017/02/5319455539121_006_d-1.jpg',
    imgTwo:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2017/02/5319455539121_006_d1-1.jpg',
    imgThree:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2017/02/5319455539121_006_d2-1.jpg',
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2017/02/5319455539121_006_d-1.jpg'
  },
  {
    _id: uuid(),
    title: "NEW BALANCE 996 RUNNING TRAINERS",
    price: "1999",
    description:'Classic 996 running shoe is brought to you by pioneering athletics label, New Balance. Built from supple suede and mesh upper, they feature a C-CAP(r) midsole and ENCAP(r) wedge technology.',
    categoryName: "shoe",
    rating:3,
    stock:'true',
    imgOne:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/12/nb-996-1.jpg',
    imgTwo:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/12/nb-996-2.jpg',
    imgThree:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/12/nb-996-3.jpg',
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/12/nb-996-5.jpg'
  },
  {
    _id: uuid(),
    title: "VANS OLD SKOOL ULTRAMARINE",
    price: "599",
    description:'Vans updates their classic Old Skool silhouette in a fresh colourway for a modern twist. Durable cotton canvas upper offers a lace front closure and a padded ankle collar and lining for comfortable support.',
    categoryName: "shoe",
    rating:3.8,
    stock:'false',
    imgOne:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2017/02/5319455539121_006_d.jpg',
    imgTwo:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2017/02/5319455539121_006_d1.jpg',
    imgThree:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2017/02/5319455539121_006_d2.jpg',
    imgFour:'https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2017/02/5319455539121_006_d.jpg'
  }
];
