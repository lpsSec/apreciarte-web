import '../../css/style.min.css'
import '../../css/cssCadastroELogin.css'
import '../../js/function.js'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link as MUILink,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Modal,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { AuthRoutes } from '../../services/routes/authRoutes';
import moment from 'moment';



const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TermosDeServiço = [
  'Respeitar e convívio saudável com os outros usuários',
  'Seus dados e informações básicas serão coletadas para fins estatísticos e de pesquisa'
]

const theme = createTheme();

export default function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDatea, setBirthDate] = useState('');
  const [confPassword, setconfPassword] = useState('');
  const birthDate = moment(birthDatea).format('DD/MM/YYYY');

  const sendRegister = async (e: any) => {
    e.preventDefault();
    const response: any = await AuthRoutes.register({ name, email, password, birthDate });

    if (name === '' || email === '' || password === '' || birthDate === '')
      alert('Preencha todos os campos para continuar');

    else if (confPassword !== password) {
      alert('Senha e Confirmação de senha diferente');
    }
    else {
      try {
        if (response.status === 200) {
          navigate('/login');
        } else {
          alert('ERRO no cadastro, tente novamente!');
        }
      } catch (err) {

      }
    }
  }

  const navigate = useNavigate();
  const [openTOSModal, setOpenTOSModal] = useState(false);

  function handleOpenTOSModal() {
    setOpenTOSModal(true);
  }

  function handleCloseTOSModal() {
    setOpenTOSModal(false);
  }

  return (
    <>
      {/* <Alert severity='error'>
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert> */}
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', backgroundColor: '#E5A264' }}>
              <PersonAddIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Cadastro
            </Typography>
            <Box
              component='form'
              noValidate
              //onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete='given-name'
                    name='name'
                    required
                    fullWidth
                    id='name'
                    label='Nome Completo'
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='email'
                    label='E-mail'
                    name='email'
                    autoComplete='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name='password'
                    label='Senha'
                    type='password'
                    id='password'
                    autoComplete='new-password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='ConfirmPassword'
                    type='password'
                    label='Confirmar Senha'
                    name='ConfirmPassword'
                    autoComplete='confirmPassword'
                    onChange={(e) => setconfPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name='birth_date'
                    label='Data de nascimento'
                    type='date'
                    id='birth_date'
                    autoComplete='birth_date'
                    InputLabelProps={{ shrink: true }}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox disabled checked value='agreeTOS' color='primary' />}
                    label='Concordo com os Termos de Serviço.'
                  />
                  <Button
                    fullWidth
                    className='TermoService'
                    variant='outlined'
                    sx={{ mt: 1, mb: 2 }}
                    onClick={handleOpenTOSModal}
                  >
                    Mostrar Termos de Serviço
                  </Button>
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                className='btnCadastrar'
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={e => sendRegister(e)}
              >
                Cadastrar
              </Button>
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <MUILink
                    href='#'
                    variant='body2'
                    className='nav-link'
                  >
                  </MUILink>
                </Grid>
                <Grid item>
                  <MUILink
                    className='nav-link'
                    href='#'
                    variant='body2'
                    onClick={() => navigate('/login')}
                  >
                    Possui login? Logar-se
                  </MUILink>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <Modal
            open={openTOSModal}
            onClose={handleCloseTOSModal}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={modalStyle} className='boxTermo'>
              <Typography textAlign='center' id='modal-modal-title' variant='h6' fontWeight='bold' component='h2'>
                Termos de Serviço - 2022
              </Typography>
              <Typography id='modal-modal-description' component={'span'} sx={{ mt: 2 }}>
                Ao usar o sistema ApreciArte, você concorda com nossos Termos de Serviço:
                {TermosDeServiço.map((termo, i) => <li key={i}>{termo}</li>)}
              </Typography>

              <Button
                fullWidth
                className='btnCadastrar'
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={handleCloseTOSModal}
              >Fechar</Button>
            </Box>
          </Modal>
        </Container >
      </ThemeProvider >
    </>
  );
}
