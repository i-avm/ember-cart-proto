import Route from '@ember/routing/route';

export default class FootballersRoute extends Route {
  model() {
    const footballers = [
      {
        name: 'Messi',
        image: 'https://wallpapercave.com/wp/wp2043260.jpg',
        jerseyNumber: 10,
        club: 'FC Barcelona',
      },
      {
        name: 'Ronaldo',
        image:
          'https://www.imagediamond.com/blog/wp-content/uploads/2019/10/cristiano-ronaldoed5-743x1024.jpg',
        jerseyNumber: 7,
        club: 'Juventus',
      },
      {
        name: 'Neymar',
        image:
          'https://static01.nyt.com/images/2021/05/29/sports/27neymar-nike-print/27neymar-nike-web-1-mediumSquareAt3X.jpg',
        jerseyNumber: 10,
        club: 'PSG',
      },
    ];

    return footballers;
  }
}
