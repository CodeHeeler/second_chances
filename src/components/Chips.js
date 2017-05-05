import React from 'react';
import Chip from 'material-ui/Chip';



class Chips extends React.Component {

	constructor(props) {
		super(props);
		this.handleRequestDelete = this.handleRequestDelete.bind(this);
		this.state = {
			display: 'inherit',
			margin: 4
		}
	}

	handleRequestDelete() {
	  console.log('You clicked the delete button.');



		this.state.display === 'inherit' ?
			this.setState({display: 'none'}) :
			this.setState({display: 'inherit'});

		this.props.choose === 'skills' ?
			this.props.getId(this.props.userskill, "skill") :
			this.props.getId(this.props.userlocation, "location");
	}

		render() {

			const skill = this.props.userskill;
			const location = this.props.userlocation;

			return (
				<Chip
					onRequestDelete={this.handleRequestDelete}
					style={this.state}>

					{(this.props.choose==='skills')? skill:location}

				</Chip>

			);
		}
	}

		export default Chips;
