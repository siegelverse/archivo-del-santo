import React from 'react'
import {
    InfoContainer,
    Column1,
    Column2,
    Column3,
    InfoHeading,
    InfoText
} from '../Movie1Info/MovieInfoElements'

const Movie4Info = () => {
    return (
        <InfoContainer>
            <Column1>
                <InfoHeading>Cast</InfoHeading>
                <InfoText>
                    (Second character name, if given, is from English version, if different from original): Armando Silvestre (Sanmartín=Savage), 
                    Lorena Velázquez (Gloria Sandoval=Gloria Rutherford), Santo (himself=The Saint), Jaime Fernández (Rodríguez), 
                    Irma Serrano (Isabel), Black Shadow (himself), Dagoberto Rodríguez (Almada, chief of detectives), 
                    Carlos Agosti (Genaro=Herbert), Ramón Bugarini (Rogelio= Roger, the butler), Martha Arlette (dancer), 
                    Julián de Meriche (Dino Povetti), Fernando Osés (Dorrel López= Harry Dorell), Eduardo Bonada (zombie), 
                    Gori Guerrero, Sugi Sato, El Bulldog, Firpo Segura, Joe Silva, Steve Morgan, Indio Cacama, Mario Téxas, 
                    Conjunto Antonio Díaz Mena, "Picoro" (ring announcer), Juan Garza (zombie)
                </InfoText>
            </Column1>
            <Column2>
                <InfoHeading>Crew</InfoHeading>
                <InfoText>
                    Alberto López; DIR: Benito Alazraki; ADAPT: Benito Alazraki, Antonio Orellana; STORY: Antonio Orellana, Fernando Osés; 
                    PHOTO: José Ortiz Ramos; MUSIC: Raúl Lavista; PROD MGR: Manuel R. Ojeda; PROD CHIEF: Jorge Cardeña; 
                    ASST DIR: Carlos Villatoro; FILM ED: José Bustos; ART DIR: José Silva; CAMERA OP: Ignacio Romero; MAKEUP: Carmen Palomino; 
                    LIGHTING: Gabriel Castro; SOUND: Rafael Ruiz Esparza, Galdino Samperio, James L. Fields; SOUND ED: Reynaldo P. Portillo; UNION: STPC
                </InfoText>
            </Column2>
            <Column3>
                <InfoHeading>Notes</InfoHeading>
                <InfoText>
                    This was the first Santo film made in Mexico and, unlike his two previous features which were shot in Cuba, 
                    the "Santo mythos" is fairly well-established. For example, the opening sequence shows Santo in the wrestling ring, 
                    being cheered by the crowd (who carry him in on their shoulders), thus establishing him not just as a professional wrestler, 
                    but as an idol of the multitudes. Furthermore, he isn't a wrestler who just happens to stumble into crime-fighting, 
                    he actually has a secret headquarters full of electronic gizmos, and the police consult him for assistance.
                </InfoText>
            </Column3>
        </InfoContainer>
    )
}

export default Movie4Info
