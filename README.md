# CON
A Condo-association Online Network System (CON)

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
