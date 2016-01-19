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

     init: function (){
        var me = this;
        me.loadCars();
        me.loadBrands();
     },

     loadCars: function (){
        var store = Ext.StoreManager.lookup('CarStore');
        this.loadRemoteStore(store, 'getCars');
     },

     loadBrands: function (){
        var store = Ext.StoreManager.lookup('BrandStore');
        this.loadRemoteStore(store, 'getBrands');
     },

     loadRemoteStore: function (store, remoteMethod){
        Visualforce.remoting.Manager.invokeAction($RemoteAction.CarController[remoteMethod],
            function (result, event){
                if (event.status) {
                    store.loadRawData(result);
                }
            },
            {escape: true}
        );
     },

     onRefreshClick: function () {
         var me = this;
            me.loadBrands();
            me.loadCars();
     },

     onBrandChange: function (combo, selectedRecord) {
         Ext.StoreManager.lookup('CarStore').filter('brandId', combo.getValue());
     }
 });
