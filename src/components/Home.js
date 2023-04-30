import React from 'react'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';


const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: '4',
    size: '4xl',
}


const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={"container.xl"} maxH={"100vh"} p="19" >
                <Heading textTransform={'uppercase'} py="2" w={'fit-content'}
                    borderBottom={'2px solid'} m='auto'>
                    Services
                </Heading>

                <Stack h="full" p={'4'} alignItems={'center'} direction={['column', 'row']} >
                    <Image src={img5} h={['40', '400']} />

                    <Text letterSpacing={"widest"} lineHeight={"190%"} p={['4', '16']} textAlign={'center'}>
                        In the life of a gamer, the best player has every right to keep or to take inventory items from the defeated player. Gaming quotes are inspirational for gamers and can help to provide a boost before an important match. A gamer may give his everything to win an important match, one may even need inspirational quotes from our digital idols from a game or from the masters of this digital universe.
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
};
const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w="full" h={"100vh"}>
            <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'}  {...headingOptions} >
                Watch The Future
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img2} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Future Of Gaming
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img3} />
            <Heading bgColor={'blackAlpha.900'} color={'white'} {...headingOptions}>
                Gaming Console
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img4} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Play Station
            </Heading>
        </Box>
    </Carousel>
);

export default Home;