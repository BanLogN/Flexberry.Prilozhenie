import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказ.caption'),
          title: i18n.t('forms.application.sitemap.заказ.title'),
          children: [{
            link: 'i-i-s-prilozhenie-заказ-фото-l',
            caption: i18n.t('forms.application.sitemap.заказ.i-i-s-prilozhenie-заказ-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.заказ.i-i-s-prilozhenie-заказ-фото-l.title'),
            icon: 'archive',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.каталог.caption'),
          title: i18n.t('forms.application.sitemap.каталог.title'),
          children: [{
            link: 'i-i-s-prilozhenie-услуги-l',
            caption: i18n.t('forms.application.sitemap.каталог.i-i-s-prilozhenie-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.каталог.i-i-s-prilozhenie-услуги-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})