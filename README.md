# KeyTone
A web based interface for viewing profile data collected by XHProf with AngularJS (1.5) & your own Google Firebase.

KeyTone is a [perftools/xhgui](https://github.com/perftools/xhgui) extension for see real time data in your browser.

## Configuration files
#### Express
The **express/config.js** file contains the default port (3000), you can change it for listen in desired port.
#### Google Firebase
Here you need add two necessary files:
* **firebase/config.js**
* **key.json**

You can get the **key.json** file from your Google Firebase application settings. For that, you need to go to **SERVICE ACCOUNTS** tab, and download the **JSON** file clicking on **GENERATE NEW PRIVATE KEY** button.

For the **config.js** file, you need write in it something like:
```js
var key = require('./key.json');

module.exports = {
    url: 'https://your-firebase-app-name.firebaseio.com',
    credential: function(admin) {
        return admin.credential.cert(key);
    }
}
```
#### MongoDB
The **mongo/config.js** file contains the database URL, you can change it for make request to other domain.

You should put in the file something like:
```js
module.exports = {
    url: 'mongodb://your-mongo-user:your-mongo-password@your-mongo-ip-or-domain:your-mongo-port/xhprof'
}
```

## XHGui
For configure XHGui to synchronize with Google Firebase, you need copy the **xhgui/composer.json** file and paste it in XHGui original directory and execute the following bash command: `composer install`

For see how to append the **xhgui/external/header.php** file, see the original documentation here: [perftools/xhgui](https://github.com/perftools/xhgui)
