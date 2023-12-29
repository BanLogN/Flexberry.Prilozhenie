import {
  defineNamespace,
  defineProjections,
  Model as ЗаказФотоMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-заказ-фото';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаказФотоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
