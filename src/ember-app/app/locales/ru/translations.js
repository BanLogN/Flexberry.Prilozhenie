import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie',
          title: 'Prilozhenie'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-prilozhenie-заказ-фото-l': IISPrilozhenieЗаказФотоLForm,
    'i-i-s-prilozhenie-услуги-l': IISPrilozhenieУслугиLForm,
    'i-i-s-prilozhenie-заказ-фото-e': IISPrilozhenieЗаказФотоEForm,
    'i-i-s-prilozhenie-услуги-e': IISPrilozhenieУслугиEForm
  },

});

export default translations;
