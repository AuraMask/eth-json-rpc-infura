const RpcEngine = require('json-rpc-engine');
const providerFromEngine = require('irc-json-rpc-middleware/providerFromEngine');
const createInfuraMiddleware = require('./index');

module.exports = createProvider;

function createProvider(opts) {
  const engine = new RpcEngine();
  engine.push(createInfuraMiddleware(opts));
  return providerFromEngine(engine);
}
