import React from 'react'
import { YouTubeServiceConsumer } from '../youtube-service-context'

const withYouTubeService = () =>(Wrapped) => {
    return (props) => (
        <YouTubeServiceConsumer>
            {
                (youtubeService) => {
                    return <Wrapped {...props} test={'asdasd'} youtubeService={youtubeService} />
                }
            }
        </YouTubeServiceConsumer>
    )
}

export default withYouTubeService;