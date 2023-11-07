import React, { useCallback, useEffect, useState } from 'react';
import { SuperHeroInterface } from '../../../interface/superhero-interface';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { box, modals, vs, infoHero, bgS, borderBox2, borderBox1, bR1, bR2, Bebas } from '../../styles/navbar';
import { ThemeProvider } from '@mui/material';
type ModalProps = {
    selectedItem: SuperHeroInterface | null;
    secondSelectedItem: SuperHeroInterface | null;
    closeModal: () => void;
};

type PowerstatsProps = {
    label: string;
    detail: number | undefined;
};
const ModalHero: React.FC<ModalProps> = ({ selectedItem, secondSelectedItem, closeModal }) => {

    const [open, setOpen] = useState(true);
    let resultHero = '';
    if (selectedItem && secondSelectedItem) {
        const selectedStats = Object.values(selectedItem.powerstats);
        const secondSelectedStats = Object.values(secondSelectedItem.powerstats);
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
           resultHero = `QUEM <span class="text-warning">GANHA</span> É <span class="text-warning"> <br/>${selectedItem.name}</span>`;
        } else if (scoreSelected < scoreSecondSelected) {
            resultHero = `QUEM <span class="text-warning">GANHA</span> É <span class="text-warning"> <br/>${secondSelectedItem.name}</span>`;
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

    const areItemsDuplicated = selectedItem?.id === secondSelectedItem?.id;
    return (
        <div className="w-100 h-100 position-relative">

            <Modal sx={modals}
                open={open}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="overflow-y-auto"
            >
                <Box sx={box} className="overflow-x-hidden">
                    {areItemsDuplicated &&
                        <div>Duplicado
                            <div>Item selecionado: {selectedItem?.name}</div>
                            <div>Segundo item selecionado: {secondSelectedItem?.name}</div>
                        </div>
                    }
                    {!areItemsDuplicated &&
                        <div className="row">
                            <div className="col-12">
                                <Typography variant="h5" className="text-center" id="modal-modal-description" sx={Bebas}>
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
                                        src={selectedItem?.images?.lg}
                                        alt={selectedItem?.name}
                                    />
                                    <Box sx={{
                                        ...infoHero,
                                        ...borderBox2,
                                        ...bR2

                                    }}>
                                        <Powerstats label="Inteligência" detail={selectedItem?.powerstats?.intelligence} />
                                        <Powerstats label="Força" detail={selectedItem?.powerstats?.strength} />
                                        <Powerstats label="Velocidade" detail={selectedItem?.powerstats?.speed} />
                                        <Powerstats label="Durabilidade" detail={selectedItem?.powerstats?.durability} />
                                        <Powerstats label="Poder" detail={selectedItem?.powerstats?.power} />
                                        <Powerstats label="Combate" detail={selectedItem?.powerstats?.combat} />
                                    </Box>
                                    <Typography sx={Bebas} variant="h2" className="text-center" component="h2">
                                        {selectedItem?.name}
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
                                    <Typography sx={Bebas} variant="h2" className="text-center" component="h2">
                                        {secondSelectedItem?.name}
                                    </Typography>
                                    <Box sx={{
                                        ...infoHero,
                                        ...bR1,
                                        ...borderBox1
                                    }}>
                                        <Powerstats label="Inteligência" detail={secondSelectedItem?.powerstats?.intelligence} />
                                        <Powerstats label="Força" detail={secondSelectedItem?.powerstats?.strength} />
                                        <Powerstats label="Velocidade" detail={secondSelectedItem?.powerstats?.speed} />
                                        <Powerstats label="Durabilidade" detail={secondSelectedItem?.powerstats?.durability} />
                                        <Powerstats label="Poder" detail={secondSelectedItem?.powerstats?.power} />
                                        <Powerstats label="Combate" detail={secondSelectedItem?.powerstats?.combat} />
                                    </Box>
                                    <Box sx={{
                                        ...bgS,
                                        ...bR2,
                                        ...borderBox2
                                    }}
                                        component="img"
                                        src={secondSelectedItem?.images?.lg}
                                        alt={secondSelectedItem?.name}
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
