import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { FaCoins } from 'react-icons/fa';
import { ArtworkRoutes } from '../../services/routes/artworkRoutes';

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

export default function CompraObraModal({artwork}: any) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function confirmBuy() {
        const response = await ArtworkRoutes.buy({ artworkId: artwork._id});
        if (response.status !== 200) {
            alert('erro ao comprar obra');
        }
        else{
            alert('Obra comprada com sucesso');
            window.location.reload();
        }
    }

    return (
        <div>
            <Button className='btnCadastrar' onClick={handleOpen} endIcon={<ShareIcon />}> Comprar </Button>

            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby='keep-mounted-modal-title'
                aria-describedby='keep-mounted-modal-description'
            >
                <Box sx={style}>
                    <Typography id='keep-mounted-modal-title' variant='h6' component='h2' textAlign='center' borderColor='black' borderBottom='solid'>
                        Comprar Obra
                    </Typography>
                    <Typography sx={{ mt: 2, marginTop: '5%', fontWeight: 'bold' }}>
                        Serão debitados <FaCoins /> {artwork.price} artcoins da sua conta
                    </Typography>
                    <Typography sx={{ mt: 2, marginTop: '5%' }}>
                        Deseja realmente efetuar a compra desta obra?
                    </Typography>
                    <Box sx={{ marginTop: '5%' }}>
                        <Button className='btnCancelar' onClick={handleClose} sx={{ float: 'left' }}>Cancelar</Button>
                        <Button className='btnCadastrar' sx={{ float: 'right' }} onClick={()=> confirmBuy()}>Confirmar</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}