// File generated from our OpenAPI spec by Stainless.
import { APIResource } from 'groq-sdk/resource';
import { multipartFormRequestOptions } from 'groq-sdk/core';
export class Translations extends APIResource {
    /**
     * Translates audio into English.
     */
    create(body, options) {
        return this._client.post('/openai/v1/audio/translations', multipartFormRequestOptions({ body, ...options }));
    }
}
(function (Translations) {
})(Translations || (Translations = {}));
//# sourceMappingURL=translations.mjs.map