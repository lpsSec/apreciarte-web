import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import CategoryIcon from '@mui/icons-material/Category';
import PaletteIcon from '@mui/icons-material/Palette';
import { ArtworkTagEsteticaEnumMap, ArtworkTagLiterariaEnumMap } from '../../enum/ArtworkTagEnum';

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});


export default function CustomizedList() {
  const [openEstetica, setOpenEstetica] = React.useState(true);
  const [openLiteraria, setOpenLiteraria] = React.useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: false,
              },
            },
          },
          palette: {
            mode: 'dark',
            primary: { main: '#000' },
            background: { paper: '#e5a264' },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component='nav' disablePadding>
    
            <Divider />
            <ListItem component='div' disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <CategoryIcon color='primary' />
                </ListItemIcon>
                <ListItemText
                  primary='Escolher Categoria'
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                  }}
                />
              </ListItemButton>
            
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: openEstetica ? '#e5a264' : null,
                pb: openEstetica ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems='flex-start'
                onClick={() => setOpenEstetica(!openEstetica)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: openEstetica ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: openEstetica ? 1 : 10 } },
                }}
              > 
            
               <PaletteIcon color='primary'/>
                <ListItemText
                  primary='Estética'
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '5px',
                    color: '#000'
                  }}
                  
                  secondary='Escolha uma TAG'
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: openEstetica ? 'rgba(0,0,0,0)' : '#000',
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 1,
                    color: '#000',
                    transform: openEstetica ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                />
              </ListItemButton>
              {openEstetica &&
                ArtworkTagEsteticaEnumMap.map((item) => (
                  <ListItemButton
                    key={item.name}
                    sx={{ py: 0, minHeight: 32, color: '#000' }}
                  >
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
            <Box
              sx={{
                bgcolor: openEstetica ? '#e5a264' : null,
                pb: openEstetica ? 2 : 0,
              }}
            >
            <Divider />
              <ListItemButton
                alignItems='flex-start'
                onClick={() => setOpenLiteraria(!openLiteraria)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: openLiteraria ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: openLiteraria ? 1 : 10 } },
                }}
              > 
    
               <ImportContactsIcon color='primary'/>
                <ListItemText
                  primary='Literária'
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '5px',
                    color: '#000'
                  }}
                  secondary='Escolha uma TAG'
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: openLiteraria ? 'rgba(0,0,0,0)' : '#000',
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 1,
                    color: '#000',
                    transform: openLiteraria ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                />
              </ListItemButton>
              {openLiteraria &&
                ArtworkTagLiterariaEnumMap.map((item) => (
                  <ListItemButton
                    key={item.name}
                    sx={{ py: 0, minHeight: 32, color: '#000' }}
                  >
                  
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
