import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenieЗаказФотоLForm from './forms/i-i-s-prilozhenie-заказ-фото-l';
import IISPrilozhenieУслугиLForm from './forms/i-i-s-prilozhenie-услуги-l';
import IISPrilozhenieЗаказФотоEForm from './forms/i-i-s-prilozhenie-заказ-фото-e';
import IISPrilozhenieУслугиEForm from './forms/i-i-s-prilozhenie-услуги-e';
import IISPrilozhenieЗаказФотоModel from './models/i-i-s-prilozhenie-заказ-фото';
import IISPrilozhenieУслугиModel from './models/i-i-s-prilozhenie-услуги';
import IISPrilozhenieФотоModel from './models/i-i-s-prilozhenie-фото';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-заказ-фото': IISPrilozhenieЗаказФотоModel,
    'i-i-s-prilozhenie-услуги': IISPrilozhenieУслугиModel,
    'i-i-s-prilozhenie-фото': IISPrilozhenieФотоModel
  },

  'application-name': 'Prilozhenie',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie',
          title: 'Prilozhenie'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        заказ: {
          caption: 'Заказ',
          title: 'Заказ',
          'i-i-s-prilozhenie-заказ-фото-l': {
            caption: 'Заказ фото',
            title: ''
          }
        },
        каталог: {
          caption: 'Каталог',
          title: 'Каталог',
          'i-i-s-prilozhenie-услуги-l': {
            caption: 'Услуги',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie-заказ-фото-l': IISPrilozhenieЗаказФотоLForm,
    'i-i-s-prilozhenie-услуги-l': IISPrilozhenieУслугиLForm,
    'i-i-s-prilozhenie-заказ-фото-e': IISPrilozhenieЗаказФотоEForm,
    'i-i-s-prilozhenie-услуги-e': IISPrilozhenieУслугиEForm
  },

});

export default translations;
