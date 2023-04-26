import HeaderPrincipal from '../components/Header';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { ArtworkRoutes } from '../../services/routes/artworkRoutes';
import { useSearchParams } from 'react-router-dom';
import { ChapterRoutes } from '../../services/routes/chapterRoutes';
import parse from 'html-react-parser';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export function Capitulo() {
  const [value, setValue] = useState(0);
  const [chapters, setChapters] = useState([] as any);
  const [chapter, setChapter] = useState({} as any);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getArtwork();
  }, []);
  
  const getArtwork = async () => {
    const artworkId = searchParams.get('artworkId');
    const response = await ArtworkRoutes.getById(artworkId || '');

    if (response.status !== 200) {
      alert('Erro');
    }

    setChapters(response.data.chapters);
  };

  const handleChange = async (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    const response = await ChapterRoutes.getById(chapters[newValue]._id);

    if (response.status !== 200) {
      alert('Erro');
    }

    setChapter(response.data);
  };

  return (
    <>
      <HeaderPrincipal />
      <>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '40%', marginTop: 10 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', textAlign: 'center', justifyContent: 'center' }}>
              <Tabs value={value} onChange={handleChange} sx={{ justifyContent: 'center' }}>
                {chapters && chapters.map((item: any) => (
                  <Tab label={item.title} />
                ))}
              </Tabs>
            </Box>
            <Box sx={{ marginTop: 5 }}>
              {chapters && chapters.map((item: any, index: any) => (
                <TabPanel value={value} index={index}>
                  {chapter && parse(String(chapter.content))}
                </TabPanel>
              ))}
            </Box>
          </Box>
        </Box>
      </>
    </>
  )
}