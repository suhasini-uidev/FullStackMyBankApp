# FullStackMyBankApp
https://tinyurl.com/suhasini-KarriFSBankingApp to access the app and test it.

Instructions to run it locally.
1. Downlaod the app from git
2. Go to the main directory and install express and cors 
2.1 npm install express
2.2 npm install cors
3. Run mongo dbb
3.1 docker run -p 27017:27017 --name badbank -d mongo
3.2 run docker ps and netstat -an | grep 27017 to ensure mongo is running at the designated port.  The same can be verified using 'Robo 3t' app.
4. Run express node server
4.1 node index.js   You should see port 8080 is open and the express server connected to mongo db
5. Open client on the browser
5.1 https://localhost:8080

Secure Bank App
1. The bank allows for user to create account and check all the accounts - Name and username(email).  Represented by 'Create Account' and 'AllData' tabs.
2. Once an account is created, the user can use secure login and logoff using 'Login' tab. 
3. The user can check his account balance, deposit money and withraw money using 'Balance', 'Deposit' and 'Withdraw' tabs.  Only a authenticate user (logged in user) can perform these actions.

License: Suhasini Karri