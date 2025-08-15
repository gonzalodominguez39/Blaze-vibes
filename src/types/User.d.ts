export type User = {
    album_count: number;
    bio: string;
    follower_count: number;
    followee_count: number;
    handle: string;
    id: string;
    user_id: number;
    is_verified: boolean;
    twitter_handle: string | null;
    instagram_handle: string | null;
    tiktok_handle: string | null;
    verified_with_twitter: boolean;
    verified_with_instagram: boolean;
    verified_with_tiktok: boolean;
    website: string | null;
    donation: string | null;
    location: string | null;
    name: string;
    playlist_count: number;
    profile_type: string | null;
    repost_count: number;
    track_count: number;
    is_deactivated: boolean;
    is_available: boolean;
    erc_wallet: string;
    spl_wallet: string;
    usdc_wallet: string | null;
    spl_usdc_payout_wallet: string | null;
    supporter_count: number;
    supporting_count: number;
    wallet: string;
    balance: string;
    associated_wallets_balance: string;
    total_balance: string;
    total_audio_balance: number;
    payout_wallet: string;
    waudio_balance: string;
    associated_sol_wallets_balance: string;
    blocknumber: number;
    created_at: string;
    is_storage_v2: boolean;
    creator_node_endpoint: string;
    current_user_followee_follow_count: number;
    does_current_user_follow: boolean;
    does_current_user_subscribe: boolean;
    does_follow_current_user: boolean;
    handle_lc: string;
    updated_at: string;
    cover_photo_sizes: string;
    cover_photo_cids: string | null;
    cover_photo_legacy: string | null;
    profile_picture_sizes: string;
    profile_picture_cids: string | null;
    profile_picture_legacy: string | null;
    has_collectibles: boolean;
    allow_ai_attribution: boolean;
    artist_pick_track_id: number | null;
    profile_picture: ProfilePicture;
    cover_photo: CoverPhoto;
  };
  

  export type ProfilePicture = {
    "150x150": string;
    "480x480": string;
    "1000x1000": string;
    mirrors: string[];
  };

  export type CoverPhoto = {
    "640x": string;
    "2000x": string;
    mirrors: string[];
  };
  
    