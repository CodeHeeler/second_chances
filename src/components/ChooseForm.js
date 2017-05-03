import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import axios from 'axios';


class ChooseForm extends React.Component {

  makeData(show) {
    let sourceObj;
    let arr = [];
    if (show==='skills') {
      sourceObj = this.props.allskills;
      for (let i in sourceObj) {
        arr.push(
          {skill: sourceObj[i].skill,
            id: sourceObj[i].id});
      }
    } else if (show==='locations') {
      sourceObj = this.props.alllocations;
    }
    console.log('the skills arr', show, arr);


    return arr;
  }

  displayPrompt(choose) {
    if (choose==='skills') {
      return 'What are your skills?'
    } else if (choose==='location') {
      return 'Where would you like to work?'
    };
  }

  handleUpdateInput = (dataSource) => {
  let skill = {
      owner: this.props.userid,
      skill: dataSource.id
  }
  this.postSkill(skill);
}

postSkill(skill) {
  axios({
    method: 'POST',
    url:`${this.props.baseurl}/api/providedskill/${this.props.userid}/`,
    data: skill
  }).then((response) => {
    console.log('skillposted!!', response);
  }).catch(function(error) {
    console.log(error);
  });
}

render() {

  const autoData = this.makeData(this.props.choose);
  const dataSourceConfig = {
    text: 'skill',
    value: 'id'
  };

  return (
    <div>
    <form>
      <h2>{this.displayPrompt(this.props.choose)}</h2>
      <AutoComplete
      floatingLabelText="Choose some options"
      filter={AutoComplete.fuzzyFilter}
      openOnFocus={true}
      dataSource={autoData}
      dataSourceConfig={dataSourceConfig}
      onNewRequest={this.handleUpdateInput.bind(this)}
      />
      </form>
      </div>
  );
}
}

export default ChooseForm;
