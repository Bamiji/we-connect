const { expect } = require('chai');
const request = require('request');

describe('Business Registration Route', () => {
  const name = 'test business';
  const location = 'test site';
  const category = 'test category';

  it(
    'returns business as registered',
    (done) => {
      request.post(
        {
          url: 'http://localhost:3000/businesses/',
          form: { name, location, category }
        },
        (err, httpResponse, body) => {
          expect(body).to.include(name);
          expect(body).to.include(location);
          expect(body).to.include(category);
          expect(body).to.include('created');
          done();
        }
      );
    }
  );
});

describe('Business Info Update Route', () => {
  const name = 'test business';
  const location = 'test site';
  const category = 'test category';

  it(
    'returns empty update unchanged',
    (done) => {
      request.put(
        {
          url: 'http://localhost:3000/businesses/1',
          form: { }
        },
        (err, httpResponse, body) => {
          expect(body).to.include('andela');
          expect(body).to.include('lagos');
          expect(body).to.include('computer science');
          expect(body).to.include('updated');
          done();
        }
      );
    }
  );

  it(
    'returns partial update edited',
    (done) => {
      request.put(
        {
          url: 'http://localhost:3000/businesses/2',
          form: { name }
        },
        (err, httpResponse, body) => {
          expect(body).to.include(name);
          expect(body).to.include('abuja');
          expect(body).to.include('engineering');
          expect(body).to.include('updated');
          done();
        }
      );
    }
  );

  it(
    'returns full update edited',
    (done) => {
      request.put(
        {
          url: 'http://localhost:3000/businesses/1',
          form: { name, location, category }
        },
        (err, httpResponse, body) => {
          expect(body).to.include(name);
          expect(body).to.include(location);
          expect(body).to.include(category);
          expect(body).to.include('updated');
          done();
        }
      );
    }
  );
});

describe('Business Deletion Route', () => {
  it(
    'returns business as deleted',
    (done) => {
      request.del(
        {
          url: 'http://localhost:3000/businesses/1'
        },
        (err, httpResponse, body) => {
          expect(body).to.include('andela');
          expect(body).to.include('deleted');
          done();
        }
      );
    }
  );

  it(
    'returns correct business as deleted',
    (done) => {
      request.del(
        {
          url: 'http://localhost:3000/businesses/2'
        },
        (err, httpResponse, body) => {
          expect(body).to.include('not andela');
          expect(body).to.include('deleted');
          done();
        }
      );
    }
  );
});

describe('Business Selection Route', () => {
  it(
    'returns business',
    (done) => {
      request.get(
        {
          url: 'http://localhost:3000/businesses/1'
        },
        (err, httpResponse, body) => {
          expect(body).to.include('andela');
          expect(body).to.include('found');
          done();
        }
      );
    }
  );

  it(
    'returns correct business',
    (done) => {
      request.get(
        {
          url: 'http://localhost:3000/businesses/2'
        },
        (err, httpResponse, body) => {
          expect(body).to.include('not andela');
          expect(body).to.include('found');
          done();
        }
      );
    }
  );
});

describe('Business Listing Route', () => {
  it(
    'returns all businesses',
    (done) => {
      request.get(
        {
          url: 'http://localhost:3000/businesses/'
        },
        (err, httpResponse, body) => {
          expect(body).to.include('andela');
          expect(body).to.include('andela2');
          expect(body).to.include('not andela');
          expect(body).to.include('not andela 2');
          done();
        }
      );
    }
  );

  it(
    'returns all businesses of a location',
    (done) => {
      request.get(
        {
          url: 'http://localhost:3000/businesses?location=1'
        },
        (err, httpResponse, body) => {
          expect(body).to.include('andela');
          expect(body).to.include('not andela');
          expect(body).to.include('lagos');
          done();
        }
      );
    }
  );

  it(
    'returns all businesses of a category',
    (done) => {
      request.get(
        {
          url: 'http://localhost:3000/businesses?category=2'
        },
        (err, httpResponse, body) => {
          expect(body).to.include('andela2');
          expect(body).to.include('not andela 2');
          expect(body).to.include('marketting');
          done();
        }
      );
    }
  );
});

describe('Business Review Addition Route', () => {
  const title = 'review title';

  it(
    'returns review as added',
    (done) => {
      request.post(
        {
          url: 'http://localhost:3000/businesses/1/reviews',
          form: { title }
        },
        (err, httpResponse, body) => {
          expect(body).to.include('review title');
          expect(body).to.include('andela');
          expect(body).to.include('Added review');
          done();
        }
      );
    }
  );

  it(
    'returns review as added to correct business',
    (done) => {
      request.post(
        {
          url: 'http://localhost:3000/businesses/2/reviews',
          form: { title }
        },
        (err, httpResponse, body) => {
          expect(body).to.include('review title');
          expect(body).to.include('not andela');
          expect(body).to.include('Added review');
          done();
        }
      );
    }
  );
});

describe('Business Review Selection Route', () => {
  it(
    'returns business review',
    (done) => {
      request.get(
        {
          url: 'http://localhost:3000/businesses/1/reviews'
        },
        (err, httpResponse, body) => {
          expect(body).to.include('All reviews for');
          expect(body).to.include('andela');
          expect(body).to.include('review-a');
          expect(body).to.include('review-b');
          done();
        }
      );
    }
  );

  it(
    'returns business review for correct business',
    (done) => {
      request.get(
        {
          url: 'http://localhost:3000/businesses/2/reviews'
        },
        (err, httpResponse, body) => {
          expect(body).to.include('All reviews for');
          expect(body).to.include('not andela');
          expect(body).to.include('review-c');
          expect(body).to.include('review-d');
          done();
        }
      );
    }
  );
});
