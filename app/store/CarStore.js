Ext.define('SenchaApp.store.CarStore', {
    extend: 'Ext.data.Store',

    storeId: 'Cars',

    model: 'SenchaApp.model.CarModel',
    data: [{
        brand: 'BMW',
        brandId: 'b00000000000000',
        id: 'a00000000000000',
        fuel: SenchaApp.model.CarModel.hybrid,
        colour: 'Red',
        licenseNumber: '0000',
        sold: false,
        price: 100
    }, {
        brand: 'BMW',
        brandId: 'b00000000000000',
        id: 'a00000000000003',
        fuel: SenchaApp.model.CarModel.petrol,
        colour: 'Pink',
        licenseNumber: '0003',
        sold: false,
        price: 0
    }, {
        brand: 'Audi',
        brandId: 'b00000000000001',
        id: 'a00000000000001',
        fuel: SenchaApp.model.CarModel.diesel,
        colour: 'White',
        licenseNumber: '0001',
        sold: false,
        price: 300
    }, {
        brand: 'Mercedes',
        brandId: 'b00000000000002',
        id: 'a00000000000002',
        fuel: SenchaApp.model.CarModel.petrol,
        colour: 'Black',
        licenseNumber: '0002',
        sold: true,
        price: 500
    }]
});