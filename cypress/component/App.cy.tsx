import * as React from 'react';
import { App } from '../../src/frontend/App';
import { MockProviders } from '../mock-providers';

describe('App', () => {
  it('renders properly', () => {
    cy.intercept('/myThing*', { body: { result: { data: 'hello' } } });
    cy.mount(
      <MockProviders>
        <App />
      </MockProviders>
    );

    cy.findByText('hello').should('be.visible');
  });
});
