import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ДействияEnum from '../enums/i-i-s-prilozhenie-действия';

export default FlexberryEnum.extend({
  enum: ДействияEnum,
  sourceType: 'IIS.Prilozhenie.Действия'
});
