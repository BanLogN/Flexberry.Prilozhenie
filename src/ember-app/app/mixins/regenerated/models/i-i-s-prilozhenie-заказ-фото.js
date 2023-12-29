import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСоздания: DS.attr('date', { defaultValue() { return new Date(); } }),
  способОплаты: DS.attr('i-i-s-prilozhenie-тип-оплаты'),
  фото: DS.hasMany('i-i-s-prilozhenie-фото', { inverse: 'заказФото', async: false })
});

export let ValidationRules = {
  датаСоздания: {
    descriptionKey: 'models.i-i-s-prilozhenie-заказ-фото.validations.датаСоздания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  способОплаты: {
    descriptionKey: 'models.i-i-s-prilozhenie-заказ-фото.validations.способОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фото: {
    descriptionKey: 'models.i-i-s-prilozhenie-заказ-фото.validations.фото.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказФотоE', 'i-i-s-prilozhenie-заказ-фото', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    способОплаты: attr('Способ оплаты', { index: 1 }),
    фото: hasMany('i-i-s-prilozhenie-фото', 'Фото', {
      количество: attr('Количество', { index: 0 }),
      качествоБумаги: attr('Качество бумаги', { index: 1 }),
      действияСФото: attr('Действия с фото', { index: 2 }),
      услуги: belongsTo('i-i-s-prilozhenie-услуги', 'Услуги', {
        наименование: attr('Наименование', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ЗаказФотоL', 'i-i-s-prilozhenie-заказ-фото', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    способОплаты: attr('Способ оплаты', { index: 1 })
  });
};
