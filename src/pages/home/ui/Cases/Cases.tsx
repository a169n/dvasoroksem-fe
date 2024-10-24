import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box, Container } from '@mui/material';

const caseStudies = [
  { 
    title: 'Coffee BOOM', 
    description: 'Место, где становятся друзьями', 
    img: 'src/assets/coffee_boom.png'
  },
  { 
    title: 'Soyle', 
    description: 'Казахский для всех', 
    img: 'src/assets/soyle.png' 
  },
  { 
    title: 'Помоги Другому', 
    description: 'Не упускайте случая делать добро', 
    img: 'src/assets/pomogi_dr.png' 
  },
  { 
    title: 'QCS',
    description: 'Лидер в стране в области бортового питания и кейтеринга', 
    img: 'https://example.com/qcs.jpg' 
  },
];

export const Cases = () => {
  return (
    <Container>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" marginTop={2} marginBottom={2} width="100%">
        <Typography variant="h4" style={{color: "#000000"}}>
            НАШИ КЕЙСЫ
        </Typography>
      {/* Button to View All */}
        <Button variant="outlined" size="large">
          Смотреть все
        </Button>
      </Box>
      {/* Grid of Case Studies */}
      <Grid container spacing={4} justifyContent="center">
        {caseStudies.map((study, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="280"
                image={study.img}
                alt={study.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {study.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {study.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Bottom Banner */}
      <Box
        sx={{
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          padding: '40px',
          marginTop: '50px',
          position: 'relative',
          height: "300px"
        }}
      >
        <Typography variant="h4" gutterBottom style={{
            position: "absolute",
            top: "30%",
            left: "3%",
        }}>
          ПОКАЖЕМ ВСЕМ ЧТО ВАШ БИЗНЕС КЛАССНЫЙ
        </Typography>
        <Box mt={3}>
          <Button variant="contained" color="primary" size="large"
          style={{
            position: "absolute",
            bottom: "10%",
            right: "3%",
        }}
          >
            Я хочу оставить заявку
          </Button>
        </Box>
      </Box>
    </Container>
  );
}