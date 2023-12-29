import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-prilozhenie-заказ-фото-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-prilozhenie-фото+услуги':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'услуги',
            projection: 'УслугиL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
