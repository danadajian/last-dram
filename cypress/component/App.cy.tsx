import * as React from 'react';
import { App } from '../../src/frontend/App';
import { MockProviders } from '../mock-providers';

describe('App', () => {
  it('renders properly', () => {
    cy.intercept('/getCollection*', { body: { result: { data: [{ name: 'Test Bottle' }] } } });
    cy.mount(
      <MockProviders>
        <App />
      </MockProviders>
    );

    cy.findByText('Test Bottle').should('be.visible');
  });
});
