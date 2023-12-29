import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-фото', 'Unit | Serializer | i-i-s-prilozhenie-фото', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-фото',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-prilozhenie-действия',
    'transform:i-i-s-prilozhenie-тип-бумаги',
    'transform:i-i-s-prilozhenie-тип-оплаты',

    'model:i-i-s-prilozhenie-заказ-фото',
    'model:i-i-s-prilozhenie-услуги',
    'model:i-i-s-prilozhenie-фото',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
