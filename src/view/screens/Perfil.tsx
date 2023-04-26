import Header from '../components/Header';
import { Grid, IconButton, Avatar, Link, Typography, Container, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { UserRoutes } from '../../services/routes/userRoutes';
import { useNavigate } from 'react-router';
import { UserInterface } from '../../interfaces/UserInterface';
import { useParams } from 'react-router';
import { FollowRoutes } from '../../services/routes/followRoutes';

export default function Perfil() {
  const [user, setUser] = useState<UserInterface>();
  const [userMe, setUserMe] = useState<UserInterface>();

  const navigate = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    getMe();
    getById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getMe() {
    const response: any = await UserRoutes.getMe();
    if (response.status !== 200) return navigate('/');
    setUserMe(response.data);
  }

  async function getById() {
    if (!id) return navigate('/');
    const response: any = await UserRoutes.getById(id);
    if (response.status !== 200) return navigate('/');
    setUser(response.data);
  }

  async function follow() {
    const response: any = await FollowRoutes.add({ artistId: id });
    if (response.status !== 200) return alert('Erro ao seguir artista');
    alert('Você passou a seguir esse artista!');
    window.location.reload();
  }

  async function unfollow() {
    const response: any = await FollowRoutes.remove({ artistId: id });
    if (response.status !== 200) return alert('Erro ao deixar de artista');
    alert('Você deixou de seguir esse artista!');
    window.location.reload();
  }

  return (
    <>
      <Header />
      <Grid margin='auto' width='25%' marginTop='2%' textAlign='center'>
        <Container style={{ textAlign: 'center' }}>
          <IconButton>
            <Avatar
              alt='Autor'
              src='https://i.imgur.com/JP2AdTJ.png'
              sx={{ width: 50, height: 50 }}
            />
          </IconButton>
          <Link href='#' variant='h6' underline='hover' id='author' marginLeft='0.5%' color='inherit'>
            {user?.name}
          </Link>
        </Container>
        <Container style={{ marginTop: 20, marginBottom: 50 }}>
          <Typography id='ArtDetails' marginTop='2%' textAlign='center'>DETALHES DO USUÁRIO</Typography>
          <Container style={{ marginTop: 25, marginLeft: 120 }}>
            <Typography className='ArtDetailsContents' marginTop='2%' textAlign={'left'}>Nome: {user?.name}</Typography>
            <Typography className='ArtDetailsContents' marginTop='2%' textAlign={'left'}>Email: {user?.email}</Typography>
          </Container>
        </Container>
        <Container>
          <Grid width='50%' textAlign='center' margin='auto' marginTop='2%'>
            {!user?.followed?.includes(userMe?.id) ? (
              <Button className='btnCadastrar' sx={{ marginRight: '10%' }} onClick={follow}>
                Seguir Perfil
              </Button>
            ): (
              <Button className='btnCadastrar' sx={{ marginRight: '10%' }} onClick={unfollow}>
                Deixar de Seguir Perfil
              </Button>
            )}
          </Grid>
        </Container>
      </Grid>
    </>
  );
}