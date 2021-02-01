import React from 'react'
import {
    InfoContainer,
    Column1,
    Column2,
    Column3,
    InfoHeading,
    InfoText
} from './MovieInfoElements'

const Movie1Info = () => {
    return (
        <InfoContainer>
            <Column1>
                <InfoHeading>Cast</InfoHeading>
                <InfoText>
                    Santo (himself), María Duval (Laura Montes), Roberto Cañedo (Goudini, the Strangler), 
                    Carlos López Moctezuma (Insp. Villegas), Ofelia Montesco (Lilián), Begoña Palacios (Irene), 
                    Alberto Vázquez (Javier), Eric del Castillo (Jerry Marcos), Emma Arvizu (Claudia), 
                    Julián de Meriche (Julián Fiorelli), Milton Ray (Milton), Mayté Carol, Gloria Chávez, 
                    Julio Ahuet (police agent), Manuel Dondé (suspicious man), José Cora, Guillermo Bravo Sosa (theatre caretaker), 
                    Salvador Terroba, Edith Barr (singer), La Sonora Santanera (musical group), Nothanael León "Frankestein" (hired killer), 
                    Jesús Gómez (policeman), "Picoro" (ring ancr), Benny Galan and Fernando Osés (Santo's ring opponents), Tito Novaro (stage hand)
                </InfoText>
            </Column1>
            <Column2>
                <InfoHeading>Crew</InfoHeading>
                <InfoText>
                    (Estudios América--Cin. Norte, 1963) PROD: Alberto López; DIR: René Cardona [Sr.]; 
                    SCR:René Cardona [Sr.]; STORY: Rafael García Travesi; PHOTO: Alfredo Uribe Jacome; 
                    MUSIC DIR: Enrico C. Cabiati; PROD MGR: Luis García de León; ASST DIR: Tito Novaro; 
                    FILM ED: José J. Munguía; ART DIR: Arcadi Artis Gener; CAMERA OP: Roberto Jaramillo; 
                    MAKEUP: Antonio Ramírez; SOUND ENG: Consuelo P. de Rendón; MUSIC REC: Heinrich Henkel; Union: STIC
                </InfoText>
            </Column2>
            <Column3>
                <InfoHeading>Notes</InfoHeading>
                <InfoText>
                    Both this film and the sequel, El espectro del estrangulador, are odd patchworks of musical numbers, wrestling matches, and a horror-mystery plot. 
                    Wait, you may say, isn't that what most wrestling-hero movies are like? Well, yes and no. 
                    Santo vs. el estrangulador doesn't have one or two musical numbers tossed in, it has NINE songs. 
                    Fortunately, five (including Alberto Vázquez singing “16 Tons” in English, and Begoña Palacios doing “Fever”) of them are crammed into the first 20 minutes or so (Santo doesn't appear, except in two ring segments, until 27 minutes have passed!),
                    so a judicious use of the fast-forward button will get you into a more plot-heavy section of the movie.
                </InfoText>
            </Column3>
        </InfoContainer>
    )
}

export default Movie1Info
