import { browser, by, element } from 'protractor';

export class AppPage {
    // eslint-disable-next-line class-methods-use-this
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }
}
