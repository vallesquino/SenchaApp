 Ext.define('SenchaApp.controller.MainController', {
     extend: 'Ext.app.Controller',

     control: {
         'mainview > button': {
             click: 'onRefreshClick'
         },
         'mainview > combo': {
             select: 'onBrandChange'
         }
     },

    onRefreshClick: function(){
        Ext.StoreManager.lookup('BrandStore').load();
        Ext.StoreManager.lookup('CarStore').load();
    },
    onBrandChange: function(combo, selectedRecord){
        Ext.StoreManager.lookup('CarStore').filter('brandId', combo.getValue());
    }
 });