export interface IState {
    isPlaying: boolean;
    isMuted: boolean;
    currentSeek: number;
    volumeBar: number;
    volume: number;
    loaded: number;
    totalDurationOfVideo: number;
}