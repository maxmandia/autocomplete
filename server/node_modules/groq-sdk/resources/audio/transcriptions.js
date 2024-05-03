"use strict";
// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transcriptions = void 0;
const resource_1 = require("groq-sdk/resource");
const core_1 = require("groq-sdk/core");
class Transcriptions extends resource_1.APIResource {
    /**
     * Transcribes audio into the input language.
     */
    create(body, options) {
        return this._client.post('/openai/v1/audio/transcriptions', (0, core_1.multipartFormRequestOptions)({ body, ...options }));
    }
}
exports.Transcriptions = Transcriptions;
(function (Transcriptions) {
})(Transcriptions = exports.Transcriptions || (exports.Transcriptions = {}));
//# sourceMappingURL=transcriptions.js.map