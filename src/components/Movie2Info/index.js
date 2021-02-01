import React from 'react'
import {
    InfoContainer,
    Column1,
    Column2,
    Column3,
    InfoHeading,
    InfoText
} from '../Movie1Info/MovieInfoElements'

const Movie2Info = () => {
    return (
        <InfoContainer>
            <Column1>
                <InfoHeading>Cast</InfoHeading>
                <InfoText>
                    Santo (himself), Lorena Velázquez (Isabel de Arango), Fernando Osés (Encapuchado Negro), 
                    Bety González (Alicia), Mario Sevilla (Abraca; Dr. Zanoni), Mario Orea (monk), 
                    Guillermo Hernández "Lobo Negro" (first opponent), José Alvarez Valdez, Mario Zebadua "Colocho" (reporter), 
                    Martha Lasso Rentería, Emilio Garibay, Carlos Suárez & Margarito Luna (Inquisition men), 
                    Víctor Velázquez (Inquisition official), Juan Garza (2d opponent), Jorge Mateos, 
                    Roy Fletcher (arena policeman)
                </InfoText>
            </Column1>
            <Column2>
                <InfoHeading>Crew</InfoHeading>
                <InfoText>
                    (Filmica Vergara Cinecomisiones, 1964) PROD: Luis Enrique Vergara C.; DIR: José Díaz Morales; SCR: Rafael García Travesí; 
                    STORY: Rafael García Travesí, Fernando Osés; PHOTO: Eduardo Valdez; MUSIC: Jorge Pérez Herrera; PROD MGR: Roy Fletcher; 
                    PROD CHIEF: José Rodríguez R.; ASST DIR: Angel Rodríguez; FILM ED/SOUND ED: José Juan Munguía; CAMERA OP: Dagobied Rodríguez; 
                    COSTUMES: Bertha Mendoza López; MAKEUP: Armando Islas; DIALOG REC: Jesús Sánchez; MUSIC/RE-REC: Salvador Topete; 
                    RECORDIST: Daniel Mercado Díaz; Union: STIC
                </InfoText>
            </Column2>
            <Column3>
                <InfoHeading>Notes</InfoHeading>
                <InfoText>
                    Another of the unusual, cheap but entertaining Santo vehicles made for Vergara. 
                    Like El barón Brákola and Atacan las brujas, the film contains extensive flashback scenes to colonial times which feature a Santo-ancestor.
                    In fact, El hacha diabólica includes a sort of Santo "origin scene," in which an ordinary man (whose face is never shown, however) is magically transformed into Santo, el Enmascarado de Plata, 
                    complete with his 20th-century wrestling outfit. It's also interesting to note that El hacha diabólica contains a Santo-unmasked scene, 
                    in which an uncredited actor (with thick black hair and high cheekbones) pulls off the silver mask and kisses Bety González: he's only shown 3/4 face but it's fairly obvious that this isn't Rodolfo Guzmán Huerta.
                </InfoText>
            </Column3>
        </InfoContainer>
    )
}

export default Movie2Info
