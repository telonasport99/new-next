import {EpisodeType, ResponseType} from 'assets/api/rick-and-morty-api';
import {PageWrapper} from 'components/PageWrapper/PageWrapper';
import {Card} from 'components/Card/Card';
import {getLayout} from 'components/Layout/BaseLayout/BaseLayout';
import * as process from "process";
import {notFound} from "next/navigation";



const getEpisodes = async ():Promise<ResponseType<EpisodeType>> =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/episode`,{
        next:{revalidate:60}
    })
    return res.json()
}
const Episodes = async () => {
    const {results} = await getEpisodes()
    const episodesList = results.map(episode => (
        <Card key={episode.id} name={episode.name}/>
    ))
    if(!results){
        return notFound()
    }
    return (
        <PageWrapper>
            {episodesList}
        </PageWrapper>
    )
}

Episodes.getLayout = getLayout
export default Episodes
