import { useState, useEffect, MouseEvent } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Badge,
    Link,
    Menu,
    MenuItem,
    Fade,
    Modal,
    Button,
    Tooltip
} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import HelpIcon from '@mui/icons-material/Help';
import { FaCoins } from 'react-icons/fa';
import { TransactionRoutes } from '../../../src/services/routes/transactionRoutes'; 
import { TransactionType } from '../../enum/TransactionTypeEnum';
import { TransactionInterface } from '../../interfaces/TransactionInterface';
import { UserRoutes } from '../../services/routes/userRoutes';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { NotificationRoutes } from '../../services/routes/notificationRoutes';
import { UserInterface } from '../../interfaces/UserInterface';
import PrimarySearchAppBar from '../components/Search';

function BottomAppBar(props: any) {
    const [notifications, setNotifications] = useState([]);
    const [user, setUser] = useState<UserInterface>(props.user);

    useEffect(() => {
        getNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getNotifications = async() => {
        const response = await NotificationRoutes.getByUserId(user?.id || '');
        if (response.status !== 200) {
            alert('Erro ao carregar notificações!');
        } else {
            setNotifications(response.data);
        }
    }

    return (
        <>
            <CssBaseline />
            <Paper square sx={{ pb: '1px' }}>
                <Typography variant='h5' gutterBottom component='div' sx={{ p: 2, pb: 0 }}>
                    Notificações
                </Typography>
                <List sx={{ mb: 2 }}>
                    {notifications.map((notification: any) => (
                        <>
                            <ListItem button>
                                <ListItemAvatar>
                                <Avatar alt='Profile Picture' src='https://i.imgur.com/JP2AdTJ.png' /> {/* <Avatar alt='Profile Picture' src={person} /> */}
                                </ListItemAvatar>
                                <ListItemText primary={notification.title} secondary={notification.description} />
                            </ListItem>
                        </>
                    ))}
                </List>
            </Paper>
        </>
    );
}

function notificationsLabel(count: number) {
    if (count === 0) {
        return 'no notifications';
    }
    if (count > 99) {
        return 'more than 99 notifications';
    }
    return `${count} notifications`;
}

function NotificationMenu({ user }: any) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div >
            <IconButton
                id='fade-button'
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <AddAlertIcon />
            </IconButton>
            <Menu
                id='fade-menu'
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <BottomAppBar user={user} />
            </Menu>
        </div>
    );
}

function PerfilMenu() {

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const deleteToken = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }

    return (
        <div>
            <IconButton
                className='profileMenu'
                id='fade-button'
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img src='https://i.imgur.com/JP2AdTJ.png' alt='User' width='70%' />
            </IconButton>
            <Menu
                id='fade-menu'
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => { navigate('/editar-perfil') }} >Perfil  </MenuItem>
                <MenuItem onClick={() => navigate('/meus-favoritos')}>Meus Favoritos</MenuItem>
                <MenuItem onClick={() => navigate('/minhas-compras')}>Minhas Compras</MenuItem>
                <MenuItem onClick={deleteToken}>Sair</MenuItem>
            </Menu>
        </div>
    );
}


const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function Header() {

    const ExplanationArtcoins = `
     Artcoins é uma moeda virtual, negociada de forma on-line que permite pagamentos através de transações sem intermediários,
     com um baixo custo e de forma segura. O valor atual de cada Artcoins está em R$ 1,00.
    `;

    const navigate = useNavigate();
    const [OpenChooseBuyOrSell, setOpenChooseBuyOrSell] = useState(false);
    const [OpenBuy, setOpenBuy] = useState(false);
    const [OpenSell, setOpenSell] = useState(false);
    const [BuyCoins, setBuyCoins] = useState(1);
    const [SellCoins, setSellCoins] = useState(1);
    const [user, setUser] = useState<UserInterface>({});
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        getUser();
        if (user) {
            getNotifications();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (user) {
            getNotifications();
        }
    }, [user]);

    const getUser = async() => {
        try {
            const response: any = await UserRoutes.getMe();
            if (response.status === 200) {
                setUser(response.data);
            }
        } catch (err) {
            navigate('/login');
        }
    }

    const getNotifications = async() => {
        const response = await NotificationRoutes.getByUserId(user?.id || '');
        if (response.status !== 200) {
            alert('Erro ao carregar notificações!');
        } else {
            setNotifications(response.data);
        }
    }

    function handleOpenChooseBuyOrSell() {
        setOpenChooseBuyOrSell(true);
    }

    function handleCloseOpenChooseBuyOrSell() {
        setOpenChooseBuyOrSell(false);
    }

    function handleOpenBuy() {
        setOpenBuy(true);
        setOpenChooseBuyOrSell(false);
    }

    function handleCloseOpenBuy() {
        setOpenBuy(false);
    }


    const sellArtcoins = async (art_coins : Number) => {

        const response : any = await TransactionRoutes.create({ artcoins: art_coins, transactionType: TransactionType.SELL} as TransactionInterface);

        if( response?.status === 200 )
        {
            // setShowFinishSell(false);

            wait(1800).then(() => {
                alert('Venda realizada com sucesso!\n\n* R$' + art_coins + ' debitados(s) da sua conta.');
                window.location.reload();
                // getUserArtcoins();
            } );
        }
        else
            alert('Erro: ' + response?.message);
    }

    const buyArtcoins = async(art_coins : any) => {
        // if( !showBuyConfirmation )
            // return;

        // setShowBuyConfirmation(false);

        const response : any = await TransactionRoutes.create({ artcoins: art_coins, transactionType: TransactionType.BUY} as TransactionInterface);

        if( response?.status === 200 )
        {
            // setShowFinishSell(false);
            wait(1800).then(() => {
                alert('Compra realizada com sucesso!\n\n*' + art_coins + ' artcoins adicionado(s) a sua conta.');
                window.location.reload();
                // getUserArtcoins();
                // setBuyCoinField(1);
            } );
        }
        else
            alert('Erro: ' + response?.message);
    }

    function handleOpenSell() {
        setOpenSell(true);
        setOpenChooseBuyOrSell(false);

    }

    function handleCloseOpenSell() {
        setOpenSell(false);
    }
    
    return (
        <Box sx={{ flexGrow: 1, }} className='menu'>
            <AppBar position='static'>
                <Toolbar>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link href='/' >
                            <img
                                src='https://i.imgur.com/JwO8YxY.png'
                                height='30%'
                                width='30%'
                            />
                        </Link>
                    </Typography>
                   <PrimarySearchAppBar/>
                    <Box sx={{ flexGrow: 1 }} />
        
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        <>
                            <Typography sx={{marginLeft:'10px'  }}component='p'>{user.artcoins}</Typography>
                            
                            <IconButton size='small' sx={{ width: '15%', height: '15%', marginLeft: 'auto' }} onClick={handleOpenChooseBuyOrSell}>
                                <Link>
                                    <Badge>
                                        <Link>
                                            <img src='https://i.imgur.com/oBh2fWy.png' alt='SwapCoin' width='55%' />
                                        </Link>
                                       
                                    </Badge>
                                </Link>
                            </IconButton>
                            
                            <IconButton size='small' sx={{ width: '15%', height: '15%', margin: 'auto' }} onClick={() => navigate('/loja')}>
                                <Link>
                                    <Badge>
                                        <Link>
                                            <img src='https://i.imgur.com/b01uTPI.png' alt='RewardStore' width='50%' />
                                        </Link>
                                    </Badge>
                                </Link>
                            </IconButton>

                            <IconButton size='small' sx={{ width: '15%', height: '15%', marginRight: 'auto' }} >
                                <PerfilMenu />
                            </IconButton>
                            <IconButton size='small' sx={{width: '15%', height: '15%', marginRight: 'auto' }} id='iconNotification' aria-label={notificationsLabel(5)}>
                                <Badge badgeContent={Notification.length} color='secondary'>
                                    <Link width='50%'>
                                        <NotificationMenu user={user}/>
                                    </Link>
                                </Badge>
                            </IconButton>

                        </>
                    </Box>
                </Toolbar>
            </AppBar>
            <Modal
                open={OpenChooseBuyOrSell}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box component='form'
                    noValidate
                    className='checkout'>
                    
                    <div className='checkout-header'>
                   
                        <h1 className='checkout-title'>
                            Transação de ArtCoins
                            <span className='checkout-exit' onClick={handleCloseOpenChooseBuyOrSell}>X</span></h1>
                    </div>
                    <Tooltip title={ExplanationArtcoins} >
                        <HelpIcon />
                    </Tooltip>
                    <Button

                        fullWidth
                        id='btnComprarArtecoins'
                        className='btnCadastrar'
                        onClick={handleOpenBuy}
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Efetuar compra
                    </Button>
                    <Button

                        fullWidth
                        onClick={handleOpenSell}
                        id='btnVenderArtecoins'
                        className='btnCadastrar'
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Efetuar venda
                    </Button>
                </Box>
            </Modal>
            <Modal
                open={OpenBuy}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box component='form'
                    noValidate
                    className='checkout'>
                    <div className='checkout-header'>
                        <h1 className='checkout-title'>
                            Efetuar compra
                            <span className='checkout-exit' onClick={handleCloseOpenBuy}>X</span></h1>
                    </div>
                    <p>
                        <input type='text' className='checkout-input checkout-name' placeholder='Seu nome no cartão' />
                       
                    </p>
                    <p>
                        <input type='text' className='checkout-input checkout-exp' placeholder='MM' />
                        <input type='text' className='checkout-input checkout-exp' placeholder='YY' />
                    </p>
                    <p>
                        <input type='text' className='checkout-input checkout-card' placeholder='Número do cartão' />
                        <input type='text' className='checkout-input checkout-cvc' placeholder='CVV' />
                    </p>
                    <p>
                        <input type='text' className='checkout-input checkout-cpf' placeholder='CPF' />
                    </p>
                    <p>
                        <input type='number' min='1' className='checkout-input checkout-coins' placeholder='Qtd Artecoins' value={BuyCoins} onChange={e => setBuyCoins(parseInt(e.target.value))} />
                        <p>Artcoins</p>
                    </p>
                    <p>
                        <p>Total a pagar: R${BuyCoins}</p>
                        <Button
                            // type='submit'
                            fullWidth
                            className='btnCadastrar'
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                            onClick={ () => { buyArtcoins(BuyCoins); }}
                        >
                            Efetuar compra
                        </Button>
                    </p>

                </Box>
            </Modal>
            <Modal
                open={OpenSell}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box component='form'
                    noValidate
                    className='checkout'>
                    <div className='checkout-header'>
                        <h1 className='checkout-title'>
                            Efetuar venda
                            <span className='checkout-exit' onClick={handleCloseOpenSell}>X</span></h1>
                    </div>
                    <p>
                        <input type='text' className='checkout-input checkout-name' placeholder='Informe seu PIX' />
                    </p>

                    <p>
                        <input type='number' min='1' className='checkout-input checkout-coins' placeholder='Qtd Artecoins' value={SellCoins} onChange={e => setSellCoins(parseInt(e.target.value))} />
                        <p>Artcoins</p>
                       
                    </p>
                    <p>Total a receber: R${SellCoins},00</p>
                    
                    <p>
                        <Button
                            // type='submit'
                            onClick={ () =>{ sellArtcoins(SellCoins) } }
                            fullWidth
                            className='btnCadastrar'
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Efetuar venda
                        </Button>
                    </p>
                    <div id='totalCoinsModal'>
                  <FaCoins/>
                   <p>Você possui {user.artcoins} Artcoins</p>
                    </div>

                </Box>
            </Modal>
        </Box>
    );
}

