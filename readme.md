To run the project
1. Git Clone the repo.
2. Open it with code editor of your choice.
3. The hosted link of the project is - https://zen-hoover-265f9e.netlify.app
4. I have used IIS Window server to make use of Google Auth Api for Authentication.

To run the server and to be able to use the IIS server follow these steps.
1. Press Window Key and type = "Turn on Windows feature on of off"
2. Click and open it.
3. Look for Internet Information Services and tick the checkbox and click "OK".
4. This will install the IIS server.

-----------------------
Make few modifications
1. Open C:
2. Upon installation of IIS services there will be a folder named "inetpub"
3. C:\inetpub\wwwroot open wwwwroot folder.
4. Delete the files and paste the file named iisstart.htm
5. Open browser and type only "localhost".
6. Press enter, Google Auth Sign In button will appear on center of the screen.
7. Sign in and the page will be redirected to the netlify hosted website.