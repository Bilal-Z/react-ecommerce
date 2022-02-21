import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

interface Section {
	title: string;
	imageUrl: string;
	size?: string;
	id: number;
}

const Directory: React.FC = () => {
	const [sections, setSections] = useState<Section[]>([
		{
			title: 'processors',
			imageUrl:
				'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
			id: 1,
		},
		{
			title: 'motherboards',
			imageUrl:
				'https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
			id: 2,
		},
		{
			title: 'memory modules',
			imageUrl:
				'https://images.unsplash.com/photo-1592664474505-51c549ad15c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
			id: 3,
		},
		{
			title: 'power supplies',
			imageUrl:
				'https://www.pcworld.com/wp-content/uploads/2021/09/evga-power-supply-100883513-orig.jpg?quality=50&strip=all&w=720',
			id: 4,
		},
		{
			title: 'solid state drives',
			imageUrl:
				'https://images.unsplash.com/photo-1628557119555-fb3d687cc310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
			id: 5,
		},
		{
			title: 'hard disk drives',
			imageUrl:
				'https://images.unsplash.com/photo-1622988913139-a2cef6577910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
			id: 6,
		},
		{
			title: 'graphics cards',
			imageUrl:
				'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
			id: 7,
		},
		{
			title: 'cpu coolers',
			imageUrl:
				'https://images.unsplash.com/photo-1607793193104-682047516817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
			id: 8,
		},
		{
			title: 'case fans',
			imageUrl:
				'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
			id: 9,
		},
		{
			title: 'computer cases',
			imageUrl:
				'https://images.unsplash.com/photo-1595020551262-1f037857cdeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
			id: 10,
		},
	]);

	return (
		<div className="directory-menu">
			{sections.map(({ id, imageUrl, title, size }) => (
				<MenuItem key={id} title={title} image={imageUrl} size={size} />
			))}
		</div>
	);
};

export default Directory;
