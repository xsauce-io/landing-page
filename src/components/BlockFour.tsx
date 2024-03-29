import {
	Box,
	Tab,
	TabIndicator,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
} from '@chakra-ui/react';
import { ScrollAnimation } from './ScrollAnimation';
import Instant from '../public/Instant.svg';
import EasyToUse from '../public/EasyToUse.svg';
import Accurate from '../public/Accurate.svg';

export const BlockFour = ({ title }: { title: string }) => (

	<VStack paddingY={10}>
			<ScrollAnimation>
		<Tabs variant="unstyled">
			<TabList color={'grey'} width={'full'} justifyContent={'center'}>
				<Tab
					fontSize={{ xs: 'xs', md: 'xs' }}
					_selected={{ color: 'brand.100', borderColor: 'brand.100' }}
					_focus={{ outline: 'none' }}
				>
					Easy to use
				</Tab>
				<Tab
					fontSize={{ xs: 'xs', md: 'xs' }}
					_selected={{ color: 'brand.100', borderColor: 'brand.100' }}
				>
					Instant
				</Tab>
				<Tab
					fontSize={{ xs: 'xs', md: 'xs' }}
					_selected={{ color: 'brand.100', borderColor: 'brand.100' }}
				>
					Accurate
				</Tab>
			</TabList>
			<TabIndicator
				mt="-1.5px"
				height="2px"
				bg="brand.100"
				borderRadius="1px"
			/>
			<TabPanels width={'50%'}>
				<TabPanel>
					<VStack>
					<Box paddingY={5} width={{xs:"70%", md:'50%'}}>
							<Text color={'white'} textAlign={'center'} fontWeight={400} fontSize={{ xs: 'xs', md: 'sm' }}>
								An easy to use interface for investors familar with platforms
								such as robinhood or coinbase.
							</Text>
						</Box>
						<EasyToUse style={{width: '90%'}} />
					</VStack>
				</TabPanel>

				<TabPanel>
					<VStack>
						<Box paddingY={5} width={{xs:"70%", md:'50%'}}>
							<Text color={'white'} textAlign={'center'} fontWeight={400} fontSize={{ xs: 'xs', md: 'sm' }}>
								The Xchange is real-time allowing you to react to market
								conditions in a near instance
							</Text>
						</Box>
						<Instant style={{width: '90%'}}/>
					</VStack>
				</TabPanel>
				<TabPanel>
					<VStack>
					<Box paddingY={5} width={{xs:"70%", md:'50%'}}>
							<Text color={'white'} textAlign={'center'} fontWeight={400} fontSize={{ xs: 'xs', md: 'sm' }}>
								We source our price feeds from a combination of industry leading
								resale platforms such as StockX, Goat, and Flight Club to name a
								few.
							</Text>
						</Box>

							<Accurate style={{width: '50%'}}/>


					</VStack>
				</TabPanel>
			</TabPanels>
		</Tabs>
		</ScrollAnimation>
	</VStack>

);

BlockFour.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
