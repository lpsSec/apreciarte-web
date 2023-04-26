import { useState } from 'react';
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
import '../../js/function'

import {
  SimpleBottomNavigation,
} from '../../js/function';

import { ArtworkCategoryTypeEnum } from '../../enum/ArtworkCategoryTypeEnum';

function MyShopping() {
  const [artworkTag, setArtworkTag] = useState(ArtworkCategoryTypeEnum.LITERARY);

  return (
    <>
      <Header />
      <Typography variant='h4' sx={{ color: '#E5A264', textAlign: 'center', marginTop: '5%' }}>MINHAS COMPRAS</Typography>
      <Grid sx={{ padding: '5%' }}>
        <SimpleBottomNavigation />

        <Divider sx={{ color: '#F2DBC6' }}></Divider>

      </Grid>
      <Grid sx={{ padding: '5%'}}>
        <CardGroup>
          <Button>
            <Card>
              <CardImg
                src='https://picsum.photos/500/650'
                width='100px'
                size='100%'
              />

              <CardFooter>
                <Badge color='my-text' id='category'>
                  LIVRO
                </Badge>
                <Badge color='my-text' id='subcategory'>
                  TERROR
                </Badge>
              </CardFooter>

            </Card>
          </Button>
        </CardGroup>
      </Grid>
      <Footer />
    </>
  );
}

export default MyShopping;