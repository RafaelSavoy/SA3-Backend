import { HTTPError } from '../../services/errors/httpError';

describe('testing error services', () => {
  it('shoud be return code and message', () => {
    const error = new HTTPError('Server error', 500);
    expect(error.hasOwnProperty('message')).toBeTruthy();
    expect(error.hasOwnProperty('code')).toBeTruthy();
  });
});
