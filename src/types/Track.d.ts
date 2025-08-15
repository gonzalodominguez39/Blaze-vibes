import type { StreamInfo } from "./Stream";
export type Track = {
    track_id: number;
    description: string | null;
    genre: string;
    id: string;
    track_cid: string;
    preview_cid: string | null;
    orig_file_cid: string;
    orig_filename: string;
    is_original_available: boolean;
    mood: string;
    release_date: string;
    repost_count: number;
    favorite_count: number;
    comment_count: number;
    tags: string | null;
    title: string;
    slug: string;
    duration: number;
    is_downloadable: boolean;
    play_count: number;
    ddex_app: string | null;
    pinned_comment_id: number | null;
    playlists_containing_track: number[];
    playlists_previously_containing_track: Record<string, unknown>;
    album_backlink: string | null;
    blocknumber: number;
    create_date: string | null;
    created_at: string;
    cover_art_sizes: string;
    credits_splits: unknown;
    isrc: string | null;
    license: string;
    iswc: string | null;
    field_visibility: {
      mood: boolean;
      tags: boolean;
      genre: boolean;
      share: boolean;
      remixes: boolean;
      play_count: boolean;
    };
    has_current_user_reposted: boolean;
    has_current_user_saved: boolean;
    is_scheduled_release: boolean;
    is_unlisted: boolean;
    stem_of: unknown;
    track_segments: unknown[];
    updated_at: string;
    is_delete: boolean;
    cover_art: string | null;
    is_available: boolean;
    ai_attribution_user_id: string | null;
    allowed_api_keys: string | null;
    audio_upload_id: string | null;
    preview_start_seconds: number | null;
    bpm: number;
    is_custom_bpm: boolean;
    musical_key: string;
    is_custom_musical_key: boolean;
    audio_analysis_error_count: number;
    comments_disabled: boolean;
    ddex_release_ids: string | null;
    artists: string | null;
    resource_contributors: string | null;
    indirect_resource_contributors: string | null;
    rights_controller: string | null;
    copyright_line: string | null;
    producer_copyright_line: string | null;
    parental_warning_type: string | null;
    is_stream_gated: boolean;
    is_download_gated: boolean;
    cover_original_song_title: string | null;
    cover_original_artist: string | null;
    is_owned_by_user: boolean;
    permalink: string;
    is_streamable: boolean;
    artwork: Artwork;
    stream: StreamInfo;
    download: string | null;
    preview: string | null;
    user_id: string;
    user: User;
    access: {
      stream: boolean;
      download: boolean;
    };
    followee_reposts: unknown[];
    followee_favorites: unknown[];
    remix_of: {
      tracks: unknown[];
    };
    stream_conditions: unknown;
    download_conditions: unknown;
  };
  export type Artwork = {
    "150x150": string;
    "480x480": string;
    "1000x1000": string;
    mirrors: string[];
  };
  
  export type TrackDetail={
    data:Track

  }