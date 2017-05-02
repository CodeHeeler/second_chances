import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';


class SkillsForm extends React.Component {

  makeData() {
    let arr = [];
    let skillsObj = this.props.allSkills;
    for ( let i in skillsObj ) {
        if (skillsObj.hasOwnProperty(i)){
           arr.push(skillsObj[i].skill);
        }
      }
    return arr;
  }

render() {

  const data = this.makeData();

  return (
    <div>
    <form>
      <AutoComplete
      floatingLabelText="What are your skills?"
      filter={AutoComplete.fuzzyFilter}
      openOnFocus={true}
      dataSource={data}
      />
      </form>
      </div>
  );
}
}

export default SkillsForm;
