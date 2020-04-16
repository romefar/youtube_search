import React from 'react'
import { YouTubeServiceConsumer } from '../youtube-service-context'

// Old way to use YouTubeService with HOC's
const withYouTubeService = () =>(Wrapped) => {
    return (props) => (
        <YouTubeServiceConsumer>
            {
                (youtubeService) => {
                    return <Wrapped {...props} youtubeService={youtubeService} />
                }
            }
        </YouTubeServiceConsumer>
    )
}

export default withYouTubeService;