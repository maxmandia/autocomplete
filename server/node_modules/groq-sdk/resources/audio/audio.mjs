// File generated from our OpenAPI spec by Stainless.
import { APIResource } from 'groq-sdk/resource';
import * as TranscriptionsAPI from 'groq-sdk/resources/audio/transcriptions';
import * as TranslationsAPI from 'groq-sdk/resources/audio/translations';
export class Audio extends APIResource {
    constructor() {
        super(...arguments);
        this.transcriptions = new TranscriptionsAPI.Transcriptions(this._client);
        this.translations = new TranslationsAPI.Translations(this._client);
    }
}
(function (Audio) {
    Audio.Transcriptions = TranscriptionsAPI.Transcriptions;
    Audio.Translations = TranslationsAPI.Translations;
})(Audio || (Audio = {}));
//# sourceMappingURL=audio.mjs.map