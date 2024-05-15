import Dispatcher from "undici-types/dispatcher";

type RedirectInterceptorOpts = { maxRedirections?: number }

export declare function createRedirectInterceptor (opts: RedirectInterceptorOpts): Dispatcher.DispatchInterceptor
