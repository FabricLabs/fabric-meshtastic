'use strict';

// TODO: https://developer.chrome.com/docs/capabilities/serial
// TODO: https://github.com/meshtastic/web

// Constants
const {
  FIXTURE_SEED,
  ALIAS
} = require('../constants');

// Types
const Service = require('@fabric/core/types/service');

/**
 * Mesh networking service.
 */
class Meshtastic extends Service {
  constructor (settings = {}) {
    super(settings);

    this.settings = Object.assign({
      name: 'Meshtastic',
      alias: ALIAS,
      description: 'Experimental service for interacting with Meshtastic devices.',
      seed: FIXTURE_SEED,
      state: {
        status: 'INITIALIZED',
        collections: {
          documents: {},
          nodes: {}
        },
        counts: {
          documents: 0,
          nodes: 0
        }
      }
    }, settings);

    this._state = {
      content: this.settings.state
    };

    return this;
  }
}

module.exports = Meshtastic;
