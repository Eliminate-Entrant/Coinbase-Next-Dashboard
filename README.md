# Coinbase Dashboard using NextJS

Dashboard to visualise trading product information. Users can look up all the trading symbols in the exchange and select historical prices of symbol based on:
    - Start Date
    - End Date
    - Granularity 

#
Before running dashboard, make an `.env` file in the root directory in one does not exist or add the following to your environment variable:
    - `NEXT_PUBLIC_COINBASE_API_BASE_URL`
    - `NEXT_PUBLIC_COINBASE_API_BASE_URL_WSS`
    - `NEXT_PUBLIC_COINBASE_API_KEY`
    - `NEXT_PUBLIC_COINBASE_API_SECRET`
    - `NEXT_PUBLIC_COINBASE_API_PASSPHRASE`

Make sure all the environment variables are setup properly or else the dashbaord will throw an error.

#
### 2 main ways to run dashboard:

1. To run using **Docker**:
    - Running Dashboard:
        Type `make run` in terminal of root directory where Makefile is present
        This should open a connection at `0.0.0.0:3000`, and so to view dashboard go to `127.0.0.1:3000`
        Make sure the port numbers are the same as the docker one, check DockerFile
    - Stopping docker-compose:
        Type `docker-compose down`

2. To run locally using **npm**:
    - Install node dependencies:
        Type `npm install`
    - Build dashboard:
        Type `npm run build`
    - Running Dashboard:
        Type `npm run sdevtart`
        Should start at `localhost`

To run sample tests using cypress in root folder:
    Type `npx cypress open`
    - Open GUI in chrome or electron framework and choose tests from the ./cypress/e2e/tests folder
    - There are 3 tests, one testbench for each page:
        - Homepage
        - Historic Prices
        - Wallet Accounts



# Features of App:

1. Landing page:
    - Includes all trading pairs and their information in a scrollable table
    - Includes Number of total trading pairs
2. Historical page:
    - Drop down menu to view and select of all available symbols
    - Date range selection
    - Granularity selection
    - Candle-stick graph of selected symbol
    - Line-plot graph of selected symbol with option to choose linegraph
3. Account:
    - Checks whether AUTH is working
    - Gets all trading accounts of user based on api credentials given

