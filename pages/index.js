import config from '../config.json'
import styled from 'styled-components'
import { CSSReset } from '../src/components/CSSReset'
import Menu from '../src/components/Menu'
import { StyledTimeline } from '../src/components/Timeline'
import { useState } from 'react'
export default function HomePage() {
    // const styledPages = { backgroundColor: "red" }
    // console.log(config.playlists)
    const [valorDoFiltro, setValorDoFiltro] = useState("")
    return (
        <>
            <CSSReset/>
            <div style={{
                display:"flex",
                flexDirection:'column',
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue ={valorDoFiltro} playlists={config.playlists} />
            </div>
        
        </>
    )
}
// function Menu() {
//     return (
//         <div>Menu</div>
//     )
// }

const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
const StyledBanner = styled.div`
    background-image: url(${({bg})=>bg});
    background-size: cover;
    height: 230px;
`
function Header() {
    return (
        <StyledHeader>
            <StyledBanner bg={config.bg}/>
            <div className='user-info'>
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </div>
        </StyledHeader>
    )
}

function Timeline({searchValue, ...props}) { //pegar o searchValue e todas as outras propriedades 
    const playlistsNames = Object.keys(props.playlists)
    return (
        <StyledTimeline>
            {playlistsNames.map((playlistsName,i) => {
                const videos = props.playlists[playlistsName]
                return(
                    <section key={i}>
                        <h2>{playlistsName}</h2>
                        <div>
                            {videos.filter((video)=>{
                                const titleNormalized = video.title.toLowerCase()
                                // const searchValueNormalized = searchValue.toLowerCase()
                                return titleNormalized.includes(searchValue)
                            }).map((video,i)=>{
                                return(
                                    <a href={video.url}>
                                        <img src={video.thumb}/>
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}