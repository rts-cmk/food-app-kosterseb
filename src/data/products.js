// Product image files
import burgeroneImg from '../assets/burger1.svg';
import burgertwoImg from '../assets/burger2.svg';
import burgerthreeImg from '../assets/burger3.svg';
import burgerfourImg from '../assets/burger4.svg';

import menuoneImg from '../assets/menu1.webp';
import menutwoImg from '../assets/menu2.png';
import menuthreeImg from '../assets/menu3.png';
import nuggetsImg from '../assets/nuggets.webp';


// Product data
export const products = [
    {
        id: 1,
        name: 'Cheeseburger',
        subtitle: "Wendy's Burger",
        rating: 4.9,
        price: 8.24,
        image: burgeroneImg,
        description: "The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.",
        prepTime: '26 mins'
    },
    {
        id: 2,
        name: 'Hamburger',
        subtitle: 'Veggie Burger from Burger King',
        rating: 4.8,
        price: 7.50,
        image: burgertwoImg,
        description: "A delicious plant-based burger with all the fixings.",
        prepTime: '22 mins'
    },
    {
        id: 3,
        name: 'Hamburger',
        subtitle: 'Chicken Burger from McDonalds',
        rating: 4.6,
        price: 9.00,
        image: burgerthreeImg,
        description: "Crispy chicken patty with fresh vegetables.",
        prepTime: '24 mins'
    },
    {
        id: 4,
        name: 'Hamburger',
        subtitle: 'Fried Chicken Burger from KFC',
        rating: 4.5,
        price: 9.50,
        image: burgerfourImg,
        description: "Golden fried chicken with special sauce.",
        prepTime: '28 mins'
    },
    {
        id: 5,
        name: 'Burger and Fries',
        subtitle: 'Menu Combo from Wendy\'s',
        rating: 4.6,
        price: 12.50,
        image: menuoneImg,
        description: "Burger and fries combo from Burger King.",
        prepTime: '31 mins'
    },
    {
        id: 6,
        name: 'Burger, fries and drink',
        subtitle: 'Menu Combo from Burger King',
        rating: 4.8,
        price: 15.80,
        image: menutwoImg,
        description: "Burger with fries and a refreshing drink.",
        prepTime: '33 mins'
    },
    {
        id: 7,
        name: 'Super Menu',
        subtitle: 'Menu Combo from McDonalds',
        rating: 5,
        price: 19.99,
        image: menuthreeImg,
        description: "Burger, fries, drink, and dessert combo.",
        prepTime: '35 mins'
      },
      {
        id: 8,
        name: 'Chicken Nuggets',
        subtitle: 'Nuggets from McDonalds',
        rating: 4.3,
        price: 2.99,
        image: nuggetsImg,
        description: "Golden fried nuggets with special sauce.",
        prepTime: '8 mins'
      }
];