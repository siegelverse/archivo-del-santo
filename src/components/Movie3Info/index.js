import React from 'react'
import {
    InfoContainer,
    Column1,
    Column2,
    Column3,
    InfoHeading,
    InfoText
} from '../Movie1Info/MovieInfoElements'

const Movie3Info = () => {
    return (
        <InfoContainer>
            <Column1>
                <InfoHeading>Cast</InfoHeading>
                <InfoText>
                    Santo (himself), Wolf Ruvinskis (Rodolfo Labra), Silvia Fournier (Ma. Elena Ramos), 
                    Graciela Lara (Rebeca Ortega), Eduardo Bonada (Fernando), Jean Safont (Jean Safont), 
                    Beni Galán (Beni Galán); WRESTLERS: Dick Medrano, Ray Mendoza, Ham Lee, El Nazi; Ramiro Orci (henchman), 
                    Francisco Jambrina (don Francisco Iglesias), Consuelo Frank (Ma. Teresa Méndez viuda de Ramos), 
                    Carlos Nieto (doctor), Roberto Araya (?Sergio), Marco Antonio Arzate (henchman), 
                    Enrique Cárdenas, Rosa Furman (woman at seance), Pedro "Mago" Septien and Angel Fernández (announcers), 
                    "Picoro" (ring announcer), Ada Carrasco (makeup artist)
                </InfoText>
            </Column1>
            <Column2>
                <InfoHeading>Crew</InfoHeading>
                <InfoText>
                    Alfonso Rosas Priego; DIR: Alfredo B. Crevenna; SCR; Rafael García Travesí;
                    STORY: R. García Travesí, Mario García Camberos; PHOTO: Jorge Stahl Jr.; 
                    MUSIC: Antonio Díaz Conde; PROD CO-ORD: Alfonso Rosas Priego Jr.; 
                    PROD MGR: Mario García Camberos; PROD CHIEF: José Alcalde G.; 
                    SUB-DIR: Felipe Palomino; FILM ED: Alfredo Rosas Prieg
                </InfoText>
            </Column2>
            <Column3>
                <InfoHeading>Notes</InfoHeading>
                <InfoText>
                    This film probably has more "action" than any other Santo film I've seen, and yet it is one of the more boring Santo adventures. 
                    Why? Because the "action" consists of long, clumsily-staged and photographed fights between anywhere from 5 to 10 people, 
                    with constant punching, falling, grunting, and staggering around, but no real resolution and no focus on anyone in particular (not even Santo!).
                </InfoText>
            </Column3>
        </InfoContainer>
    )
}

export default Movie3Info
