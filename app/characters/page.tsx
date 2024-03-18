import {CharacterType, ResponseType} from 'assets/api/rick-and-morty-api';
import {PageWrapper} from 'components/PageWrapper/PageWrapper';
import {CharacterCard} from 'components/Card/CharacterCard/CharacterCard';
import {getLayout} from 'components/Layout/BaseLayout/BaseLayout';
import process from "process";


const getCharacters = async ():Promise<ResponseType<CharacterType>> =>{
    const results = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`)
    return results.json()
}

const Characters = async () => {

    const {results} = await getCharacters()
    const charactersList = results.map(character => (
        <CharacterCard key={character.id} character={character}/>
    ))

    return (
        <PageWrapper>
            {charactersList}
        </PageWrapper>
    )
}

export default Characters