(function() {
    "use strict";

    var MyApp = window.MyApp = { };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    $(function () {
        //overide navigation
        //MyApp.myController = new myLayoutController({ layoutTemplateName: "myLayout" });
        //DevExpress.framework.html.layoutControllers.push({
        //    navigationType: "myControllerNavigation",
        //    controller: MyApp.myController
        //});

        //default navigation
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,            
            navigationType: 'slideout',
            navigation: [
              {
                  title: "Login",
                  action: "#home",
                  icon: "home"
              },
                {
                    title:"Register",
                    action: "#register",
                    icon: "home"
                },
              {
                  title: "About",
                  action: "#about",
                  icon: "info"
              }
            
            ]
        });
        
        MyApp.app.router.register(":view", { view: "home" });
        //MyApp.app.router.register(":view/:name", { view: "home", name: '' });
        //MyApp.app.resolveLayoutController.add(function (args) {
        //    var viewName = args.viewInfo.viewName;
        //    if (viewName === "select") {
        //        var result = $.grep(args.availableLayoutControllers, function (item, index) {
        //            return item.navigationType == 'empty';
        //        });
        //        result.length ? result[0].controller : null;
        //        args.layoutController = result;
        //    }
        //});
        MyApp.app.navigate();
    });
    
})();