
var tabs = [
{ text: "SEARCH RIDE", iconSrc: "css/images/search.png" },
{ text: "PENDING APPROVAL", iconSrc: "css/images/status_unknown.png" }
];
var tabClicked = function (e) {
    if (e.itemData.text == "SEARCH RIDE")
        MyApp.app.navigate("searchRide", { root: "true" });
    if (e.itemData.text == "PENDING APPROVAL")
        MyApp.app.navigate("ridePending", { root: "true" });
}