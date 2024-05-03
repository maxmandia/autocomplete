// File generated from our OpenAPI spec by Stainless.
import { APIResource } from 'groq-sdk/resource';
import { multipartFormRequestOptions } from 'groq-sdk/core';
export class Transcriptions extends APIResource {
    /**
     * Transcribes audio into the input language.
     */
    create(body, options) {
        return this._client.post('/openai/v1/audio/transcriptions', multipartFormRequestOptions({ body, ...options }));
    }
}
(function (Transcriptions) {
})(Transcriptions || (Transcriptions = {}));
//# sourceMappingURL=transcriptions.mjs.map