import React from 'react';

class SkillsData extends React.Component {

	render() {


		const skills = this.props.skills.map((e, i) =>(<li key={i}>{e}</li>))



		return (

			<ul>
				{skills}
			</ul>

		);
	}
}

export default SkillsData;
