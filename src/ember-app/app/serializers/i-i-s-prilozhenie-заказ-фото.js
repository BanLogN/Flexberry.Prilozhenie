import { Serializer as ЗаказФотоSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-заказ-фото';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаказФотоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
