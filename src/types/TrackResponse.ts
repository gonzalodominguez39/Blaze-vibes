export interface ResponseTrack{
    data: Daum[]
  }
  
  export interface Daum {
    artwork: Artwork
    description: string
    genre: string
    id: string
    track_cid: string
    mood: string
    release_date: string
    remix_of: RemixOf
    repost_count: number
    favorite_count: number
    tags: string
    title: string
    user: User
    duration: number
    downloadable: boolean
    play_count: number
    permalink: string
    is_streamable: boolean
  }
  
  export interface Artwork {
    "150x150": string
    "480x480": string
    "1000x1000": string
  }
  
  export interface RemixOf {
    tracks: any
  }
  
  export interface User {
    album_count: number
    artist_pick_track_id: string
    bio: string
    cover_photo: CoverPhoto
    followee_count: number
    follower_count: number
    does_follow_current_user: boolean
    handle: string
    id: string
    is_verified: boolean
    location: string
    name: string
    playlist_count: number
    profile_picture: ProfilePicture
    repost_count: number
    track_count: number
    is_deactivated: boolean
    is_available: boolean
    erc_wallet: string
    spl_wallet: string
    supporter_count: number
    supporting_count: number
    total_audio_balance: any
  }
  
  export interface CoverPhoto {
    "640x": string
    "2000x": string
  }
  
  export interface ProfilePicture {
    "150x150": string
    "480x480": string
    "1000x1000": string
  }
  