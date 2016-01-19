Ext.define('SenchaApp.store.CarStore', {
    extend: 'Ext.data.Store',

    storeId: 'Cars',

    model: 'SenchaApp.model.CarModel',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    }
});
