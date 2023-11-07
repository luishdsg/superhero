import React, { useState } from 'react';
import { SuperHeroInterface } from '../../../interface/superhero-interface';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { box, vs, infoHero, bgS, borderBox2, borderBox1, bR1, bR2, bebas } from '../../styles/style';


type ModalProps = {
    selectedHero: SuperHeroInterface | null;
    secondSelectedHero: SuperHeroInterface | null;
    closeModal: () => void;
};

type PowerstatsProps = {
    label: string;
    detail: number | undefined;
};
const ModalHero: React.FC<ModalProps> = ({ selectedHero, secondSelectedHero, closeModal }) => {

    const [open, setOpen] = useState(true);
    let resultHero = '';
    if (selectedHero && secondSelectedHero) {
        const selectedStats = Object.values(selectedHero.powerstats);
        const secondSelectedStats = Object.values(secondSelectedHero.powerstats);
        let scoreSelected = 0;
        let scoreSecondSelected = 0;
        for (let i = 0; i < selectedStats.length; i++) {
            if (selectedStats[i] < secondSelectedStats[i]) {
                scoreSecondSelected++;
            } else if (selectedStats[i] > secondSelectedStats[i]) {
                scoreSelected++;
            }
        }
        if (scoreSelected > scoreSecondSelected) {
            resultHero = `QUEM <span class="text-warning">GANHA</span> É <span class="text-warning"> <br/>${selectedHero.name}</span>`;
        } else if (scoreSelected < scoreSecondSelected) {
            resultHero = `QUEM <span class="text-warning">GANHA</span> É <span class="text-warning"> <br/>${secondSelectedHero.name}</span>`;
        } else {
            resultHero = `<span class="text-warning">EMPATE</span> `;
        }
    }


    const Powerstats: React.FC<PowerstatsProps> = ({ label, detail }) => {
        return (
            <div className="d-flex align-items-center text-left">
                <Typography className="text-warning">
                    {label}:
                </Typography>
                <Typography>
                    {detail}
                </Typography>
            </div>
        );
    };

    const areItemsDuplicated = selectedHero?.id === secondSelectedHero?.id;
    return (
        <div className="w-100 h-100 position-relative">
            <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="overflow-y-auto"
            >
                <Box sx={box} className="overflow-x-hidden">
                    {areItemsDuplicated &&
                        <div>Duplicado
                            <div>Item selecionado: {selectedHero?.name}</div>
                            <div>Segundo item selecionado: {secondSelectedHero?.name}</div>
                        </div>
                    }
                    {!areItemsDuplicated &&
                        <div className="row">
                            <div className="col-12">
                                <Typography variant="h5" className="text-center" id="modal-modal-description" sx={bebas}>
                                    <div dangerouslySetInnerHTML={{ __html: resultHero }} />
                                </Typography>
                            </div>
                            <div className="col-5  d-flex justify-content-center">
                                <div>
                                    <Box sx={{
                                        ...bgS,
                                        ...borderBox1,
                                        ...bR1
                                    }}
                                        component="img"
                                        src={selectedHero?.images?.lg}
                                        alt={selectedHero?.name}
                                    />
                                    <Box sx={{
                                        ...infoHero,
                                        ...borderBox2,
                                        ...bR2

                                    }}>
                                        <Powerstats label="Inteligência" detail={selectedHero?.powerstats?.intelligence} />
                                        <Powerstats label="Força" detail={selectedHero?.powerstats?.strength} />
                                        <Powerstats label="Velocidade" detail={selectedHero?.powerstats?.speed} />
                                        <Powerstats label="Durabilidade" detail={selectedHero?.powerstats?.durability} />
                                        <Powerstats label="Poder" detail={selectedHero?.powerstats?.power} />
                                        <Powerstats label="Combate" detail={selectedHero?.powerstats?.combat} />
                                    </Box>
                                    <Typography sx={bebas} variant="h2" className="text-center" component="h2">
                                        {selectedHero?.name}
                                    </Typography>
                                </div>

                            </div>
                            <div className="col-2 px-0 d-flex justify-content-center align-items-center">
                                <Box
                                    component="img"
                                    sx={vs}
                                    alt="The house from the offer."
                                    src="https://www.freepnglogos.com/uploads/vs-png/vs-fire-icon-png-logo-Image-10.png"
                                />
                                

                            </div>
                            <div className="col-5 d-flex justify-content-center">
                                <div>
                                    <Typography sx={bebas} variant="h2" className="text-center" component="h2">
                                        {secondSelectedHero?.name}
                                    </Typography>
                                    <Box sx={{
                                        ...infoHero,
                                        ...bR1,
                                        ...borderBox1
                                    }}>
                                        <Powerstats label="Inteligência" detail={secondSelectedHero?.powerstats?.intelligence} />
                                        <Powerstats label="Força" detail={secondSelectedHero?.powerstats?.strength} />
                                        <Powerstats label="Velocidade" detail={secondSelectedHero?.powerstats?.speed} />
                                        <Powerstats label="Durabilidade" detail={secondSelectedHero?.powerstats?.durability} />
                                        <Powerstats label="Poder" detail={secondSelectedHero?.powerstats?.power} />
                                        <Powerstats label="Combate" detail={secondSelectedHero?.powerstats?.combat} />
                                    </Box>
                                    <Box sx={{
                                        ...bgS,
                                        ...bR2,
                                        ...borderBox2
                                    }}
                                        component="img"
                                        src={secondSelectedHero?.images?.lg}
                                        alt={secondSelectedHero?.name}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                </Box>
            </Modal>
        </div>
    );
};
export default ModalHero;
