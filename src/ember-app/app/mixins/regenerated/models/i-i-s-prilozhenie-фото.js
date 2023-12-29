import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  действияСФото: DS.attr('i-i-s-prilozhenie-действия'),
  качествоБумаги: DS.attr('i-i-s-prilozhenie-тип-бумаги'),
  количество: DS.attr('number'),
  услуги: DS.belongsTo('i-i-s-prilozhenie-услуги', { inverse: null, async: false }),
  заказФото: DS.belongsTo('i-i-s-prilozhenie-заказ-фото', { inverse: 'фото', async: false })
});

export let ValidationRules = {
  действияСФото: {
    descriptionKey: 'models.i-i-s-prilozhenie-фото.validations.действияСФото.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  качествоБумаги: {
    descriptionKey: 'models.i-i-s-prilozhenie-фото.validations.качествоБумаги.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-prilozhenie-фото.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  услуги: {
    descriptionKey: 'models.i-i-s-prilozhenie-фото.validations.услуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказФото: {
    descriptionKey: 'models.i-i-s-prilozhenie-фото.validations.заказФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФотоE', 'i-i-s-prilozhenie-фото', {
    услуги: belongsTo('i-i-s-prilozhenie-услуги', 'Услуги', {
      наименование: attr('Наименование', { index: 1, hidden: true }),
      цена: attr('Цена', { index: 2 })
    }, { index: 0, displayMemberPath: 'наименование' }),
    количество: attr('Количество', { index: 3 }),
    качествоБумаги: attr('Качество бумаги', { index: 4 }),
    действияСФото: attr('Действия с фото', { index: 5 })
  });
};
