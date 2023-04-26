import { useEffect, useState } from 'react';
import {
    Box,
    IconButton,
    TextField,
    Button
} from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.min.css';
import Header from '../components/Header'
import { UserRoutes } from '../../services/routes/userRoutes';
import {PreviewImage} from '../../js/function';

function EditarPerfil() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    
    useEffect(() => {
        getUser();
    }, []);

    async function getUser() {
        const response: any = await UserRoutes.getMe();

        if (response.status !== 200) return alert(response.data.message);

        setEmail(response.data.email);
        setName(response.data.name);
    }

    async function updateUser() {
        const response: any = await UserRoutes.updateById({ email, name });

        if (response.status !== 200) return alert(response.data.message);

        alert('Dados alterados com sucesso!');
        window.location.reload();
    }

    function changeEmail(email: string) {
        setEmail(email);
    }

    function changeName(name: string) {
        setName(name);
    }

    return (
        <>

            <Header />
            <Box sx={{ marginTop: '5%', textAlign: 'center' }}>
                <IconButton color='primary' aria-label='upload picture' component='label' >
                
                    <div className='image-upload'>
                        <label htmlFor='uploadImage'>
                            <img src='https://i.imgur.com/JP2AdTJ.png' id='uploadPreview' width='110px' alt='' height='110px'></img>
                        </label>
                        <input id='uploadImage' type='file' name='foto' onChange={PreviewImage}/>
                    </div>

                </IconButton>
            </Box>
            <TextField
                onChange={(e) => changeEmail(e.target.value)}
                value={email}
                margin='normal'
                fullWidth
                name='email'
                placeholder='E-mail'
            />
            <TextField
                onChange={(e) => changeName(e.target.value)}
                value={name}
                margin='normal'
                fullWidth
                name='name'
                placeholder='Nome'
            />
            <Button onClick={updateUser}>Alterar Dados</Button>
        </>
    );
}
export default EditarPerfil;