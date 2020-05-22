import { Inject as _Inject, Singleton } from 'typescript-ioc';

// eslint-disable-next-line @typescript-eslint/ban-types
export function Injectable(): (target: Function) => void {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (target: Function): void {
    Singleton(target);
  };
}

export const Inject = () => _Inject;
