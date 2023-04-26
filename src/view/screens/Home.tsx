import { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Divider,
} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.min.css';
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
import '../../js/function';

import {
  SimpleBottomNavigation,
  PaginationOutlined,

} from '../../js/function';
import { ArtworkCategoryTypeEnum } from '../../enum/ArtworkCategoryTypeEnum';
import { ArtworkRoutes } from '../../services/routes/artworkRoutes';
import { returnArtworkTagLiterariaName } from '../../enum/ArtworkTagEnum';
import { useNavigate } from 'react-router-dom';
import { ArtworkStatusEnum } from '../../enum/ArtworkStatusEnum';
import { ArtworkInterface } from '../../interfaces/ArtworkInterface';
import TemporaryDrawer from '../components/MenuLeft';
import CustomizedList from '../components/MenuFixed';

function Home() {
  const navigate = useNavigate();

  const [artworkTag, setArtworkTag] = useState(ArtworkCategoryTypeEnum.LITERARY);
  const [recentArtworks, setRecentArtworks] = useState([]);
  const [othersArtworks, setOthersArtworks] = useState([]);
  const [premiumArtworks, setPremiumArtworks] = useState([]);
  const [tabActive, setTabActive] = useState(ArtworkCategoryTypeEnum.LITERARY);

  useEffect(() => {
    const tab = Number(localStorage.getItem('tabActive')) || ArtworkCategoryTypeEnum.AESTHETIC;
    setTabActive(tab);
    getRecentArtworks();
    getPremiumArtworks();
    getOthersArtworks();
  }, [localStorage.getItem('tabActive'), tabActive]);

  
  async function getRecentArtworks() {
    const options = [
      { param: 'categoryType', value: tabActive },
      { param: 'limit', value: 5 }, 
      { param: 'offset', value: 0 },
    ];

    const response: any = await ArtworkRoutes.getAll(options);
    setRecentArtworks(response.data.rows as any);
  }

  async function getOthersArtworks() {
    const options = [
      { param: 'categoryType', value: tabActive },
      { param: 'limit', value: 4 }, 
      { param: 'offset', value: 4 },
    ];

    const response: any = await ArtworkRoutes.getAll(options);
    setOthersArtworks(response.data.rows as any);
  }

  async function getPremiumArtworks() {
    const options = [
      { param: 'categoryType', value: tabActive },
      { param: 'status', value: ArtworkStatusEnum.PREMIUM },
      { param: 'limit', value: 4 }, 
      { param: 'offset', value: 0 },
    ];

    const response: any = await ArtworkRoutes.getAll(options);
    setPremiumArtworks(response.data.rows as any);
  }

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
    <Divider></Divider>
      <CustomizedList/>
     
      <Grid sx={{ padding: '5%', width: '87%', marginLeft: '247px', textAlign: 'left' }}>
        <SimpleBottomNavigation  />

        <Grid sx={{ }}>
        <Typography variant='h4' sx={{ color: '#E5A264', textAlign: 'center', marginTop: '50px' }}>OBRAS PREMIUM</Typography>
        <div id='eventos-carousel' className='carousel slide pointer-event' data-bs-ride="carousel">
          {premiumArtworks.map((item: any) => (
            <Button onClick={() => artworkDetails(item._id)}>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='container'>
                  <div className='row'>
                    <div className='col-sm  col-custom-event'>
                  {item.contentUrl ? <img src={item.contentUrl} className='custom-event' height='350px' width="100%"></img> : <img src='https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' className='custom-event'  height='350px'></img>
              }
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
      <Grid sx={{ }}>
        <Typography variant='h4' sx={{ color: '#E5A264', textAlign: 'center' }}>OBRAS RECENTES</Typography>
        <div id='eventos-carousel' className='carousel slide pointer-event' data-bs-ride="carousel">
          {recentArtworks.map((item: any) => (
            <Button onClick={() => artworkDetails(item._id)}>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='container'>
                  <div className='row'>
                    <div className='col-sm  col-custom-event'>
                  {item.contentUrl ? <img src={item.contentUrl} className='custom-event' height='350px' width="100%"></img> : <img src='https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' className='custom-event'  height='350px'></img>
              }
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
      <Divider sx={{ color: '#E5A264' }}></Divider>
      <Grid sx={{ }}>
        <Typography variant='h4' sx={{ color: '#E5A264', textAlign: 'center' }}>OUTRAS OBRAS</Typography>
        <div id='eventos-carousel' className='carousel slide pointer-event' data-bs-ride="carousel">
          {othersArtworks.map((item: any) => (
            <Button onClick={() => artworkDetails(item._id)}>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='container'>
                  <div className='row'>
                    <div className='col-sm  col-custom-event'>
                  {item.contentUrl ? <img src={item.contentUrl} className='custom-event' height='350px' width="100%"></img> : <img src='https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' className='custom-event'  height='350px'></img>
              }
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
      </Grid>
      <Footer />
    </>
  );
}

export default Home;