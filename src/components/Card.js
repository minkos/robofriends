import React from 'react';

// Destructuring where props exist
const Card = ({name, email, id}) => {
	// Destructuring the props; properties do not have to be in order....
	//.......but must be same name as props defined.
	//const {name, email, id} = props;
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;