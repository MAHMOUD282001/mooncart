import heroImg1 from "../../assets/hero/h1.webp";
import heroImg2 from "../../assets/hero/h2.webp";
import productImg1 from "../../assets/product/product1.png";
import productImg2 from "../../assets/product/product1.1.png";
import productImg3 from "../../assets/product/product1.2.png";
import productImg4 from "../../assets/product/product1.3.png";
import productImg5 from "../../assets/product/product2.png";
import productImg6 from "../../assets/product/product3.png";
import productImg7 from "../../assets/product/product4.png";
import productImg8 from "../../assets/product/product5.png";
import productImg9 from "../../assets/product/product6.png";
import productImg10 from "../../assets/product/product7.png";
import productImg11 from "../../assets/product/product8.png";
import testimonialReviewerImg1 from "../../assets/testimonial/pic1-2.png";
import testimonialReviewerImg2 from "../../assets/testimonial/pic2-2.png";
import testimonialReviewerImg3 from "../../assets/testimonial/pic5.jpg";
import testimonialReviewerImg4 from "../../assets/testimonial/pic6.jpg";
import sweetProductImg1 from "../../assets/posts/post1.png";
import sweetProductImg2 from "../../assets/posts/post2.png";
import sweetProductImg3 from "../../assets/posts/post3.png";
import sweetProductImg4 from "../../assets/posts/post4.png";
import sweetProductImg5 from "../../assets/posts/post5.png";
import sweetProductImg6 from "../../assets/posts/post6.png";

export const menulists = [
  {
    id: 1,
    path: "/",
    link: "home",
  },
  {
    id: 2,
    path: "/shop",
    link: "Shop",
  },
  {
    id: 3,
    path: "/blog",
    link: "Blog",
  },
  {
    id: 4,
    path: "/about",
    link: "about",
  },
  {
    id: 5,
    path: "/services",
    link: "Services",
  },
];

export const herolist = [
  {
    id: 1,
    title: "Natural Wooden Products",
    description:
      "Sell globally in minutes with localized currencies, languages, and experiences in every market.",
    image: heroImg1,
    price: [
      {
        color: "red",
        value: 135.78,
      },
      {
        color: "yellow",
        value: 185.27,
      },
      {
        color: "green",
        value: 125.62,
      },
    ],
    color: [
      { value: "red" },
      { value: "yellow" },
      {
        value: "green",
      },
    ],
  },
  {
    id: 2,
    title: "Explore Wooden Products",
    description:
      "Sell globally in minutes with localized currencies, languages, and experiences in every market.",
    image: heroImg2,
    price: [
      {
        color: "red",
        value: 154.23,
      },
      {
        color: "yellow",
        value: 123.43,
      },
      {
        color: "green",
        value: 43.34,
      },
    ],
    color: [
      { value: "red" },
      { value: "yellow" },
      {
        value: "green",
      },
    ],
  },
];

export const productlists = [
  {
    id: 1,
    title: "Wooden single drawer",
    description:
      "Enhance your home decor with our Wooden Single Drawer. Crafted with precision and designed for functionality, this drawer provides ample storage space while adding a touch of elegance to any room. The rich wooden finish complements a variety of interior styles, making it a versatile addition to your home. The discount of 10% makes it an affordable choice, and with a rating of 2.5, it's a reliable and stylish furniture piece. Featured as a top pick, this drawer is a must-have for those who appreciate quality craftsmanship.",
    images: [
      { image: productImg1 },
      { image: productImg3 },
      { image: productImg2 },
    ],
    discount: 10,
    rating: 2.5,
    featured: true,
    price: [
      { color: "red", value: 135.78 },
      { color: "yellow", value: 185.27 },
      { color: "green", value: 125.62 },
    ],
    color: [{ value: "red" }, { value: "yellow" }, { value: "green" }],
  },
  {
    id: 2,
    title: "Wooden Serving Bowl",
    description:
      "Elevate your dining experience with our exquisite Wooden Serving Bowl. Carved from high-quality wood, this bowl brings a touch of nature to your table. Its deep design is perfect for serving salads, fruits, or your favorite dishes. The 15% discount makes it an excellent deal, and with a rating of 4.2, it combines style and functionality seamlessly. Although not featured, this bowl stands out as a practical and beautiful addition to your kitchen.",
    images: [
      { image: productImg5 },
      { image: productImg4 },
      { image: productImg3 },
    ],
    discount: 15,
    rating: 4.2,
    featured: false,
    price: [
      { color: "blue", value: 99.99 },
      { color: "white", value: 120.5 },
      { color: "brown", value: 85.75 },
    ],
    color: [{ value: "blue" }, { value: "white" }, { value: "brown" }],
  },
  {
    id: 3,
    title: "Wooden Glass",
    description:
      "Sip in style with our Wooden Glass collection. Crafted with precision, these wooden glasses add a natural touch to your beverage experience. The set includes glasses in various colors to suit your mood. With a 12% discount, these glasses offer both aesthetics and affordability. Rated at 4.5, these glasses are perfect for daily use or special occasions, making them a versatile addition to your glassware collection.",
    images: [
      { image: productImg6 },
      { image: productImg3 },
      { image: productImg2 },
    ],
    discount: 12,
    rating: 4.5,
    featured: true,
    price: [
      { color: "clear", value: 29.99 },
      { color: "brown", value: 35.5 },
      { color: "green", value: 27.75 },
    ],
    color: [{ value: "clear" }, { value: "brown" }, { value: "green" }],
  },
  {
    id: 4,
    title: "Wooden Cup",
    description:
      "Experience the warmth of wooden craftsmanship with our Wooden Cup collection. Each cup is meticulously crafted to bring a rustic charm to your kitchen. The 18% discount makes it an excellent value, and with a high rating of 4.8, these cups are a favorite among those who appreciate quality. Not featured, but certainly not to be overlooked, these wooden cups are perfect for enjoying your favorite beverages.",
    images: [
      { image: productImg7 },
      { image: productImg2 },
      { image: productImg3 },
    ],
    discount: 18,
    rating: 4.8,
    featured: false,
    price: [
      { color: "natural", value: 19.99 },
      { color: "dark brown", value: 22.5 },
      { color: "light brown", value: 17.75 },
    ],
    color: [
      { value: "natural" },
      { value: "dark brown" },
      { value: "light brown" },
    ],
  },
  {
    id: 5,
    title: "Wooden Coffee Mug",
    description:
      "Start your day with the charm of our Wooden Coffee Mugs. Crafted with care, these mugs bring a touch of nature to your morning routine. The 15% discount ensures affordability without compromising on style. With a rating of 4.0, these mugs are not just functional but also visually appealing. While not featured, they are a delightful addition to any coffee lover's collection.",
    images: [
      { image: productImg8 },
      { image: productImg4 },
      { image: productImg3 },
    ],
    discount: 15,
    rating: 4.0,
    featured: false,
    price: [
      { color: "dark", value: 14.99 },
      { color: "light", value: 18.5 },
      { color: "white", value: 12.75 },
    ],
    color: [{ value: "dark" }, { value: "light" }, { value: "white" }],
  },
  {
    id: 6,
    title: "Wooden Brush",
    description:
      "Upgrade your grooming routine with our Wooden Brush collection. Made with high-quality materials, these brushes offer a natural and comfortable grooming experience. The 20% discount makes them a great value, and with a rating of 4.2, they are a reliable choice for your daily routine. Although not featured, these wooden brushes stand out for their durability and eco-friendly design.",
    images: [
      { image: productImg9 },
      { image: productImg3 },
      { image: productImg2 },
    ],
    discount: 20,
    rating: 4.2,
    featured: true,
    price: [
      { color: "natural", value: 9.99 },
      { color: "brown", value: 12.5 },
      { color: "black", value: 8.75 },
    ],
    color: [{ value: "natural" }, { value: "brown" }, { value: "black" }],
  },
  {
    id: 7,
    title: "Wooden Bottles",
    description:
      "Elevate your hydration experience with our Wooden Bottles. Crafted with precision and designed for durability, these bottles are an eco-friendly choice for your daily water intake. The 15% discount makes them an affordable and sustainable option. With a rating of 3.5, these bottles are a practical and stylish addition to your daily routine.",
    images: [
      { image: productImg10 },
      { image: productImg4 },
      { image: productImg2 },
    ],
    discount: 15,
    rating: 3.5,
    featured: false,
    price: [
      { color: "blue", value: 24.99 },
      { color: "green", value: 29.5 },
      { color: "brown", value: 22.75 },
    ],
    color: [{ value: "blue" }, { value: "green" }, { value: "brown" }],
  },
  {
    id: 8,
    title: "Luxury Couch",
    description:
      "Indulge in luxury with our Elegant and Comfortable Wooden Couch. Crafted with meticulous attention to detail, this couch adds a touch of sophistication to your living room. The 25% discount makes it a premium choice without compromising on quality. With an impressive rating of 4.8, this couch is a featured product for those who seek both style and comfort.",
    images: [
      {
        image: productImg11,
      },
      { image: productImg3 },
      { image: productImg4 },
    ],
    discount: 25,
    rating: 4.8,
    featured: true,
    price: [
      { color: "black", value: 799.99 },
      { color: "gray", value: 849.5 },
      { color: "beige", value: 780.75 },
    ],
    color: [{ value: "black" }, { value: "gray" }, { value: "beige" }],
  },
];

export const additionalInfo = [
  {
    id: 1,
    title: "FREE SHIPPING",
    description:
      "Enjoy Free Shipping On All Orders - No Minimum Purchase Required.",
  },
  {
    id: 2,
    title: "24/7 SUPPORT",
    description:
      "Our Team Is Available 24/7 To Help With Any Questions Or Concerns.",
  },
  {
    id: 3,
    title: "MONEY BACK",
    description: "We Offer A 100% Money-Back Guarantee For Your Satisfaction.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    comment:
      "I've been using this product for a few weeks now, and I'm really impressed with the results. It's helped me achieve the smooth, glowing skin I've always wanted.",
    image: testimonialReviewerImg1,
  },
  {
    id: 2,
    name: "Ali Samir",
    comment:
      "I've been using this product for a few weeks now, and I'm really impressed with the results.",
    image: testimonialReviewerImg2,
  },
  {
    id: 3,
    name: "Saeed Mohamed",
    comment:
      "I've been using this product for a few weeks now, and I'm really impressed with the results. It's helped me achieve the smooth, glowing skin I've always wanted.",
    image: testimonialReviewerImg3,
  },
  {
    id: 4,
    name: "Salem Eldosary",
    comment:
      "I've been using this product for a few weeks now, and I'm really impressed with the results. It's helped me achieve the smooth, glowing skin I've always wanted.",
    image: testimonialReviewerImg4,
  },
];

export const promotionalInfo = [
  {
    id: 1,
    title: "Free Shipping On All Orders Over $59",
    description:
      "Shop & shipment across the whole North America. Lorem Ipsum is simply dummy text of It’s easy to get lost in the world of lovely valley vapour around and the meridian sun strikes the upper surface.",
    image: "../images/promotional/prom1.png",
  },
  {
    id: 2,
    title: "From $29.05",
    description:
      "Organic Skincare for Glowing Complexion. Lorem Ipsum is simply dummy text of It’s easy to get lost in the world of lovely valley vapour around and the meridian sun strikes the upper surface.",
    image: "../images/promotional/prom2.png",
  },
];

export const sweetProducts = [
  {
    id: 1,
    image: sweetProductImg1,
    caption: "Caption for post 1",
  },
  {
    id: 2,
    image: sweetProductImg2,
    caption: "Caption for post 2",
  },
  {
    id: 3,
    image: sweetProductImg3,
    caption: "Caption for post 3",
  },
  {
    id: 4,
    image: sweetProductImg4,
    caption: "Caption for post 4",
  },
  {
    id: 5,
    image: sweetProductImg5,
    caption: "Caption for post 5",
  },
  {
    id: 6,
    image: sweetProductImg6,
    caption: "Caption for post 6",
  },
];

export const pageLinks = [
  {
    category: "Normal",
    pages: [
      {
        id: 1,
        title: "Normal",
        type: "Normal",
      },
      {
        id: 2,
        title: "Shop With Sidebar",
        type: "Shop",
      },
      {
        id: 3,
        title: "Shop With Category",
        type: "Shop",
      },
      {
        id: 4,
        title: "Shop Filters Top Bar",
        type: "Shop",
      },
      {
        id: 5,
        title: "Shop Wide",
        type: "Shop",
      },
      {
        id: 6,
        title: "My Account",
        type: "Normal",
      },
    ],
  },
  {
    category: "About",
    pages: [
      {
        id: 7,
        title: "About Us",
        type: "Normal",
      },
      {
        id: 8,
        title: "Portfolio",
        type: "Normal",
      },
      {
        id: 9,
        title: "FAQs",
        type: "Normal",
      },
      {
        id: 10,
        title: "Contact Us",
        type: "Normal",
      },
      {
        id: 11,
        title: "Our Team",
        type: "Normal",
      },
      {
        id: 12,
        title: "Term & Conditions",
        type: "Normal",
      },
    ],
  },
  {
    category: "Blog",
    pages: [
      {
        id: 13,
        title: "Blog Dark",
        type: "Blog",
      },
      {
        id: 14,
        title: "Blog Light",
        type: "Blog",
      },
      {
        id: 15,
        title: "Blog Half Image",
        type: "Blog",
      },
      {
        id: 16,
        title: "Blog Column",
        type: "Blog",
      },
      {
        id: 17,
        title: "Blog Category",
        type: "Blog",
      },
      {
        id: 18,
        title: "Blog Archive",
        type: "Blog",
      },
    ],
  },
];
