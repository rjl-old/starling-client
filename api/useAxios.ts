import type {AxiosRequestConfig} from 'axios';
import Axios from 'axios';
import {useCallback} from 'react';

const AXIOS_INSTANCE = Axios.create({
  baseURL: 'http://localhost:8080',
});

export const useAxios = <T>(): ((config: AxiosRequestConfig) => Promise<T>) => {
  return useCallback((config: AxiosRequestConfig) => {
    const source = Axios.CancelToken.source();
    const promise = AXIOS_INSTANCE({
                      ...config,
                      cancelToken: source.token,
                    }).then(({data}) => data);

    // @ts-expect-error(arlyon): this exists
    promise.cancel = () => {
      source.cancel('Query was cancelled by React Query');
    };

    return promise;
  }, []);
};
