import img1 from '../../../assets/svgs/ps5-dark.svg';
import img2 from '../../../assets/svgs/iphone-dark.svg';
import img3 from '../../../assets/svgs/apple-watch-dark.svg';
import img4 from '../../../assets/svgs/ipad-dark.svg';
import img5 from '../../../assets/svgs/macbook-pro-dark.svg';
import img6 from '../../../assets/svgs/xbox-dark.svg';
import img7 from '../../../assets/svgs/ipad-keyboard-dark.svg';
import img8 from '../../../assets/svgs/ps5-controller-dark.svg';
import img9 from '../../../assets/svgs/bag-dark.svg';
import img10 from '../../../assets/svgs/airpods-dark.svg';
import img11 from '../../../assets/svgs/football-dark.svg';
import img12 from '../../../assets/svgs/imac-components-dark.svg';

const departments = [
    {
        departmentName: 'Electronics',
        departmentNamePath: '/electronics',
        subCategories: [{
            image: img12,
            categoryName: 'Accessories'
        },{
            image: img8,
            categoryName: 'Headphones'
        },
        {
            image: img4,
            categoryName: 'Smart Phones'
        },
        {
            image: img9,
            categoryName: 'Television'
        },]

    },
    {
        departmentName: 'Computers',
        departmentNamePath: '/computers',
        subCategories: [{
            image: img1,
            categoryName: 'Computer Components'
        },{
            image: img2,
            categoryName: 'Monitors'
        },
        {
            image: img3,
            categoryName: 'Laptops'
        },
        {
            image: img4,
            categoryName: 'External Components'
        },]

    },
    {
        departmentName: `Women's Fashion`,
        departmentNamePath: '/womens-fashion',
        subCategories: [{
            image: img5,
            categoryName: 'Clothing'
        },{
            image: img6,
            categoryName: 'Shoes'
        },
        {
            image: img7,
            categoryName: 'Handbags'
        },
        {
            image: img8,
            categoryName: 'Accessories'
        },]

    },
    {
        departmentName: `Men's Fashion`,
        departmentNamePath: '/mens-fashion',
        subCategories: [{
            image: img9,
            categoryName: 'Clothing'
        },{
            image: img10,
            categoryName: 'Shoes'
        },
        {
            image: img11,
            categoryName: 'Watches'
        },
        {
            image: img12,
            categoryName: 'Accessories'
        },]
    },
    {
        departmentName: `Sports & Outdoors`,
        departmentNamePath: '/sports-outdoors',
        subCategories: [{
            image: img1,
            categoryName: 'Sports'
        },{
            image: img2,
            categoryName: 'Fitness'
        },
        {
            image: img3,
            categoryName: 'Outdoor Recreation'
        },]

    },
    {
        departmentName: `Home and Kitchen`,
        departmentNamePath: '/home-kitchen',
        subCategories: [{
            image: img10,
            categoryName: 'Kitchen & Dining'
        },{
            image: img12,
            categoryName: 'Bath'
        },
        {
            image: img3,
            categoryName: 'Furniture'
        },
        {
            image: img4,
            categoryName: 'Lighting & Ceiling Fans'
        },]
    } 
]
export default departments;