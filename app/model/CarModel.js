Ext.define('SenchaApp.model.CarModel', {
    extend: 'Ext.data.Model',

    statics: {
        diesel: 'diesel',
        petrol: 'petrol',
        hybrid: 'hybrid'
    },

    fields: [{
        name: 'id',
        type: 'string',
        mapping: 'Id'
    }, {
        name: 'brand',
        type: 'string',
        mapping: 'Name'
    }, {
        name: 'brandId',
        type: 'string',
        mapping: 'Brand__c'
    }, {
        name: 'fuel',
        type: 'string',
        mapping: 'Fuel__c'
    }, {
        name: 'colour',
        type: 'string',
        mapping: 'Colour__c'
    }, {
        name: 'licenseNumber',
        type: 'string',
        mapping: 'LicenseNumber__c'
    }, {
        name: 'sold',
        type: 'boolean',
        mapping: 'Sold__c'
    }, {
        name: 'price',
        type: 'float'
    }]
});