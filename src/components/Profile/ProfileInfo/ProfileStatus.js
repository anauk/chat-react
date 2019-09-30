import React from 'react'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMod = () => {
    this.setState({
      editMode: true
    })
  }
  disactivateEditMod = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status)
  }
  onStatusChange=(e)=>{
    this.setState({
      state: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        {!this.state.editMode && <div>
          <span onDoubleClick={this.activateEditMod}>{!this.props.status || '-----'}</span>
        </div>
        }

        {this.state.editMode && <div>
          <input
            onChange={this.onStatusChange}
            onBlur={this.disactivateEditMod} value={this.state.status}/>
        </div>
        }
      </div>
    )
  }
}

export default ProfileStatus