import React from 'react';
import Chip from 'material-ui/Chip';


class ShowData extends React.Component {

	handleRequestDelete() {
	  console.log('You clicked the delete button.');
	}

		render() {

			const styles = {
			  chip: {
			    margin: 4
			  }
			};

			return (
				<Chip
					onRequestDelete={this.handleRequestDelete}
					style={styles.chip}
>
					{(this.props.choose==='skills')
						? this.props.userskill
						: this.props.userlocation
					}

				</Chip>

			);
		}
	}

		export default ShowData;
