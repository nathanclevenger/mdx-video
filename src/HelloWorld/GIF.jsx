import { AbsoluteFill, Video } from 'remotion';
 
export const GIF = props => {
  return (
    <AbsoluteFill>
      <Video 
        src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' 
        // startFrom={60} 
        // endAt={120}
        // playbackRate={2}
      />
    </AbsoluteFill>
  )
}