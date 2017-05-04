import React from 'react';

class ShowData extends React.Component {

		render() {


			return (
				<li className='data-item'>
					{(this.props.choose==='skills')
						? this.props.userskill
						: this.props.userlocation
					}

				</li>

			);
		}
	}

		export default ShowData;
