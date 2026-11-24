
// SHRI GOVIND ARTS — PRODUCT DATABASE
// 28 product records
// Image-to-product matching must be visually confirmed
// before publishing.

const products = [
  {
    id: "SG001",
    name: "Mukharbind",
    priceINR: 2500,
    dimensions: "18 x 22",
    dimensionUnit: "inches",
    image: "images/1000708992.jpg",
    category: "Pichwai"
  },
  {
    id: "SG002",
    name: "Hari Ghata",
    priceINR: 10000,
    dimensions: "18 x 22",
    dimensionUnit: "inches",
    image: "images/1000708993.jpg",
    category: "Pichwai"
  },
  {
    id: "SG003",
    name: "Mangla",
    priceINR: 6000,
    dimensions: "18 x 22",
    dimensionUnit: "inches",
    image: "images/1000708994.jpg",
    category: "Pichwai"
  },
  {
    id: "SG004",
    name: "Mukharbind",
    priceINR: 15000,
    dimensions: "18 x 24",
    dimensionUnit: "inches",
    image: "images/1000708995.jpg",
    category: "Pichwai"
  },
  {
    id: "SG005",
    name: "Labh Pacham",
    priceINR: 16000,
    dimensions: "8 x 10",
    dimensionUnit: "inches",
    image: "images/1000708996.jpg",
    category: "Pichwai"
  },
  {
    id: "SG006",
    name: "Plain Art Rajbhog Sakhi Shringar",
    priceINR: 45000,
    dimensions: "2 x 3",
    dimensionUnit: "metres",
    image: "images/1000708997.jpg",
    category: "Pichwai"
  },
  {
    id: "SG007",
    name: "Plain Paana Rajbhog",
    priceINR: 15000,
    dimensions: "18 x 24",
    dimensionUnit: "inches",
    image: "images/1000708998.jpg",
    category: "Pichwai"
  },
  {
    id: "SG008",
    name: "Mangla",
    priceINR: 17000,
    dimensions: "18 x 24",
    dimensionUnit: "inches",
    image: "images/1000708999.jpg",
    category: "Pichwai"
  },
  {
    id: "SG009",
    name: "Phool Bangla",
    priceINR: 20000,
    dimensions: "18 x 24",
    dimensionUnit: "inches",
    image: "images/1000709000.jpg",
    category: "Pichwai"
  },
  {
    id: "SG010",
    name: "Rajbhog",
    priceINR: 14000,
    dimensions: "18 x 24",
    dimensionUnit: "inches",
    image: "images/1000709001.jpg",
    category: "Pichwai"
  },
  {
    id: "SG011",
    name: "Plain Panna – Radha Krishna",
    priceINR: 70000,
    dimensions: "2 x 3",
    dimensionUnit: "metres",
    image: "images/1000709002.jpg",
    category: "Pichwai"
  },
  {
    id: "SG012",
    name: "Sudarshan",
    priceINR: 8000,
    dimensions: "10 x 14",
    dimensionUnit: "inches",
    image: "images/1000709003.jpg",
    category: "Pichwai"
  },
  {
    id: "SG013",
    name: "Tri Nidhi",
    priceINR: 18000,
    dimensions: "27 x 16",
    dimensionUnit: "inches",
    image: "images/1000709004.jpg",
    category: "Pichwai"
  },
  {
    id: "SG014",
    name: "Kesri Ghata",
    priceINR: 55000,
    dimensions: "30 x 42",
    dimensionUnit: "inches",
    image: "images/1000709005.jpg",
    category: "Pichwai"
  },
  {
    id: "SG015",
    name: "Safed Ghata",
    priceINR: 25000,
    dimensions: "20 x 26",
    dimensionUnit: "inches",
    image: "images/1000709006.jpg",
    category: "Pichwai"
  },
  {
    id: "SG016",
    name: "Kali Shringar",
    priceINR: 15000,
    dimensions: "20 x 26",
    dimensionUnit: "inches",
    image: "images/1000709007.jpg",
    category: "Pichwai"
  },
  {
    id: "SG017",
    name: "Rajbhog",
    priceINR: 51000,
    dimensions: "42 x 30",
    dimensionUnit: "inches",
    image: "images/1000709008.jpg",
    category: "Pichwai"
  },
  {
    id: "SG018",
    name: "Patt Mangla",
    priceINR: 70000,
    dimensions: "42 x 30",
    dimensionUnit: "inches",
    image: "images/1000709009.jpg",
    category: "Pichwai"
  },
  {
    id: "SG019",
    name: "Mangla",
    priceINR: 100000,
    dimensions: "42 x 30",
    dimensionUnit: "inches",
    image: "images/1000709010.jpg",
    category: "Pichwai"
  },
  {
    id: "SG020",
    name: "Mukharbind",
    priceINR: 80000,
    dimensions: "42 x 30",
    dimensionUnit: "inches",
    image: "images/1000709011.jpg",
    category: "Pichwai"
  },
  {
    id: "SG021",
    name: "Chapna Bhog",
    priceINR: 21000,
    dimensions: "24 x 32",
    dimensionUnit: "inches",
    image: "images/1000709012.jpg",
    category: "Pichwai"
  },
  {
    id: "SG022",
    name: "Ghawl Dharshan",
    priceINR: 31000,
    dimensions: "24 x 32",
    dimensionUnit: "inches",
    image: "images/1000709013.jpg",
    category: "Pichwai"
  },
  {
    id: "SG023",
    name: "Kamal Pichwai",
    priceINR: 53000,
    dimensions: "22 x 30",
    dimensionUnit: "inches",
    image: "images/1000709014.jpg",
    category: "Pichwai"
  },
  {
    id: "SG024",
    name: "Kunj Ekadashi",
    priceINR: 35000,
    dimensions: "24 x 30",
    dimensionUnit: "inches",
    image: "images/1000709015.jpg",
    category: "Pichwai"
  },
  {
    id: "SG025",
    name: "Kunj Bihar",
    priceINR: 40000,
    dimensions: "24 x 30",
    dimensionUnit: "inches",
    image: "images/1000709016.jpg",
    category: "Pichwai"
  },
  {
    id: "SG026",
    name: "Gowsai Mangla",
    priceINR: 37000,
    dimensions: "24 x 30",
    dimensionUnit: "inches",
    image: "images/1000709017.jpg",
    category: "Pichwai"
  },
  {
    id: "SG027",
    name: "Rass Leela",
    priceINR: 21000,
    dimensions: "24 x 30",
    dimensionUnit: "inches",
    image: "images/1000709018.jpg",
    category: "Pichwai"
  },
  {
    id: "SG028",
    name: "Gwal Shringar",
    priceINR: 47000,
    dimensions: "30 x 48",
    dimensionUnit: "inches",
    image: "images/1000709019.jpg",
    category: "Pichwai"
  }
];
    
