import * as React from 'react';
import App from '../../App';

describe('App', () => {
  it('renders properly', () => {
    cy.intercept('/trpc/myThing*', { body: { result: { data: 'hello' } } });
    cy.mount(<App />);
  });
});
