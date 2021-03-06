import { expect } from 'chai';
import sinon from 'sinon';
import { TelldusCoreClient, LocalAPIClient } from '../src/clients';
import * as utils from './utils';

describe('Adapter', () => {
  afterEach(() => {
    sinon.restore();
  });

  it.skip('selects "local-api" client based on the config', async () => {
    const adapter = utils.createAdapter({
      client: 'local-api',
      url: 'http://192.168.1.100',
      token: 'test_token',
    });

    await adapter.promise;

    expect(adapter.client).to.be.an.instanceOf(LocalAPIClient);
  });

  it.skip('selects "telldus-core" client based on the config', async () => {
    const adapter = utils.createAdapter({
      client: 'telldus-core',
      socket: '/tmp/TelldusClient',
    });

    await adapter.promise;

    expect(adapter.client).to.be.an.instanceOf(TelldusCoreClient);
  });
});
