import { useInjectReducer } from '../redux-injectors';

jest.mock('redux-injectors', () => ({
  useInjectReducer: () => 'reduxInjector'
}));

describe('redux-injectors', () => {
  it('should return reduxInjector', () => {
    const result = useInjectReducer({ key: 'test', reducer: () => {} });
    expect(result).toEqual('reduxInjector');
  });
});
