import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Typography,
    Button,
    IconButton,
    Grid,
    TextareaAutosize,
    Avatar,
    Link
} from '@mui/material'
import { CardImg } from 'reactstrap';
import HeaderPrincipal from '../components/Header';
import '../../css/style.min.css'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Comentario from '../components/Comentario';
import ReportModal from '../components/Reporte'
import CompraObra from '../components/ComprarObra'
import CompartilhamentoModal from '../components/Compartilhamento'
import { ArtworkRoutes } from '../../services/routes/artworkRoutes';
import { ArtworkInterface } from '../../interfaces/ArtworkInterface';
import { UserRoutes } from '../../services/routes/userRoutes';
import { LikeRoutes } from '../../services/routes/likeRoutes';
import { ArtworkTagEsteticaEnum } from '../../enum/ArtworkTagEnum';
import { FaCoins } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { CommentRoutes } from '../../services/routes/commentRoutes';
import { LibraryRoutes } from '../../services/routes/libraryRoutes';
import SaveIcon from '@mui/icons-material/Save';
import { ArtworkCategoryTypeEnum } from '../../enum/ArtworkCategoryTypeEnum';
import { ReportReferenceTypeEnum } from '../../enum/ReportReferenceTypeEnum';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

export default function DetalhesObra() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [artwork, setArtwork] = useState({} as ArtworkInterface);
    const [user, setUser] = useState({} as any);
    const [isLike, setIsLike] = useState(false);
    const [openModalReport, setOpenModalReport] = useState(false);

    const sendComment = async () => {
        await CommentRoutes.create({ message: comment, artworkId: artwork._id });
    }

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
        if (response.status !== 200) {
            return navigate(`/login?artworkType=${ArtworkCategoryTypeEnum.AESTHETIC}&artworkId=${id}&`);
        }
        setUser(response.data);
    }

    async function getByArtworkId() {
        if (!id) return navigate('/');

        const response: any = await ArtworkRoutes.getById(id);
        if (response.status !== 200) return navigate('/');
        setArtwork(response.data);
    }

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

    const [comment, setComment] = useState('')

    const onSaveLibrary = async () => {
        const response = await LibraryRoutes.save({ artworkId: artwork._id });

        if (response.status !== 200) {
            alert('Erro ao salvar na biblioteca!');
        } else {
            alert('Você salvou essa obra na biblioteca!');
        }
    }

    return (
        <>

            <HeaderPrincipal />

            <Box sx={{ marginTop: '5%', textAlign: 'center' }}>

                <Grid className='jobContents' position='absolute' textAlign='center' container spacing={0} width='25%' marginLeft='73%'>
                    <Typography variant='h6' textAlign='center'> Mais de {artwork.artist && artwork.artist.name}</Typography>

                    <Grid sx={{ border: 'none', marginTop: '5%', width: '100%', alignItems: 'center' }}>
                        <Button className='buttonSuggestion'>
                            <CardImg className='artworkSuggestion' src='https://picsum.photos/500/650' />
                        </Button>
                        <Button className='buttonSuggestion'>
                            <CardImg className='artworkSuggestion' src='https://picsum.photos/500/650' />
                        </Button>
                        <Button className='buttonSuggestion'>
                            <CardImg className='artworkSuggestion' src='https://picsum.photos/500/650' />
                        </Button>
                        <Button className='buttonSuggestion'>
                            <CardImg className='artworkSuggestion' src='https://picsum.photos/500/650' />
                        </Button>
                        <Button className='buttonSuggestion'>
                            <CardImg className='artworkSuggestion' src='https://picsum.photos/500/650' />
                        </Button>
                    </Grid>
                </Grid>
                <Grid className='jobContents' position='absolute' textAlign='center' container spacing={0} width='25%' marginLeft='73%' marginTop='15%'>
                    <Typography variant='h6' textAlign='center'> Mais de {ArtworkTagEsteticaEnum[3]}</Typography>


                    <Grid sx={{ border: 'none', marginTop: '5%', width: '100%', alignItems: 'center' }}>
                        <Button className='buttonSuggestion'>
                            <CardImg className='artworkSuggestion' src='https://picsum.photos/500/650' />
                        </Button>
                        <Button className='buttonSuggestion'>
                            <CardImg className='artworkSuggestion' src='https://picsum.photos/500/650' />
                        </Button>
                        <Button className='buttonSuggestion'>
                            <CardImg className='artworkSuggestion' src='https://picsum.photos/500/650' />
                        </Button>
                        <Button className='buttonSuggestion'>
                            <CardImg className='artworkSuggestion' src='https://picsum.photos/500/650' />
                        </Button>
                        <Button className='buttonSuggestion'>
                            <CardImg className='artworkSuggestion' src='https://picsum.photos/500/650' />
                        </Button>
                    </Grid>
                </Grid>


            </Box>
            <Box className='jobContents' sx={{ flexGrow: 1 }}>
                <Grid className='jobContents' container spacing={0} width='26%' margin='auto' marginTop='1%'>

                    <img src={artwork.contentUrl} width='100%' />
                </Grid>

                <Grid margin='auto' width='25%' marginTop='2%' textAlign='left'>
                    <IconButton>
                        <Avatar
                            alt='Autor'
                            src='https://i.imgur.com/JP2AdTJ.png'
                            sx={{ width: 50, height: 50 }}
                        />

                    </IconButton>
                    <Link href={`/perfil/${artwork.artist?.id}`} variant='h6' underline='hover' id='author' marginLeft='0.5%' color='inherit'>
                        {artwork.artist && artwork.artist.name}
                    </Link>
                    <Typography id='ArtDetails' marginTop='2%' textAlign='center'>DETALHES DA ARTE</Typography>
                    <Typography className='ArtDetailsContents' marginTop='2%'>Título: {artwork.title}</Typography>
                    <Typography className='ArtDetailsContents' marginTop='2%'>Tamanho da imagem: {artwork.contentUrl}</Typography>
                    <Typography className='ArtDetailsContents' marginTop='2%'>Categoria: {ArtworkTagEsteticaEnum[3]}</Typography>
                    <Typography className='ArtDetailsContents' marginTop='2%'>Data: {artwork.updatedAt}</Typography>
                    {artwork.isSale && (
                        <Typography className='ArtDetailsContents' marginTop='2%'>Preço: <FaCoins /> {artwork.price}</Typography>
                    )}
                </Grid>
            </Box>
            <Grid width='30%' textAlign='center' margin='auto' marginTop='2%'>
                <Button sx={{ marginRight: '2%' }} className='btnCadastrar' onClick={LikeDislike}>
                    {isLike ? <EmojiEmotionsIcon /> : <SentimentDissatisfiedIcon />}
                    {isLike ? 'Desapreciar' : 'Apreciar'}
                </Button>
                <Button sx={{ marginRight: '2%' }}>
                    <CompartilhamentoModal />
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
                {!user.library?.includes(artwork._id) && (
                    <Button className='btnCadastrar' onClick={onSaveLibrary} sx={{ marginRight: '2%' }} endIcon={<SaveIcon />}>
                        Salvar
                    </Button>
                )}
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