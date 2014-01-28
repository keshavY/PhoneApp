
var tabs = [
{ text: "REGISTER VEHICLE", iconSrc: "css/images/search.png" },
{ text: "PENDING APPROVAL", iconSrc: "css/images/status_unknown.png" }
];
var tabClicked = function (e) {
    if (e.itemData.text == "REGISTER VEHICLE")
        MyApp.app.navigate("registerVehicle", { root: "true" });
    if (e.itemData.text == "PENDING APPROVAL")
        MyApp.app.navigate("requestPending", { root: "true" });
}