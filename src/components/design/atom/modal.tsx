import React, { useState } from 'react';
import { SuperHeroInterface } from '../../../interface/superhero-interface';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
type ModalProps = {
    selectedItem: SuperHeroInterface | null;
    secondSelectedItem: SuperHeroInterface | null;
    closeModal: () => void;
};

const ModalHero: React.FC<ModalProps> = ({ selectedItem, secondSelectedItem, closeModal }) => {

    const [open, setOpen] = useState(true);

    const style = {
        position: 'absolute',
        maxWidth: '40%',
        bgcolor: 'transparent',
        color: 'white',
        border: '1px solid #ffffff3b',
        top: '30%',
        left: '30%',
        margin: '-25px 0 0 -25px',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
    };

    const areItemsDuplicated = selectedItem?.id === secondSelectedItem?.id;

    return (
        <div>

            <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {areItemsDuplicated &&
                        <div>Duplicado
                            <div>Item selecionado: {selectedItem?.name}</div>
                            <div>Segundo item selecionado: {secondSelectedItem?.name}</div>
                        </div>
                    }
                    {!areItemsDuplicated &&
                        <div>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                <div>Item selecionado: {selectedItem?.name}</div>
                                <div>Segundo item selecionado: {secondSelectedItem?.name}</div>


                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </div>
                    }
                       
                </Box>
            </Modal>

        </div>
    );
};

export default ModalHero;
