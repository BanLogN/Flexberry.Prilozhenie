import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипОплатыEnum from '../enums/i-i-s-prilozhenie-тип-оплаты';

export default FlexberryEnum.extend({
  enum: ТипОплатыEnum,
  sourceType: 'IIS.Prilozhenie.ТипОплаты'
});
