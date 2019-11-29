import { Inject as _Inject, Provides } from 'typescript-ioc';

export function Injectable(): (target: Function) => void {
  return function(target: Function) {
    Provides(target);
  };
}

export const Inject = () => _Inject;
