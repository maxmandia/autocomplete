import { APIResource } from 'groq-sdk/resource';
import * as AudioAPI from 'groq-sdk/resources/audio/audio';
import * as TranscriptionsAPI from 'groq-sdk/resources/audio/transcriptions';
import * as TranslationsAPI from 'groq-sdk/resources/audio/translations';
export declare class Audio extends APIResource {
    transcriptions: TranscriptionsAPI.Transcriptions;
    translations: TranslationsAPI.Translations;
}
export interface Translation {
    text: string;
}
export declare namespace Audio {
    export import Translation = AudioAPI.Translation;
    export import Transcriptions = TranscriptionsAPI.Transcriptions;
    export import Transcription = TranscriptionsAPI.Transcription;
    export import TranscriptionCreateParams = TranscriptionsAPI.TranscriptionCreateParams;
    export import Translations = TranslationsAPI.Translations;
    export import TranslationCreateParams = TranslationsAPI.TranslationCreateParams;
}
//# sourceMappingURL=audio.d.ts.map