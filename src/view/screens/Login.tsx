import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link as MUILink,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Modal
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import '../../css/style.min.css'
import '../../css/cssCadastroELogin.css'
import { AuthRoutes } from '../../services/routes/authRoutes';
import { UserRoutes } from '../../services/routes/userRoutes';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const theme = createTheme();
export default function Login() {

  const navigate = useNavigate();

  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  const [openRecoverPasswordModal, setOpenRecoverPasswordModal] = useState(false);
  const [recoverEmail, setRecoverEmail] = useState('');
  const [recoverPasswordResponse, setRecoverPasswordResponse] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (user && token) {
      navigate('/preference', { 
        state: { user }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function handleOpenRecoverPasswordModal() {
    setOpenRecoverPasswordModal(true);
  }

  function handleCloseRecoverPasswordModal() {
    setOpenRecoverPasswordModal(false);
  }

  const sendLogin = async (e: any) => {
    e.preventDefault();
    const response: any = await AuthRoutes.login({ email, password });
    try {
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        getMe();
      } else {
        alert(response)
      }
    } catch (err) {
      alert('erro para logar');
      
    }
  }

  async function getMe() {
    const response: any = await UserRoutes.getMe();
    if (response.status !== 200) return navigate('/');
    setUser(response.data);
  }

  return (
    <>
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
              <LoginIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
            </Typography>
            <Box
              component='form'
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                className='textLogin'
                required
                fullWidth
                id='email'
                label='E-mail'
                name='email'
                autoComplete='email'
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin='normal'
                className='textLogin'
                required
                fullWidth
                name='password'
                label='Senha'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type='submit'
                fullWidth
                className='btnCadastrar'
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                disabled={disableSubmitButton}
                onClick={e => sendLogin(e)}
              >
                Fazer login
              </Button>
              <Grid container>
                <Grid item xs>
                  <MUILink href='#' variant='body2' className='nav-link' onClick={handleOpenRecoverPasswordModal}>
                    Esqueceu sua senha?
                  </MUILink>
                </Grid>
                <Grid item>
                  <MUILink
                    className='nav-link'
                    href='#'
                    variant='body2'
                    onClick={() => navigate('/register')}
                  >
                    Cadastre-se aqui
                  </MUILink>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* modal de recuperar a senha */}
          <Modal
            open={openRecoverPasswordModal}
            onClose={handleCloseRecoverPasswordModal}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={modalStyle} className='boxTermo'>
              <Typography id='modal-modal-title' variant='h4' component='h2'>
                Buscar sua conta
              </Typography>
              <Typography id='modal-modal-title' variant='h6' component='h6'>
                Insira seu email
              </Typography>
              <Typography id='modal-modal-description' component={'span'} sx={{ mt: 2 }}>
                <Box
                  component='form'
                  //onSubmit={handleRecoverUserPassword}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='recoverEmail'
                    label='E-mail'
                    type='email'
                    id='recoverEmail'
                    autoComplete='recoverEmail'
                    //value={recoverEmail}
                  />

                  {recoverPasswordResponse ?
                    <Typography id='modal-modal-title' component='h2'>
                      Recuperar senha 
                    </Typography> : <></>
                  }

                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                    className='btnCadastrar'
                    onClick={() => navigate('/recover-password')}
                  >Confirmar email e buscar</Button>
                </Box>
              </Typography>
            </Box>
          </Modal>
        </Container>
      </ThemeProvider>
      <Box sx={{ marginTop: '331px' }}>
        {/* <FooterMenu /> */}
      </Box>
    </>
  );
}
