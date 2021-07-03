const items = [];
const imageUrls = [
  'https://rukminim1.flixcart.com/image/416/416/jxqfonk0/kit/3/3/r/football-training-kit-kit2-nivia-original-imaf42fyevkzq8hz.jpeg?q=70',
  'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg',
  'https://rukminim1.flixcart.com/image/416/416/ko8xtow0/mobile/j/f/0/m2012k11ai-11x-redmi-original-imag2qsbdt28exzc.jpeg?q=70',
];

items.push(
  {
    id: 1,
    title: 'iPhone X',
    currentPrice: 30000,
    originalPrice: 99999,
    discount: 45,
    rating: '4.5',
    totalRatings: 31234,
    stocked: true,
    imgSrc: imageUrls[1],
    count: 0,
  },
  {
    id: 2,
    title: 'Football',
    currentPrice: 550,
    originalPrice: 999,
    discount: 23,
    rating: '4.5',
    totalRatings: 31234,
    stocked: true,
    imgSrc: imageUrls[0],
    count: 0,
  }
);
for (let i = 0; i < 14; i++) {
  if (i % 2 === 0)
    items.push({
      id: i + 3,
      title: `Item ${i + 1}`,
      currentPrice: 50,
      originalPrice: 100,
      discount: 50,
      rating: 4.5,
      totalRatings: 98765,
      stocked: true,
      imgSrc: imageUrls[i % 3],
      count: 0,
    });
  else
    items.push({
      id: i + 3,
      title: `Item ${i + 1}`,
      currentPrice: 99,
      originalPrice: 100,
      discount: 1,
      rating: 4.5,
      totalRatings: 12345,
      stocked: false,
      imgSrc: imageUrls[i % 3],
      count: 0,
    });
}

export default items;
