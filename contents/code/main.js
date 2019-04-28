
var panelShown = 1;

var hide = "panelById(panelIds[0]).height = 0";
var show = "panelById(panelIds[0]).height = 30";


registerShortcut("Toggle Menu Bar", "Toggle Menu Bar", "Meta+F1", function () {
    if(panelShown == 1){
        panelShown = 0; 
        callDBus("org.kde.plasmashell" , "/PlasmaShell" , "org.kde.PlasmaShell" , "evaluateScript" , hide);
    }
    else{
        panelShown = 1;
        callDBus("org.kde.plasmashell" , "/PlasmaShell" , "org.kde.PlasmaShell" , "evaluateScript" , show);
    }
});

