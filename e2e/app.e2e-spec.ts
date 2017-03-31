import { EEGMindtypingBCIInterfaceForLISPatientsPage } from './app.po';

describe('eeg-mindtyping-bci-interface-for-lis-patients App', () => {
  let page: EEGMindtypingBCIInterfaceForLISPatientsPage;

  beforeEach(() => {
    page = new EEGMindtypingBCIInterfaceForLISPatientsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
