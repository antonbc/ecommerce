import img1 from '../svgs/ps5-dark.svg';
import img2 from '../svgs/iphone-dark.svg';
import img3 from '../svgs/apple-watch-dark.svg';
import img4 from '../svgs/ipad-dark.svg';
import img5 from '../svgs/macbook-pro-dark.svg';
import img6 from '../svgs/xbox-dark.svg';
import img7 from '../svgs/ipad-keyboard-dark.svg';
import img8 from '../svgs/ps5-controller-dark.svg';
import img9 from '../svgs/bag-dark.svg';
import img10 from '../svgs/airpods-dark.svg';
import img11 from '../svgs/football-dark.svg';
import img12 from '../svgs/imac-components-dark.svg';

const products = [
    {
        id: 1,
        imageUrl: img1,
        name: 'PlayStation 5',
        price: '750',
        rating: 4.5,
        reviewCount: 30
    },
    {
        id: 2,
        imageUrl: img2,
        name: 'Iphone 15 Pro Max',
        price: '1199',
        rating: 5,
        reviewCount: 89
    },
    {
        id: 3,
        imageUrl: img3,
        name: 'Apple Watch Series 8',
        price: '399',
        rating: 3.5,
        reviewCount: 126
    },
    {
        id: 4,
        imageUrl: img4,
        name: 'Ipad Pro 11-inch',
        price: '1299',
        rating: 4,
        reviewCount: 432
    },
    {
        id: 5,
        imageUrl: img5,
        name: 'Macbook Pro M3',
        price: '2150',
        rating: 5,
        reviewCount: 40
    },
    {
        id: 6,
        imageUrl: img6,
        name: 'Xbox Series X',
        price: '750',
        rating: 5,
        reviewCount: 35
    },
    {
        id: 7,
        imageUrl: img7,
        name: 'Ipad Air 2023',
        price: '950',
        rating: 3.5,
        reviewCount: 23
    },
    {
        id: 8,
        imageUrl: img8,
        name: 'PlayStation 5 Controller',
        price: '50',
        rating: 4.5,
        reviewCount: 72
    },
    // Duplicates with unique IDs
    {
        id: 9,
        imageUrl: img1,
        name: 'PlayStation 5',
        price: '750',
        rating: 4.5,
        reviewCount: 30
    },
    {
        id: 10,
        imageUrl: img2,
        name: 'Iphone 15 Pro Max',
        price: '1199',
        rating: 5,
        reviewCount: 89
    },
    {
        id: 11,
        imageUrl: img3,
        name: 'Apple Watch Series 8',
        price: '399',
        rating: 5,
        reviewCount: 126
    },
    {
        id: 12,
        imageUrl: img4,
        name: 'Ipad Pro 11-inch',
        price: '1299',
        rating: 3.5,
        reviewCount: 432
    },
    {
        id: 13,
        imageUrl: img5,
        name: 'Macbook Pro M3',
        price: '2150',
        rating: 5,
        reviewCount: 40
    },
    {
        id: 14,
        imageUrl: img6,
        name: 'Xbox Series X',
        price: '750',
        rating: 5,
        reviewCount: 35
    },
    {
        id: 15,
        imageUrl: img7,
        name: 'Ipad Air 2023',
        price: '950',
        rating: 3.5,
        reviewCount: 23
    },
    {
        id: 16,
        imageUrl: img8,
        name: 'PlayStation 5 Controller',
        price: '50',
        rating: 4.5,
        reviewCount: 72
    },
    {
        id: 17,
        imageUrl: img9,
        name: 'PlayStation 5',
        price: '750',
        rating: 4.5,
        reviewCount: 30
    },
    {
        id: 18,
        imageUrl: img10,
        name: 'Iphone 15 Pro Max',
        price: '1199',
        rating: 5,
        reviewCount: 89
    },
    {
        id: 19,
        imageUrl: img11,
        name: 'Apple Watch Series 8',
        price: '399',
        rating: 5,
        reviewCount: 126
    },
    {
        id: 20,
        imageUrl: img12,
        name: 'Ipad Pro 11-inch',
        price: '1299',
        rating: 3.5,
        reviewCount: 432
    },
    {
        id: 21,
        imageUrl: img1,
        name: 'PlayStation 5',
        price: '750',
        rating: 4.5,
        reviewCount: 30
    },
    {
        id: 22,
        imageUrl: img2,
        name: 'Iphone 15 Pro Max',
        price: '1199',
        rating: 5,
        reviewCount: 89
    },
    {
        id: 23,
        imageUrl: img3,
        name: 'Apple Watch Series 8',
        price: '399',
        rating: 3.5,
        reviewCount: 126
    },
    {
        id: 24,
        imageUrl: img4,
        name: 'Ipad Pro 11-inch',
        price: '1299',
        rating: 4,
        reviewCount: 432
    },
    {
        id: 25,
        imageUrl: img5,
        name: 'Macbook Pro M3',
        price: '2150',
        rating: 5,
        reviewCount: 40
    },
    {
        id: 26,
        imageUrl: img6,
        name: 'Xbox Series X',
        price: '750',
        rating: 5,
        reviewCount: 35
    },
    {
        id: 27,
        imageUrl: img7,
        name: 'Ipad Air 2023',
        price: '950',
        rating: 3.5,
        reviewCount: 23
    },
    {
        id: 28,
        imageUrl: img8,
        name: 'PlayStation 5 Controller',
        price: '50',
        rating: 4.5,
        reviewCount: 72
    },
    {
        id: 29,
        imageUrl: img9,
        name: 'PlayStation 5',
        price: '750',
        rating: 4.5,
        reviewCount: 30
    },
    {
        id: 30,
        imageUrl: img10,
        name: 'Iphone 15 Pro Max',
        price: '1199',
        rating: 5,
        reviewCount: 89
    },
    {
        id: 31,
        imageUrl: img11,
        name: 'Apple Watch Series 8',
        price: '399',
        rating: 5,
        reviewCount: 126
    },
    {
        id: 32,
        imageUrl: img12,
        name: 'Ipad Pro 11-inch',
        price: '1299',
        rating: 3.5,
        reviewCount: 432
    },
    {
        id: 33,
        imageUrl: img1,
        name: 'PlayStation 5',
        price: '750',
        rating: 4.5,
        reviewCount: 30
    },
    {
        id: 34,
        imageUrl: img2,
        name: 'Iphone 15 Pro Max',
        price: '1199',
        rating: 5,
        reviewCount: 89
    },
    {
        id: 35,
        imageUrl: img3,
        name: 'Apple Watch Series 8',
        price: '399',
        rating: 3.5,
        reviewCount: 126
    },
    {
        id: 36,
        imageUrl: img4,
        name: 'Ipad Pro 11-inch',
        price: '1299',
        rating: 4,
        reviewCount: 432
    },
    {
        id: 37,
        imageUrl: img5,
        name: 'Macbook Pro M3',
        price: '2150',
        rating: 5,
        reviewCount: 40
    },
    {
        id: 38,
        imageUrl: img6,
        name: 'Xbox Series X',
        price: '750',
        rating: 5,
        reviewCount: 35
    },
    {
        id: 39,
        imageUrl: img7,
        name: 'Ipad Air 2023',
        price: '950',
        rating: 3.5,
        reviewCount: 23
    },
    {
        id: 40,
        imageUrl: img8,
        name: 'PlayStation 5 Controller',
        price: '50',
        rating: 4.5,
        reviewCount: 72
    },
    {
        id: 41,
        imageUrl: img9,
        name: 'PlayStation 5',
        price: '750',
        rating: 4.5,
        reviewCount: 30
    },
    {
        id: 42,
        imageUrl: img10,
        name: 'Iphone 15 Pro Max',
        price: '1199',
        rating: 5,
        reviewCount: 89
    },
    {
        id: 43,
        imageUrl: img11,
        name: 'Apple Watch Series 8',
        price: '399',
        rating: 5,
        reviewCount: 126
    },
    {
        id: 44,
        imageUrl: img12,
        name: 'Ipad Pro 11-inch',
        price: '1299',
        rating: 3.5,
        reviewCount: 432
    },
    {
        id: 45,
        imageUrl: img1,
        name: 'PlayStation 5',
        price: '750',
        rating: 4.5,
        reviewCount: 30
    },
    {
        id: 46,
        imageUrl: img2,
        name: 'Iphone 15 Pro Max',
        price: '1199',
        rating: 5,
        reviewCount: 89
    },
    {
        id: 47,
        imageUrl: img3,
        name: 'Apple Watch Series 8',
        price: '399',
        rating: 3.5,
        reviewCount: 126
    },
    {
        id: 48,
        imageUrl: img4,
        name: 'Ipad Pro 11-inch',
        price: '1299',
        rating: 4,
        reviewCount: 432
    },
    {
        id: 49,
        imageUrl: img5,
        name: 'Macbook Pro M3',
        price: '2150',
        rating: 5,
        reviewCount: 40
    },
    {
        id: 50,
        imageUrl: img6,
        name: 'Xbox Series X',
        price: '750',
        rating: 5,
        reviewCount: 35
    },
    {
        id: 51,
        imageUrl: img7,
        name: 'Ipad Air 2023',
        price: '950',
        rating: 3.5,
        reviewCount: 23
    },
    {
        id: 52,
        imageUrl: img8,
        name: 'PlayStation 5 Controller',
        price: '50',
        rating: 4.5,
        reviewCount: 72
    },
    {
        id: 53,
        imageUrl: img9,
        name: 'PlayStation 5',
        price: '750',
        rating: 4.5,
        reviewCount: 30
    },
    {
        id: 54,
        imageUrl: img10,
        name: 'Iphone 15 Pro Max',
        price: '1199',
        rating: 5,
        reviewCount: 89
    },
    {
        id: 55,
        imageUrl: img11,
        name: 'Apple Watch Series 8',
        price: '399',
        rating: 5,
        reviewCount: 126
    },
    {
        id: 56,
        imageUrl: img12,
        name: 'Ipad Pro 11-inch',
        price: '1299',
        rating: 3.5,
        reviewCount: 432
    }    
];

export default products;
