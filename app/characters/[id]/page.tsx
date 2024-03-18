import {API} from 'assets/api/api';
import {CharacterType, ResponseType} from 'assets/api/rick-and-morty-api';
import {PageWrapper} from 'components/PageWrapper/PageWrapper';
import {CharacterCard} from 'components/Card/CharacterCard/CharacterCard';
import {getLayout} from 'components/Layout/BaseLayout/BaseLayout';
import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import s from 'styles/styles.module.css'
import process from "process";




const getCharacters = async ():Promise<ResponseType<CharacterType>> =>{
    const results = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`)
    return results.json()
}
export async function generateStaticParams(){
    const {results} = await getCharacters()
    return results.map((character=>({id: String(character.id)})))
}

const Character = ({params}:{params:{id:string}}) => {
    return (
        <PageWrapper>
            <div className={s.container}>
                <h1 className={s.text}>ID: {params.id}</h1>
            </div>
        </PageWrapper>
    )
}

export default Character
