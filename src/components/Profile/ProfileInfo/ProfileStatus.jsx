import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    actyvateEditMode = () => {
        this.setState({
            editMode: true
        })
    } 
    deactyvateEditMode = () =>  {
        this.setState({
            editMode: false
        })
    } 

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.actyvateEditMode.bind(this)}>{this.props.status}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactyvateEditMode.bind(this)} value={this.props.status} />
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;