Ext.define('SenchaApp.view.main.Main', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.mainview',

    title: 'SenchaApp',

    bodyPadding: 10,

    items: [{
        xtype: 'combo',
        store: 'BrandStore',
        displayField: 'brand',
        valueField: 'id',
        queryMode: 'local',
        fieldLabel: 'Brands'
    }, {
        xtype: 'grid',
        store: 'CarStore',
        columns: [
            { text: 'Brand', dataIndex: 'brand', flex: 1 },
            { text: 'License Number', dataIndex: 'licenseNumber', flex: 1},
            { text: 'Fuel', dataIndex: 'fuel', flex: 1 },
            { text: 'Color', dataIndex: 'colour', flex: 1},
            { text: 'Price', dataIndex: 'price', flex: 1},
            { text: 'Sold', xtype: 'checkcolumn', dataIndex: 'sold', disabled: true}
        ]
    }, {
        xtype: 'button',
        margin: '10 0 0 0',
        text: 'Refresh'
    }]
});
