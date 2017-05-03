import React from 'react';

class ShowData extends React.Component {

		showData() {
			if ( this.props.show==='skills' ) {
				if ( this.props.skills !==null ) {
					return ( this.props.skills.map( ( e, i ) => ( < li key={ i } > { e } < /li>)));
				} else {
					return (
						<p> no skills </p>
					);
				}
			}
		}
						render() {




							return (

								<
								ul > { this.showData } <
								/ul>

							);
						}
					}

					export default ShowData;
