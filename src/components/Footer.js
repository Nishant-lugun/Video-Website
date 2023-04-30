import React from 'react'
import {Box, Stack, Heading, VStack, HStack,Button,Input,Text} from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'white'} minH={'40'} p='16' >
        <Stack direction={['Column', 'row']}>
            <VStack alignItems={"stretch"} w={"full"} px={'4'}>
                <Heading size="md" textTransform={"uppercase"} textAlign={["center", "left"]} >
                    Subscribe To Get Updates
                </Heading>
                <HStack>
                    <Input placeholder='Enter Your Email Id' 
                    border={"none"}
                    borderRadius="none"
                    outline={"none"}
                    focusBorderColor="none"
                    />
                    <Button
                    p={'0'}
                    colorScheme={"purple"}
                    variant={"ghost"}
                    borderRadius={'0px 20px 20px 0px'}
                    
                    >
                        <AiOutlineSend size={20} />
                    </Button>
                </HStack>
            </VStack>

                <VStack w={"full"}
                borderLeft={['none', '1px solid white']}
                borderRight={['none', '1px solid white']}
                >
                    <Heading textTransform={"uppercase"} textAlign={"center"}>
                        VIDEOS HUB
                    </Heading>
                        <Text fontSize={'14px'}>ALL RIGHTS ARE RESERVED</Text>
                </VStack>

                <VStack w={"full"}
                >
                    <Heading size={"md"} textTransform={'uppercase'} >
                        Social Media
                    </Heading>
                    <Button variant={"link"} colorScheme={"whiteAlpha.600"}>
                        <a target={'_blank'} href="http://youtube.com">Youtube</a>
                    </Button>
                    <Button variant={"link"} colorScheme={"whiteAlpha.600"}>
                        <a target={'_blank'} href="http://instagram.com">Instagram</a>
                    </Button>
                    <Button variant={"link"} colorScheme={"whiteAlpha.600"}>
                        <a target={'_blank'} href="http://github.com">Github</a>
                    </Button>
                </VStack>
        </Stack>
    </Box>
  )
}

export default Footer