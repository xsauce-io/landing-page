import { ArrowUpIcon, CheckIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Flex,
	FormControl,
	Grid,
	GridItem,
	Heading,
	Hide,
	HStack,
	Input,
	InputGroup,
	InputRightAddon,
	Spacer,
	Stack,
	Text,
	useToast,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { ScrollAnimation } from './ScrollAnimation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import HeroImage from '../public/HeroImage.svg';
import HeroImageTest from '../public/HeroImageTest.svg';

import HeroImagePng from '../public/png/HeroImage.png'
import Image from 'next/image';

export const Hero = ({ title }: { title: string }) => {
	const toast = useToast();

	const [email, setEmail] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		let data = new FormData(event.target);
		//alert(`The name you entered was: ${email}`);

		console.log(data);
		const action = event.target.action;
		fetch(action, {
			method: 'POST',
			body: data,
		}).then(() => {
			//alert('Success!');

			toast({
				position: 'bottom-right',
				render: () => (
					<Flex
						flexDirection={{ xs: 'column', md: 'row' }}
						color="brand.200"
						p={3}
						bg="brand.100"
						maxWidth={'100%'}
						alignItems={'center'}
						borderRadius={6}
					>
						<CheckIcon margin={2} />
						<Text overflowWrap={'break-word'} textAlign={'center'}>
							You have successfully joined the waitlist!
						</Text>
					</Flex>
				),
			});
			setEmail('');
		});
	};

	return (
		<Grid
			templateColumns="repeat(5, 1fr)"
			width={'100%'}
			px="2rem"
			
		>
			<GridItem
				colSpan={{ xs: 12, md: 2 }}
				h="10"
				height={'fit-content'}
				alignSelf={'center'}
				paddingY={6}
				placeSelf={'start'}
			>
				<ScrollAnimation animation="fade-up">
					<Stack>
						<ScrollAnimation animation="fade-up">
							<Text fontSize="sm" paddingY={3}>
								DRIVING CULTURE FORWARD
							</Text>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<Heading
								fontWeight={'semibold'}
								fontSize="4xl"
								lineHeight={'base'}
								paddingY={3}
							>
								<Box>
									The Future of&nbsp;
									<Box display={'inline-block'} color={'brand.100'}>
										Culture
									</Box>
								</Box>
							</Heading>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<Text fontSize="xl" paddingY={3}>
								Xsauce is a dynamic, decentralized ecosystem which allows you to
								translate your knowledge of culture into money in your pocket.
							</Text>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<form
								id="email-form"
								method="POST"
								action="https://script.google.com/macros/s/AKfycbxzfszRCRSs2zbE7a4uDmHTUl-oxG_XHjiefFWXv7y-TWgZEOldmD9YcjavzL4ksCYYlw/exec"
								onSubmit={handleSubmit}
							>
								<InputGroup alignSelf="center" border="0px">
									<FormControl>
										<Input
											id="Email"
											name="Email"
											type="email"
											placeholder="Email@xyz.com"
											fontSize={{ xs: 'xs', md: 'sm' }}
											width={'100%'}
											bg="colors.white"
											color="brand.200"
											border="0px"
											borderRightRadius={'0px'}
											onChange={(e) => setEmail(e.target.value)}
											value={email}
										/>
									</FormControl>
									<InputRightAddon
										width={'50%'}
										bg="brand.100"
										color="brand.200"
										border="0px"
										fontSize={{ xs: 'xs', md: 'sm' }}
										as={Button}
										whiteSpace={'break-spaces'}
										type="submit"
									>
										<Text whiteSpace={'break-spaces'} paddingX={2}>
											Join Waitlist
										</Text>
										<FiArrowUpRight />
									</InputRightAddon>
								</InputGroup>
							</form>
						</ScrollAnimation>
					</Stack>
				</ScrollAnimation>
			</GridItem>

			<GridItem
				colStart={{ xs: 1, md: 3 }}
				colEnd={{ xs: 6, md: 6 }}
				height={'fit-content'}
				width={'100%'}
				placeSelf={'center'}
		
			>
				{/*TODO: Fix scaling on small sc */}
				<Flex
					overflow={'hidden'}
					justifyContent={'center'}
					alignItems={'center'}
					as={ScrollAnimation}
					anchorPlacement={'top-bottom'}
					offset={'120'}
					paddingX={{sm: 2, md: 2, lg: 5 }}
					
				>
					{/*HeroImage */}
					<HeroImage/>

					
				</Flex>
			</GridItem>
		</Grid>
	);
};

Hero.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
