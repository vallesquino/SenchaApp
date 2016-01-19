Ext.define('SenchaApp.model.BrandModel', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'string',
        mapping: 'Id'
    }, {
        name: 'brand',
        type: 'string',
        mapping: 'Name'
    }]
});