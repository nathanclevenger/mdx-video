import { AbsoluteFill, Video } from 'remotion'
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
const gf = new GiphyFetch(process.env.GIPHY_API_KEY)


//  const { data: gif } = await gf.random({ tag: 'beer', type: 'stickers' })

// // configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
// const fetchGifs = (offset) => gf.trending({ offset, limit: 10 })

// // Render the React Component and pass it your fetchGifs as a prop
// ReactDOM.render(<Grid width={800} columns={3} fetchGifs={fetchGifs} />, target)

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