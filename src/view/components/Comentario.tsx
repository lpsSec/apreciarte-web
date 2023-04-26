import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import ReportModal from './Reporte';
import { ReportReferenceTypeEnum } from '../../enum/ReportReferenceTypeEnum';

export default function Comentario({comments}:any) {
  const [coments, setComents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  
  useEffect(() => {
    setComents(comments);
  }, [comments])
  
  return (
    <>
      <List id='listComment' sx={{ bgcolor: 'background.paper', marginTop: '3%'}}>
        {coments && coments.map((coment: any) =>(
          <>
            <>
              {openModal && (
                <ReportModal postId={coment._id} referenceType={ReportReferenceTypeEnum.COMMENT} />
              )}
            </>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt='Remy Sharp' src='https://i.imgur.com/JP2AdTJ.png' />
              </ListItemAvatar>
              <ListItemText
                primary={coment.user.name}
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      {coment.message}
                    </Typography>
                    <Tooltip title='reportar' onClick={() => {
                      setOpenModal(true)
                    }}>
                      <IconButton name='report'><ReportGmailerrorredIcon /></IconButton>
                    </Tooltip>
                  </>
                }
              />
            </ListItem>
          </>
        ))}
      
      </List>
    </>
  );
}
