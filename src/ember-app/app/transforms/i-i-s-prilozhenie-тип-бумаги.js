import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипБумагиEnum from '../enums/i-i-s-prilozhenie-тип-бумаги';

export default FlexberryEnum.extend({
  enum: ТипБумагиEnum,
  sourceType: 'IIS.Prilozhenie.ТипБумаги'
});
