Ext.define('SenchaApp.store.BrandStore', {
    extend: 'Ext.data.Store',

    storeId: 'Brands',

    model: 'SenchaApp.model.BrandModel',
    data: [{
        brand: 'BMW',
        id: 'b00000000000000'
    }, {
        brand: 'Audi',
        id: 'b00000000000001'
    }, {
        brand: 'Mercedes',
        id: 'b00000000000002'
    }]
});