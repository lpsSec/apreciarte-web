import { useEffect, useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem,
    Fade,
    IconButton,
    Grid,
    Divider,
    Paper,
    TextareaAutosize,
    Avatar,
    Link
} from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HeaderPrincipal from '../components/Header';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import '../../css/style.min.css'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Comentario from '../components/Comentario';
import ReportModal from '../components/Reporte'
import CompraObra from '../components/ComprarObra';
import CompartilhamentoModal from '../components/Compartilhamento'
import { ArtworkRoutes } from '../../services/routes/artworkRoutes';
import { ArtworkInterface } from '../../interfaces/ArtworkInterface';
import { UserRoutes } from '../../services/routes/userRoutes';
import { LikeRoutes } from '../../services/routes/likeRoutes';
import { CommentRoutes } from '../../services/routes/commentRoutes';
import { useParams } from 'react-router-dom';
import { ReportReferenceTypeEnum } from '../../enum/ReportReferenceTypeEnum';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

function PerfilMenu() {
    const [artwork, setArtwork] = useState({} as ArtworkInterface);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton sx={{ width: '40%', borderRight: 'solid', borderLeft: 'solid', borderRadius: '1%' }}
                className='profileMenu'
                id='fade-button'
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                
            >
              {artwork.contentUrl ? <img src={artwork.contentUrl} alt='User' width='15%'/> : <img src='https://picsum.photos/500/650' alt='User' width='15%' />}
                <Typography margin='auto' fontWeight='bold' >'Título do Livro'</Typography>
                <ArrowDownwardIcon />
            </IconButton>

            <Menu sx={{ width: '92%' }}
                id='fade-menu'
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >

                <MenuItem onClick={handleClose}>capítulo 1</MenuItem>
                <MenuItem onClick={handleClose}>capítulo 2</MenuItem>
                <MenuItem onClick={handleClose}>capítulo 3</MenuItem>
                <MenuItem onClick={handleClose}>capítulo 4</MenuItem>
            </Menu>
        </div>
    );
}

export default function DetalhesObra() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [artwork, setArtwork] = useState({} as ArtworkInterface);
    const [user, setUser] = useState({} as any);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(artwork.comments);
    const [openModalReport, setOpenModalReport] = useState(false);

    useEffect(() => {
        getMe();
        getByArtworkId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        haveLike();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [artwork])

    async function getMe() {
        const response: any = await UserRoutes.getMe();
        if (response.status !== 200) return navigate('/');
        setUser(response.data);
    }
    
    async function getByArtworkId () {
        if (!id) return navigate('/');

        const response: any = await ArtworkRoutes.getById(id);
        if (response.status !== 200) return navigate('/');
        setArtwork(response.data);
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [isFilledFavorite, setIsFilledFavorite] = useState(false);
    const toggleFilledIconFavorite = () => setIsFilledFavorite(!isFilledFavorite)
    const [isLike, setIsLike] = useState(false);

    function haveLike() {
        if (artwork.likes) {
            const isLiked = artwork.likes.some((like: any) => like === user._id);
            setIsLike(isLiked); 
        }
    }

    async function LikeDislike() {
        let response: any = null;
        
        if (isLike) {
            response = await LikeRoutes.remove(artwork._id);
        } else {
            response = await LikeRoutes.add({ artworkId: artwork._id });
        }
        
        if (response.status === 200) {
            getByArtworkId();
        }
    }

    async function sendComment() {
      
    await CommentRoutes.create({ message: comment, artworkId: artwork._id });
     
    }

    useEffect(() => {
        getByArtworkId()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comments]);

    return (
        <>
            <HeaderPrincipal />
            <Box sx={{ flexGrow: 1, }}>
                <AppBar position='static' >
                    <Toolbar>
                        <Box sx={{ display: { md: 'flex' } }}>
                            <PerfilMenu />
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton onClick={toggleFilledIconFavorite}>
                                {isFilledFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box >
            <Box sx={{ marginTop: '5%', textAlign: 'center' }}>
                <IconButton>
                    <Avatar
                        alt='Autor'
                        src='https://i.imgur.com/JP2AdTJ.png'
                        sx={{ width: 70, height: 70 }}
                    />

                </IconButton>
                <Link href='#' variant='h6' underline='hover' id='author' marginLeft='0.5%' color='inherit'>
                    {artwork.artist && artwork.artist.name}
                </Link>
                <Typography variant='h3' textAlign='center' marginTop='2%'>{artwork.title}</Typography>
            </Box>
            {/* <Divider sx={{ color: '#E5A264' }}></Divider> */}
            <Box className='jobContents' sx={{ flexGrow: 1 }}>
                <Divider sx={{ color: 'black', width: '30%', margin: 'auto', marginTop: '1%' }}></Divider>
                <Grid className='jobContents' container spacing={0} width='30%' margin='auto' marginTop='1%'>
                    <Grid color='black' item xs={12} md={12}>
                        <Item>{artwork.description}</Item>
                    </Grid>
                    <Button
                        className='btnCadastrar'
                        sx={{ marginTop: '5%' }}
                        fullWidth
                        endIcon={<ArrowForwardIosIcon />}
                        variant='contained'
                        onClick={() => navigate(`/capitulo?artworkId=${artwork._id}`)}
                    >Ler</Button>
                </Grid>

            </Box>
            <Grid width='40%' textAlign='center' margin='auto' marginTop='2%'>
                <Button sx={{ marginRight: '2%' }} className='btnCadastrar' onClick={LikeDislike}>
                    {isLike ? <EmojiEmotionsIcon /> : <SentimentDissatisfiedIcon />}
                    {isLike ? 'Desapreciar' : 'Apreciar'}
                </Button>

                <Button sx={{ marginRight: '2%' }}>
                <CompartilhamentoModal/>
                </Button>
                <Button className='btnCadastrar' sx={{ marginRight: '2%' }} endIcon={<VolunteerActivismIcon />}>
                    Contribuir
                </Button>
                <Button>
                    <Button className='btnCadastrar' onClick={() => setOpenModalReport(true)} endIcon={<ReportGmailerrorredIcon />}> Reportar </Button>
                    {openModalReport && (
                        <ReportModal postId={artwork._id} referenceType={ReportReferenceTypeEnum.ARTWORK} />
                    )}
               </Button> 
               {artwork.isSale && artwork.artist.id !== user.id && (
                    <Button>
                        <CompraObra artwork={artwork} />
                    </Button>
                )}
            </Grid>
            <Box component='form' noValidate autoComplete='off' border='none' margin='auto' width='30%' marginTop='3%' position='static'>

                <TextareaAutosize
                    onChange={(e) => setComment(e.target.value)}
                    aria-label='minimum height'
                    minRows={2}
                    placeholder='Deixe aqui seu comentário'
                    style={{ width: '100%' }}
                />
                <Button onClick={sendComment} className='btnCadastrar' sx={{ marginBottom: '15px' }} fullWidth variant='contained'>Comentar</Button>
                <Comentario comments={artwork.comments} />
            </Box>
        </>

    );

}
