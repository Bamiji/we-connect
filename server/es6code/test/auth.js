import { expect } from 'chai';
import request from 'request';

describe('Signup Route', () => {
  const username = 'Tester';

  it(
    'returns status 200',
    (done) => {
      request.post(
        {
          url: 'http://localhost:3000/auth/signup',
          form: { name: username }
        },
        (error, response) => {
          expect(response.statusCode).to.equal(200);
          done();
        }
      );
    }
  );

  it(
    'returns username as registered',
    (done) => {
      request.post(
        {
          url: 'http://localhost:3000/auth/signup',
          form: { name: username }
        },
        (err, httpResponse, body) => {
          expect(body).to.include(username);
          expect(body).to.include('has been registered');
          done();
        }
      );
    }
  );
});

describe('Login Route', () => {
  const username = 'banji';
  const password = 'banji';

  it(
    'returns status 200',
    (done) => {
      request.post(
        {
          url: 'http://localhost:3000/auth/login',
          form: { name: username, password }
        },
        (error, response) => {
          expect(response.statusCode).to.equal(200);
          done();
        }
      );
    }
  );

  it(
    'returns username as logged in',
    (done) => {
      request.post(
        {
          url: 'http://localhost:3000/auth/login',
          form: { name: username, password }
        },
        (err, httpResponse, body) => {
          expect(body).to.include(username);
          expect(body).to.include('has been logged in');
          done();
        }
      );
    }
  );

  it(
    'fails to login unauthenticated',
    (done) => {
      request.post(
        {
          url: 'http://localhost:3000/auth/login',
          form: { name: username, password: 'not password' }
        },
        (err, httpResponse, body) => {
          expect(body).to.include('Login failed');
          done();
        }
      );
    }
  );
});
