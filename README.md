# irc-json-rpc-infura [![CircleCI](https://circleci.com/gh/AuraMask/irc-json-rpc-infura.svg?style=svg)](https://circleci.com/gh/AuraMask/irc-json-rpc-infura)

`json-rpc-engine` middleware for infura's REST endpoints.

### usage as provider

```js
const createInfuraProvider = require('irc-json-rpc-infura/src/createProvider')
const Ircjs = require('ircjs')

const provider = createInfuraProvider({ network: 'mainnet' })
const irc = new Ircjs(provider)
```

### usage as middleware

```js
const createInfuraMiddleware = require('irc-json-rpc-infura')
const RpcEngine = require('json-rpc-engine')

const engine = new RpcEngine()
engine.push(createInfuraMiddleware({ network: 'ropsten' }))
```
