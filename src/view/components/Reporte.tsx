import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ReportRoutes } from '../../services/routes/reportRoutes';
import { ReportReasonArtworkEnum, ReportReasonCommentEnum } from '../../enum/ReportReasonEnum';
import { ReportReferenceTypeEnum } from '../../enum/ReportReferenceTypeEnum';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ReportModal({ postId, referenceType }: any) {
  const [open, setOpen] = useState(true);
  const [reason, setReason] = useState(1);
  
  const handleClose = () => setOpen(false);

  const submitReport = async () => {
    const response = await ReportRoutes.create({
      reason,
      postId,
      referenceType,
    });

    if (response.status !== 200) {
      alert('Erro ao tentar denunciar a obra!');
    }

    alert('Sua denúncia foi efetuada com sucesso!');
  }

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'
      >
        <Box sx={style}>
          <Typography id='keep-mounted-modal-title' variant='h6' component='h2' textAlign='center' borderColor='black' borderBottom='solid'>
            Reportar {referenceType === ReportReferenceTypeEnum.ARTWORK ? 'Obra' : 'Comentário'}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <FormControl>
              <FormLabel id='demo-radio-buttons-group-label'>O que melhor descreve o seu problema?</FormLabel>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue='female'
                name='radio-buttons-group'
                onChange={(e) => setReason(Number(e.target.value))}
              >
                {referenceType === ReportReferenceTypeEnum.ARTWORK ? (
                  <>
                    <FormControlLabel value={ReportReasonArtworkEnum.AGE_GROUPE} control={<Radio />} label='Publicação deveria estar classificada como adulta' />
                    <FormControlLabel value={ReportReasonArtworkEnum.PLAGIARISM} control={<Radio />} label='Publicação contém plágio' />
                    <FormControlLabel value={ReportReasonArtworkEnum.WRONG_CATEGORY} control={<Radio />} label='Publicação na categoria errada' />
                    <FormControlLabel value={ReportReasonArtworkEnum.MY_AUTHORSHIP} control={<Radio />} label='Publicação de minha autoria' />
                    <FormControlLabel value={ReportReasonArtworkEnum.NONSENSE_IMAGES} control={<Radio />} label='Imagens da Publicação sem nexo com conteúdo' />
                  </>
                ): (
                  <>
                    <FormControlLabel value={ReportReasonCommentEnum.SPAM} control={<Radio />} label='Spam' />
                    <FormControlLabel value={ReportReasonCommentEnum.SEXUAL_ACTIVITY} control={<Radio />} label='Conteúdo sexual' />
                    <FormControlLabel value={ReportReasonCommentEnum.HAT_SPEECH} control={<Radio />} label='Discurso de ódio' />
                    <FormControlLabel value={ReportReasonCommentEnum.FAKE_NEWS} control={<Radio />} label='Fake News' />
                    <FormControlLabel value={ReportReasonCommentEnum.BULLYNG} control={<Radio />} label='Bullying' />
                  </>
                )}
              </RadioGroup>
            </FormControl>
          </Typography>
          <Box sx={{ marginTop: '5%' }}>
            <Button className='btnCadastrar' onClick={submitReport} sx={{ float: 'left' }}>Enviar</Button>
            <Button className='btnCancelar' onClick={handleClose} sx={{ float: 'right' }}>Cancelar</Button>
          </Box>
        </Box>

      </Modal>
    </div>
  );
}