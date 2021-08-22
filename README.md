# trading-history
Follow your trading history with some useful analysis

## Development setup
1. `git clone git@github.com:szberko/trading-history.git`
2. `yarn install` - will download all the dependencies
3. `yarn start` - will build and start the application for the first time

## If you are using WebStorm as IDE
1. Copy over run configuration files:
    ```shell
    mkdir .idea/runConfigurations
    cp dev/webstorm-runConfigurations .idea/runConfigurations
    ```
   1. `debug-electron` - starts the application in debug mode 
   2. `debug-js` - starts another debug session which connects to DevTools
   3. `debug` - compounds the above two and starts both of them.

## Create executable
`yarn dist`

This can change in the future. Currently, the project is heavily under development so this part is not yet covered.
