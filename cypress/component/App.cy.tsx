import * as React from 'react';
import { App } from '../../src/App';
import { MockProviders } from '../mock-providers';

describe('App', () => {
  it('renders properly', () => {
    cy.intercept('/trpc/myThing*', { body: { result: { data: 'hello' } } });
    cy.mount(
      <MockProviders>
        <App />
      </MockProviders>
    );

    cy.findByText('hello').should('be.visible');
  });
});
