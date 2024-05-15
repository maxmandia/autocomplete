import Agent from 'undici-types/agent'
import buildConnector from 'undici-types/connector';
import Client from 'undici-types/client'
import Dispatcher from 'undici-types/dispatcher'
import { IncomingHttpHeaders } from 'undici-types/header'
import Pool from 'undici-types/pool'

export default ProxyAgent

declare class ProxyAgent extends Dispatcher {
  constructor(options: ProxyAgent.Options | string)

  dispatch(options: Agent.DispatchOptions, handler: Dispatcher.DispatchHandlers): boolean;
  close(): Promise<void>;
}

declare namespace ProxyAgent {
  export interface Options extends Agent.Options {
    uri: string;
    /**
     * @deprecated use opts.token
     */
    auth?: string;
    token?: string;
    headers?: IncomingHttpHeaders;
    requestTls?: buildConnector.BuildOptions;
    proxyTls?: buildConnector.BuildOptions;
    clientFactory?(origin: URL, opts: object): Dispatcher;
  }
}
