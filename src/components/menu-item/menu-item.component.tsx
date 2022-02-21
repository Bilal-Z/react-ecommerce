import React from 'react';
import './menu-item.styles.scss';

interface MenuProps {
	title: string;
	image: string;
	size?: string;
}

const MenuItem: React.FC<MenuProps> = ({ title, image, size }) => {
	return (
		<div className={`${size} menu-item`}>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${image})`,
				}}
			></div>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
