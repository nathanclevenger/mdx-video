import { AbsoluteFill, staticFile, Video } from 'remotion'
 
export const StockVideo = props => {
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