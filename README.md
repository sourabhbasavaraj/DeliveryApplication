# LOGISTICS AND SHIPPING HUB !

The logistics and shipping hub website will provide courier and package delivery service across the country, for the individuals customers and business partners.

The application has been implemented using the MEAN stack i.e., MonogoDb Express Framework Angular and Node. Along with this we have also made use of MySQL to store all the order data and users data. We have made use of Geolocation API and Zipcode API to get the near me store feature and to calculate the distance between two points respectively. 

API KEY FOR ZIPCODE: 'GIsH1D01hVbneLhoF0vA6J0lEnevrbQJ4189eLIu4ffiUys06EwKd4cSlGGeRk9w'

In order to run our application, we first need to unzip the folder 'DeliveryApplication'.

===========================================
Instructions to deploy and run the project
===========================================

--------
DATABASE
--------

To import the data of our application into the database, follow the below mentioned steps: 

-> Navigate to the database folder and run the .sql file on the MySQL workbench to get the data. 

-> Naviagte to your MongoDB compass -> Go to Collection in the toolbar and navigate to import data 

-> Choose the JSON format and select the JSON file under the database folder 

-> Click on import to get the mongoDB data to your local system. 

-> The database part has been setup now. 

-----------------
BACKEND - NODE
v18.12.1
-----------------

To run the backend of our application, follow the below mentioned steps: 

-> Navigate to the backend folder and open the command line prompt for the current directory. 

-> Once you are at the current directory, type the command "npm install". This command will install all the necessary dependencies present from the package.json file and required nodemodules to run our server.js file. 

-> Once the modules have been installed, make sure to check the credentials of your MySQL database and the mongoDb database under the server.js file. 

-> Run the "node server" command to start the backend of our application. 

-> Nodejs is running on the port 3000 of our local system, make sure that port is not being used by any other application else it will throw an error.

-> If you want to change the port, navigate to the app.listen method at the end of the server.js file and change the port number. 

---------------------
FRONTEND - ANGULAR 14 
v14.2.10
---------------------

To run the frontend of our application, follow the below mentioned steps:

-> Navigate to the frontend folder and open the command line prompt for the current directory. 

-> Once you are at the current directory, type the command "npm install". This command will install all the necessary dependencies present from the package.json file and required nodemodules to run the frontend. 

-> To start the development server, run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

-> Angular is running on the port 4200 of our local system. If the port is being used by any other rapplication, it will ask for the confirmation of change in port once the ng serve command is run. Type "Y" and a port will auto assigned to host the application. 

-------------------------------
ASSIGNMENT FEATURES IMPLEMENTED
-------------------------------

-> NEAR ME feature has been implemented. We have implemented the near me feature by the use of GeoLocation API and the leaflet maps. 

-> For calculation of distance between the two points we have made use of the 'ZIP API'. Reference:- https://docs.us.zip.co/docs/custom-integration-guide

-> We are maintaining a session for each of the user in order to track any multiple orders. We are making use of "JWT TOKENS" here.

-> We are displaying our inventory at the frontend by making using of a bar graph. Here we have made use of the chart.js package. 

-> Login and Signup for the customers have been implemented. The data is getting stored in the MySQL database. The password is encrypted, shh! 

-> Customers can give reviews and rate our services about their experience. The reviews are getting stored in the MongoDB. We have also displayed few of the reviews on our home page. 

-> The user can enter their orderId and can we see the status of their package. 

-> Different portals have been created with different access rights. Admin portal, cutsomers portal and a delivery personeel portal. 

-----------------------------------------------------
TOTAL LINES OF CODE: APPROXIMATELY 7000 LINES OF CODE
-----------------------------------------------------
