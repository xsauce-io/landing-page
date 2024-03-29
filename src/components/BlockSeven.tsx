import { ArrowUpIcon, CheckIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	Grid,
	GridItem,
	Heading,
	Hide,
	HStack,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	Spacer,
	Stack,
	Text,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { ScrollAnimation } from './ScrollAnimation';
import { useState } from 'react';
import DownloadAppleStore from '../public/DownloadAppleStore.svg';


export const BlockSeven = ({ title }: { title: string }) => {
	const toast = useToast();

	const [email, setEmail] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		let data = new FormData(event.target);
		//alert(`The name you entered was: ${email}`);

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
		<VStack
			width={'100%'}
			borderColor={'rgba(255, 255, 255, 0.2)'}
			borderTopWidth={'1px'}
			borderBottomWidth={'1px'}
            paddingY={5}
			spacing={10}
			px="2rem"

		>
			<Stack direction={[ 'row', 'column']} width={'100%'}>
				<VStack width={'fit-content'}>
					<Text
						color={'white'}
						fontSize={'2xl'}
						textAlign={'left'}
						width={'full'}
					>
						Join our newsletter
					</Text>
					<Text color={'white'}>
						Join the waiting list and get access early to the app
					</Text>
				</VStack>
				<Box width={'full'} height={'full'} border={'0.5.px'} paddingY={8}>
					<form
						id="email-form"
						method="POST"
						action="https://script.google.com/macros/s/AKfycbxzfszRCRSs2zbE7a4uDmHTUl-oxG_XHjiefFWXv7y-TWgZEOldmD9YcjavzL4ksCYYlw/exec"
						onSubmit={handleSubmit}
					>
						<HStack spacing="10px" width={'full'} justifyContent={'flex-end'}>
							<InputGroup width={{sx: '100%', md:'50%'}} alignSelf="center" border="0px">
								<FormControl>
									<Input
										_focus={{outline: "none", boxShadow:'0px 4px 15px rgba(255, 255, 255, 0.3)', border: "1px", borderColor: "white" }}
										id="Email"
										name="Email"
										type="email"
										shadow={10}
										placeholder="email@xyz.com"
										fontSize={{ xs: 'xs', md: 'sm' }}
										color="white"
										border={'1px'}
										borderBottomWidth={'0.5px'}
										boxShadow="0px 4px 15px rgba(47, 253, 118, 0.3)"
										borderRadius={15}
										borderColor={'brand.100'}
										background={'black'}
										onChange={(e) => setEmail(e.target.value)}
										value={email}
									/>
								</FormControl>
							</InputGroup>
							<Box
								width={{sx: '20%', md:'50%'}}
								bg="brand.100"
								color="black"
								fontSize={{ xs: 'xs', md: 'xs' }}
								as={Button}
								whiteSpace={'break-spaces'}
								type="submit"
								borderRadius={'10px'}
								borderColor={'black'}
							>
								<Text whiteSpace={'break-spaces'} paddingX={1}>
									Join the waitlist
								</Text>
							</Box>
						</HStack>
					</form>
				</Box>
			</Stack>
			<HStack width={'100%'} spacing={10} >
				<VStack>
					<a
						href="https://docs.xsauce.io/connect/socials"
						target={'_blank'}
						rel={'noreferrer'}
					>
						<Button
							display="flex"
							variant={'link'}
							fontSize={'md'}
							color={'white'}
							fontWeight={'normal'}
						>
							<Text>Contact </Text>
						</Button>
					</a>
				</VStack>
				<Divider
					borderColor={'rgba(255, 255, 255, 0.2)'}

					borderWidth="0.5px"
					height="20"
					orientation="vertical"
				/>
				<VStack >
					<Box paddingY={10}>
						<Button disabled style={{background:'transparent', width:'fit-content', border:'none', outline:'none'}}>
						<DownloadAppleStore />
						</Button>
					</Box>
				</VStack>
			</HStack>
		</VStack>
	);
};

BlockSeven.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
