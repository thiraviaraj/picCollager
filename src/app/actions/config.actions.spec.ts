import * as fromConfig from './config.actions';

describe('loadConfigs', () => {
  it('should return an action', () => {
    expect(fromConfig.loadConfigs({data: []}).type).toBe('[Config] Load Configs');
  });
});
