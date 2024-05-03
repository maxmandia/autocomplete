"use strict";
// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Translations = void 0;
const resource_1 = require("groq-sdk/resource");
const core_1 = require("groq-sdk/core");
class Translations extends resource_1.APIResource {
    /**
     * Translates audio into English.
     */
    create(body, options) {
        return this._client.post('/openai/v1/audio/translations', (0, core_1.multipartFormRequestOptions)({ body, ...options }));
    }
}
exports.Translations = Translations;
(function (Translations) {
})(Translations = exports.Translations || (exports.Translations = {}));
//# sourceMappingURL=translations.js.map