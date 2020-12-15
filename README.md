# CON
A Condo-association Online Network System (CON)

# Using a local server

## How to run the application

1. Download Ampps

AMPPS is a solution stack of Apache, MySQL, MongoDB, PHP, Perl and Python for Windows NT, Linux and macOS. Click [here](https://ampps.com/downloads) to download.

2. Move the Ampps application to the Applications folder.

3. Start the Apache and MySql servers.

4. Open a browser and head to ```http://localhost/ampps/```.

5. On the main page, click on ```Manage Domains```.

6. Enter a domain name (ex: con) and click Add.

7. Inside the Ampps folder, locate the ```www``` folder and place the project folder inside of it (the folder cloned from this repository).

8. On a browser window, head to ```http://localhost/phpmyadmin/``` and log in. Typically the username is ```root``` and the password is your sql root password.

9. Once logged in, create a database called ```react-php``` as well as all the project tables (this step can be done later on, but it is important for testing the overall functionality of the app).

10. Open the project folder in your preferred IDE and start the application (```npm start```).

11. You should now be able to make requests to the database.

## Issues starting the MySQL server

If you encounter any issues when attempting to start the MySQL server, open its corresponding configuration file (```Applications/Ampps/conf/my.cnf```), and change the port to ```3308```.

# Using the Concordia remote server

1. Install npm on your machine, a link can be found [here](https://nodejs.org/en/).

2. Download the zipped project file OR clone the following GitHub repository: https://github.com/COMP353-Project/CON

3. Open the project folder in your preferred IDE and run the command `npm i`

4. Once connected to the application, start the application by going back to the project folder (in your IDE) and running the following command:
`npm start`

5. A tab on your browser should open automatically and a public homepage should be visible. If prompted, enter the following login information: 
`Username: dac353_2`
`Password: e876FN`

6. On the top right of the navigation bar, click on the Login button and enter the following information to login as an administrator:
`Email: johnh@con.com`
`Password: john`

7. Once logged in, you can perform any tasks that you would like, such as creating posts, promoting users, deleting groups and condo associations, etc.

8. If you wish to login as a non-administrator, you can choose any from the following list of users:

`paulas@con.com pass: paula`
`hubertj@con.com pass: hubert`
`mariaj@con.com pass: maria`
`theor@con.com pass: theo`
`williamg@con.com pass: william`
`lauraw@con.com pass: laura`
`bradt@con.com pass: brad`
`violets@con.com pass: violet`
`bellar@con.com pass: bella`

## Notes

1. a file named `var_dump.sql` is included in the submission folder, and it contains any information you might need about users. In addition, any pages labeled as 'hardcoded' have no backend implementation.

2. Please refer to the documentation of the system to learn about all the features that you can interact with. Two sections which describe a number of important actions are the sections "Demonstration" and "Post demonstration improvements".

3. If you wish to run the project locally (using the instructions described in the first section of this README), please fork this repository and clone the project.
