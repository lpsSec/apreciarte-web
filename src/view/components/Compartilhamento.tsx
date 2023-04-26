import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import copy from 'copy-to-clipboard';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CompartilhamentoModal() {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const copyLink = (url: string) => copy(url);

    return (
        <div>
            <Button className='btnCadastrar' onClick={handleOpen} endIcon={<ShareIcon />}> Compartilhar </Button>

            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby='keep-mounted-modal-title'
                aria-describedby='keep-mounted-modal-description'
            >
                <Box sx={style}>
                    <Typography id='keep-mounted-modal-title' variant='h6' component='h2' textAlign='center' borderColor='black' borderBottom='solid'>
                        Compartilhar
                    </Typography>
                    <Typography sx={{ mt: 2, marginTop: '5%', fontWeight: 'bold' }}>
                        Copie o link da obra e compartilhe com seus amigos!
                    </Typography>
                    <Box sx={{ marginTop: '5%' }}>
                        <Button className='btnCancelar' onClick={handleClose} sx={{ float: 'right' }}>Cancelar</Button>
                        <Button className='btnCadastrar' onClick={() => copyLink(window.location.href)} sx={{ float: 'left' }}>Copiar Link</Button>
                    </Box>
                </Box>

            </Modal>
        </div>
    );
}