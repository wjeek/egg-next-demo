import 'isomorphic-unfetch';

import { server } from '../constants/config';

export const request = methodHead => methodBody => fetch(`${server.baseUrl}${methodHead}${methodBody}`);

export const get = request('get');
