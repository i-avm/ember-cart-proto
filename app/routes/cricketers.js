import Route from '@ember/routing/route';

export default class CricketersRoute extends Route {
  model() {
    return [
      {
        name: 'Sachin',
        image:
          'https://image.winudf.com/v2/image1/Y29tLmF3ZXNvbWV3YWxscGFwZXJzLlNhY2hpblRlbmR1bGthcl9zY3JlZW5fMF8xNTUxNjkxNzg1XzA1Mg/screen-0.jpg?fakeurl=1&type=.jpg',
        jerseyNumber: 10,
        club: 'India',
      },
    ];
  }
}
