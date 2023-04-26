import MenuBookIcon from '@mui/icons-material/MenuBook';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import '../css/style.min.css'
import { useEffect, useState } from 'react';
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Pagination,
  Stack,
  Typography,
  Button,
  Popover,
  styled,
} from '@mui/material/';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { ArtworkTagEsteticaEnumMap, ArtworkTagLiterariaEnumMap, returnArtworkTagLiterariaEnum } from '../enum/ArtworkTagEnum';
import { ArtworkCategoryTypeEnum } from '../enum/ArtworkCategoryTypeEnum';

export function PopoverPopupState({ artworkTag }) {
  const selectFilter = (e) => {
    const a = returnArtworkTagLiterariaEnum(e.target.innerText);
    console.log(a);
  }

  return (
    <PopupState variant='popover' popupId='demo-popup-popover'>
      {(popupState) => (
        <div>
          <Button variant='contained' {...bindTrigger(popupState)}>
            <img src='https://i.imgur.com/EZLNuU6.png' width='60%'></img>
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2, fontWeight: 'bold', textAlign: 'center' }}>Escolha a categoria de interesse.</Typography>
            <Box display='inline'>
              {
                artworkTag === ArtworkCategoryTypeEnum.LITERARY ? ArtworkTagLiterariaEnumMap.map(categoria => (
                  <Button onClick={(e) => selectFilter(e)} size='small' class='buttonCategory' variant='contained'>{categoria.name}</Button>
                )) : ArtworkTagEsteticaEnumMap.map(categoria => (
                  <Button onClick={(e) => selectFilter(e)} size='small' class='buttonCategory' variant='contained'>{categoria.name}</Button>
                ))
              }
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export function PaginationOutlined() {
  return (
    <Stack textAlign='center' spacing={2}>
      <Pagination count={10} variant='outlined' />
    </Stack>
  );
}

export function SimpleBottomNavigation() {
  const [tabActive, setTabActive] = useState(ArtworkCategoryTypeEnum.LITERARY);

  useEffect(() => {
    const tab = Number(localStorage.getItem('tabActive')) || ArtworkCategoryTypeEnum.LITERARY;
    setTabActive(tab);
  }, []);

  const changeTabActive = (value) => {
    setTabActive(value);
    localStorage.setItem('tabActive', value);
    window.location.reload();
  }

  return (
    <Box sx={{ width: '100%' }}>
      {tabActive && (
        <BottomNavigation
          showLabels
          value={tabActive}
          onChange={(e, newValue) => changeTabActive(newValue)}
        >
          <BottomNavigationAction value={ArtworkCategoryTypeEnum.LITERARY} label='LITERÁRIA' icon={<MenuBookIcon />} />
          <BottomNavigationAction value={ArtworkCategoryTypeEnum.AESTHETIC} label='ESTÉTICA' icon={<ColorLensIcon />} />
        </BottomNavigation>
      )}
    </Box>
  );
}

export const FilterIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '50%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'inline',
  alignItems: 'center',
  justifyContent: 'center',
}));

export function PreviewImage() {
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById('uploadImage').files[0]);

  oFReader.onload = function (oFREvent) {
      document.getElementById('uploadPreview').src = oFREvent.target.result;
  };
};