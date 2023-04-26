import { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Divider,
} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  CardGroup,
  Card,
  CardImg,
  Badge,
  CardFooter,
  Button,
} from 'reactstrap';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../../js/function'

import { SimpleBottomNavigation } from '../../js/function';
import { ArtworkRoutes } from '../../services/routes/artworkRoutes';
import { useNavigate } from 'react-router-dom';
import { UserRoutes } from '../../services/routes/userRoutes';
import { UserInterface } from '../../interfaces/UserInterface';
import { ArtworkInterface } from '../../interfaces/ArtworkInterface';
import { returnArtworkTagLiterariaName } from '../../enum/ArtworkTagEnum';
import { ArtworkCategoryTypeEnum } from '../../enum/ArtworkCategoryTypeEnum';


function MyFavorite() {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserInterface>();
  const [artworks, setArtworks] = useState<Array<ArtworkInterface>>([]);

  useEffect(() => {
    getMe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user?.library) {
      getLibrary(user?.library);
    }
  }, [user]);

  async function getMe() {
    const response: any = await UserRoutes.getMe();
    if (response.status !== 200) return navigate('/login');
    setUser(response.data);
  }

  async function getLibrary(library: Array<string>) {
    const artworksLibrary: Array<ArtworkInterface> = await Promise.all(
      library.map(async (artworkId) => {
        const response = await ArtworkRoutes.getById(artworkId);
        if (response.status === 200) return response.data;
      })
    );
    setArtworks(artworksLibrary);
  }

  const [tabActive, setTabActive] = useState(ArtworkCategoryTypeEnum.LITERARY);
  
  function artworkDetails(id: any) {
    if (tabActive === ArtworkCategoryTypeEnum.LITERARY) {
      navigate(`/artworkLiteraryDetails/${id}`);
    } else if (tabActive === ArtworkCategoryTypeEnum.AESTHETIC) {
      navigate(`/artworkAestheticDetails/${id}`);
    }
  }

  return (
    <>
      <Header />
      <Grid sx={{ paddingTop: '50px' }}>
      <SimpleBottomNavigation />
      <Typography variant='h4' sx={{ color: '#E5A264', textAlign: 'center', marginTop: '5%' }}>MEUS FAVORITOS</Typography>
        <div id='eventos-carousel' className='carousel slide pointer-event' data-bs-ride="carousel">
     
          {artworks.map((item: any) => (
            <Button onClick={() => artworkDetails(item._id)}>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='container'>
                  <div className='row'>
                    <div className='col-sm  col-custom-event'>
                  {item.contentUrl ? <img src={item.contentUrl} className='custom-event' height='350px' width="100%"></img> : <img src='https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' className='custom-event'  height='350px'></img>
              }
                      <div className='titleArtworkFavorite'>
                        <p>{item.title}</p>
                      </div>
                <div className='custom-event-date'>
                  {item.tagList.map((tag: number, index: number) => (
                    <>
                      {index < 2 && (
                        <Badge color='my-text' className='category'>
                          {returnArtworkTagLiterariaName(tag)}
                        </Badge>
                      )}
                    </>
                  ))}
                </div>
                </div>
                </div>
                </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </Grid>
      <Footer />
    </>
  );
}

export default MyFavorite;