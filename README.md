<p align="center">
    <a href="https://github.com/yiisoft" target="_blank">
        <img src="https://yiisoft.github.io/docs/images/yii_logo.svg" height="100px">
    </a>
    <h1 align="center">Yii debug frontend</h1>
    <br>
</p>

This extension is a frontend for [Yii Debug API](https://github.com/yiisoft/yii-debug-api) extension.

[![Latest Stable Version](https://poser.pugx.org/yiisoft/yii-debug-frontend/v/stable.png)](https://packagist.org/packages/yiisoft/yii-debug-frontend)
[![Total Downloads](https://poser.pugx.org/yiisoft/yii-debug-frontend/downloads.png)](https://packagist.org/packages/yiisoft/yii-debug-frontend)
[![Build status](https://github.com/yiisoft/yii-debug-frontend/workflows/build/badge.svg)](https://github.com/yiisoft/yii-debug-frontend/actions)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/yiisoft/yii-debug-frontend/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/yiisoft/yii-debug-frontend/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/yiisoft/yii-debug-frontend/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/yiisoft/yii-debug-frontend/?branch=master)

## Installation

You'll need [NodeJs](https://nodejs.org/en/) version 12+.

1. Clone this repository.
2. Run `yarn install` in project root directory.
3. Edit your `environments.ts` file to configure the URL, where Yii debug API is located, i.e. :
   `apiUrl: 'http://yiidemo.test'`. Please notice, that you should only set the base URL of your Yii3 app.
4. Run `ng serve --open` to start your application.
5. Configure CORS Middleware for the Yii debug API, to allow access from different domain name.
