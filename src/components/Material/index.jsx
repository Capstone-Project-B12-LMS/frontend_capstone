import parse from 'html-react-parser';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


const Material = ({ assets }) => {

    const {title , content , videoUrl} = assets

    return(
        <>
            {
                title && <h1 className="text-3xl font-bold text-black">{title}</h1>
            }
            {
                videoUrl &&
                
                <div className="w-full mt-8 rounded-[15px] overflow-hidden">
                
                    <LiteYouTubeEmbed
                        id={videoUrl}
                        title='yt-embed'
                    />
                </div>
            }
            <div className="text-black text-xl font-normal mt-6 leading-9">{parse(content)}</div>
        </>
    )
}

export default Material