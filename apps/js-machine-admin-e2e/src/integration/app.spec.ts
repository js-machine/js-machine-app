import { getGreeting } from '../support/app.po';

describe('js-machine-admin', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to js-machine-admin!');
  });
});
