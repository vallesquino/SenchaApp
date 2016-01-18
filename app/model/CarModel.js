Ext.define('SenchaApp.model.CarModel', {
    extend: 'Ext.data.Model',

    statics: {
        diesel: 'diesel',
        petrol: 'petrol',
        hybrid: 'hybrid'
    },

    fields: [{
        name: 'id',
        type: 'string'
    }, {
        name: 'brand',
        type: 'string'
    }, {
        name: 'brandId',
        type: 'string'
    }, {
        name: 'fuel',
        type: 'string'
    }, {
        name: 'colour',
        type: 'string'
    }, {
        name: 'licenseNumber',
        type: 'string'
    }, {
        name: 'sold',
        type: 'boolean'
    }, {
        name: 'price',
        type: 'float'
    }]
});