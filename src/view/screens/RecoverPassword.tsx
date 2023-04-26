import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import '../../css/style.min.css'
import '../../css/cssCadastroELogin.css'
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
export default function NewPassword() {

  const navigate = useNavigate();
  const [newPassword , setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
}, []);

async function getUser() {
    const response: any = await UserRoutes.getMe();

    if (response.status !== 200) return alert(response.data.message);
    
    setNewPassword(response.data.password);
}

async function updatePassword() {
    const response: any = await UserRoutes.updateById({ newPassword, confirmNewPassword });

    if (response.status !== 200) return alert(response.data.message);

    alert('Senha alterada com sucesso!');
    window.location.reload();
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
              <LockIcon />
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
                id='newPassword'
                label='Nova senha'
                type='password'
                name='newPassword'
                autoFocus
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <TextField
                margin='normal'
                className='textLogin'
                required
                fullWidth
                name='confirmNewPassword'
                label='Confirmar nova senha'
                type='password'
                id='confirmNewPassword'
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <Button
                type='submit'
                fullWidth
                className='btnCadastrar'
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={updatePassword}
              >
                Confirmar redefinição de senha
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Box sx={{ marginTop: '331px' }}>
        {/* <FooterMenu /> */}
      </Box>
    </>
  );
}
