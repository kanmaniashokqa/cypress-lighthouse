describe('Check24 Lighthouse Audit', () => {
  let urls;
  let pageObjects;

  before(() => {
    cy.fixture('urls').then((urlData) => {
      urls = urlData;
    });
    cy.fixture('page-objects').then((poData) => {
      pageObjects = poData;
    });
  });

  it('should audit the homepage', () => {
    cy.visit(urls.homepage);
    cy.get(pageObjects.common.cookieConsentAccept).click();
    cy.lighthouse({
      performance: 0,
      accessibility: 0,
      'best-practices': 0,
      seo: 0,
      pwa: 0
    }, {
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        width: 1350,
        height: 940,
        deviceScaleFactor: 1,
        disabled: false,
      },
    });
  });

  it('should audit the search results page', () => {
    cy.visit(urls.searchResults);
    cy.get(pageObjects.common.cookieConsentAccept).click();
    cy.lighthouse({
      performance: 0,
      accessibility: 0,
      'best-practices': 0,
      seo: 0,
      pwa: 0
    }, {
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        width: 1350,
        height: 940,
        deviceScaleFactor: 1,
        disabled: false,
      },
    });
  });
});