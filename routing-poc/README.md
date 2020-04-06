# RoutingPoc

# IE11 Support Document for Angular 9.

1.	Need to download “Cumulative Security Update for Internet Explorer 11 for Windows 7 for x64-based 
    Systems (KB3008923)   ”. 
    Link# https://www.microsoft.com/en-us/download/confirmation.aspx?id=45154

2.	Open up “\src\polyfills.ts” and uncomment the below 2 lines.

    // import 'classlist.js';  // Run `npm install --save classlist.js`.

    // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

3.	Run the below to commands to install the above packages

    npm install --save classlist.js
    npm install --save web-animations-js

4.	Open up “browserslist” file.

    Modified line 
    From  “not IE 9-11 # For IE 9-11 support, remove 'not'.”
    TO “IE 9-11 # For IE 9-11 support, remove 'not'.

5.	Go to IE11. Press “Alt” key. Navigate to “Tools -> Compatibility  View  Settings”
    Uncheck option “Display intranet sites in Compatibility View”.
    Close the window.

    The above changes will be required to support IE in Production.
    If we do “ng build –prod”. 
    Then go to “cd .\dist\<project-name \
    “npx local-web-server”

	Our application will run.  

    But if we want to run our application locally then some additional steps need to be taken care of.

6.	Open up “tsconfig.json” file.

    Change 
    "target": "es2015",
    To
    "target": "es5",

    Save the changes and run “ng s”.

    We are good to go. 



