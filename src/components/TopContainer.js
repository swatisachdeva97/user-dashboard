import {React, Component} from 'react';


export default class TopContainer extends Component {


    onChangeHandler = (event)=> {

        let value = event.target.value;
        this.props.onSearchHandler(value)
    };

    handleDropdownChange = (event)=> {
        let value = event.target.value;
        this.props.onHandleDropDownChange(value)
    };

    render() {
        return (

            <div>
                <div className="topnav">
                    <a className="active">Users Profile Dashboard</a>

                    <div>
                        <input type="text" placeholder="Search by Name..."  onChange={this.onChangeHandler}/>
                    </div>
                    <label>Sort By: </label>
                    <select className="select-user-profile" name="userProfile" id="user-profile"
                            onChange={this.handleDropdownChange}
                            defaultValue={this.props.defaultName}>
                        <option value="first_name">Choose here</option>
                        <option value="first_name">Order By Name</option>
                        <option value="address.state">Order By State</option>
                    </select>
                </div>

            </div>
        )
    }
}
