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
                    (Estudios América--Cin. Norte, 1963) Prod: Alberto López; Dir: René Cardona [Sr.]; 
                    Scr:René Cardona [Sr.]; Story: Rafael García Travesi; Photo: Alfredo Uribe Jacome; 
                    Music Dir: Enrico C. Cabiati; Prod Mgr: Luis García de León; Asst Dir: Tito Novaro; 
                    Film Ed: José J. Munguía; Art Dir: Arcadi Artis Gener; Camera Op: Roberto Jaramillo; 
                    Makeup: Antonio Ramírez; Sound Engin: Consuelo P. de Rendón; Music Rec: Heinrich Henkel; Union: STIC
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
