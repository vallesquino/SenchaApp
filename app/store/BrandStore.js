Ext.define('SenchaApp.store.BrandStore', {
    extend: 'Ext.data.Store',

    storeId: 'Brands',

    model: 'SenchaApp.model.BrandModel',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    }
});
