
var PRODUCTION_URL = "visualgraphexplorer\.azurewebsites\.net";
var clientId = null;
var azureADConfig = {};
azureADConfig.endpoints = {
    // Map the location of a request to an API to a the identifier of the associated resource
    'https://graph.microsoft.com': 'https://graph.microsoft.com'
};

if (RegExp(PRODUCTION_URL, 'i').test(window.location.host)) {
    azureADConfig.clientId = '78d5a9a4-c418-4199-ac9b-a7e66a61ad91';
} else {
    azureADConfig.clientId = '509bde6e-7c29-4898-a829-2ecfea9dc241'; //this is the dev client id
}
