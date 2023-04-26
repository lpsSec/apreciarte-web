import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import '../../css/style.min.css'
import { useNavigate } from 'react-router';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function CheckboxLabelsEstetica() {
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedJ: false,
    checkedK: false,
    checkedL: false,
    checkedM: false,
    checkedN: false,
    checkedO: false,
    checkedP: false,
    checkedQ: false,
    checkedR: false,
    checkedS: false,
    checkedT: false,
  });

  console.log(state)

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };
  return (
    <FormGroup sx={{ width: '120px', height: '220px' }}>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name='checkedA' />} label='3D' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedB} onChange={handleChange} name='checkedB' />} label='Animal' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedC} onChange={handleChange} name='checkedC' />} label='Científico' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedD} onChange={handleChange} name='checkedD' />} label='Cosplay' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedE} onChange={handleChange} name='checkedE' />} label='Customização' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedF} onChange={handleChange} name='checkedF' />} label='Digital' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedG} onChange={handleChange} name='checkedG' />} label='Emoji' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedH} onChange={handleChange} name='checkedH' />} label='Escultura' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedI} onChange={handleChange} name='checkedI' />} label='Excêntrico' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedJ} onChange={handleChange} name='checkedJ' />} label='Fantasia' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedK} onChange={handleChange} name='checkedK' />} label='Fotografia' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedL} onChange={handleChange} name='checkedL' />} label='Jogo' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedM} onChange={handleChange} name='checkedM' />} label='Nerd' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedN} onChange={handleChange} name='checkedN' />} label='Nude' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedO} onChange={handleChange} name='checkedO' />} label='Paisagem' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedP} onChange={handleChange} name='checkedP' />} label='Pixel' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedQ} onChange={handleChange} name='checkedQ' />} label='Quadro' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedR} onChange={handleChange} name='checkedR' />} label='Realismo' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedS} onChange={handleChange} name='checkedS' />} label='Tecnologia' />
      <FormControlLabel
        control={<Checkbox checked={state.checkedT} onChange={handleChange} name='checkedT' />} label='Wallpaper' />
    </FormGroup>
  );
}

export function CheckboxLabelsLiteraria() {
  const [state, setState] = useState({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
    checked9: false,
    checked10: false,
    checked11: false,
    checked12: false,
    checked13: false,
    checked14: false,
    checked15: false,
    checked16: false,
    checked17: false,
    checked18: false,
    checked19: false,
    checked20: false,
  });

  console.log(state)

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };
  return (
    <FormGroup sx={{ width: '120px', height: '220px' }}>
      <FormControlLabel
       control={<Checkbox checked={state.checked1} onChange={handleChange} name='checked1' />} label='Ação' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked2} onChange={handleChange} name='checked2' />} label='Adulto' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked3} onChange={handleChange} name='checked3' />} label='Aventura' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked4} onChange={handleChange} name='checked4' />} label='Comédia' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked5} onChange={handleChange} name='checked5' />} label='Ciência' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked6} onChange={handleChange} name='checked6' />} label='Conto' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked7} onChange={handleChange} name='checked7' />} label='Drama' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked8} onChange={handleChange} name='checked8' />} label='Espiritual' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked9} onChange={handleChange} name='checked9' />} label='Fanfic' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked10} onChange={handleChange} name='checked10' />} label='Fantasia' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked12} onChange={handleChange} name='checked12' />} label='Ficção' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked13} onChange={handleChange} name='checked13' />} label='HQ' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked14} onChange={handleChange} name='checked14' />} label='Infantil' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked15} onChange={handleChange} name='checked15' />} label='Mistério' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked16} onChange={handleChange} name='checked16' />} label='Poesia' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked17} onChange={handleChange} name='checked17' />} label='Programação' />
       <FormControlLabel 
      control={<Checkbox checked={state.checked11} onChange={handleChange} name='checked11' />} label='Real' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked18} onChange={handleChange} name='checked18' />} label='Romance' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked19} onChange={handleChange} name='checked19' />} label='Terror' />
      <FormControlLabel 
      control={<Checkbox checked={state.checked20} onChange={handleChange} name='checked20' />} label='Tutorial' />
    </FormGroup>
  );
}
export default function PreferenceModal() {  
  const [openEstetica, setOpenEstetica] = useState(true);
  const [openLiteraria, setOpenLiteraria] = useState(false);
  const handleOpenLiteraria = () => setOpenLiteraria(true);
  
  const navigate = useNavigate();

  return (
    <div>
      <Modal
        keepMounted
        open={openEstetica}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'
      >
        <Box className='BoxModalPreference' sx={style}>
          <Typography id='keep-mounted-modal-title' fontWeight='bold' variant='h6' component='h2'>
            Escolha as suas preferência de arte estética
          </Typography>
          <Typography id='keep-mounted-modal-description' sx={{ mt: 2 }}>
            <CheckboxLabelsEstetica />
          </Typography>
          <Button className='btn-h' sx={{ border: 'solid' }} onClick={handleOpenLiteraria}>Continuar</Button>
        </Box>
      </Modal>
      <Modal
        keepMounted
        open={openLiteraria}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'
      >
        <Box className='BoxModalPreference' sx={style}>
          <Typography id='keep-mounted-modal-title' fontWeight='bold' variant='h6' component='h2'>
            Escolha as suas preferência de arte literária
          </Typography>
          <Typography id='keep-mounted-modal-description' sx={{ mt: 2 }}>
            <CheckboxLabelsLiteraria />
          </Typography>
          <Button className='btn-h' sx={{ border: 'solid' }} onClick={(handleCloseLiteraria) => navigate('/')}>Continuar</Button>
        </Box>
      </Modal>
    </div>
  );
}
