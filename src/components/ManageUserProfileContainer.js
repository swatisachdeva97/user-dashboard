import React, {Component} from 'react';
import UserProfileContainer from './UserProfileContainer';
import TopContainer from './TopContainer';
import Service from '../services/Service';


/**
 * ManageUserProfileContainer (Parent container) for the application
 */

export default class ManageUserProfileContainer extends Component {

    /* Initial state*/
    state = {
        userData: [],
        filteredData: [],
        error: "",
        searchedName: "",
        isLoading: false
    };

    getInitialUserData() {

        Service.getUserData().then((res)=> {
            this.setState({
                userData: res
            })
        }).catch((error)=> {
            this.setState({error: "Invalid response"})
        });
    }

    componentDidMount() {
        this.getInitialUserData();
    }

    onSearchHandler = (name)=> {

        //const regex = new RegExp(`^${name}`, "i");
        const initialData = this.state.userData;
        if (name.length > 0) {
            let filteredData = initialData.filter((data)=> data.first_name
                .toUpperCase().indexOf(name.toUpperCase()) >= 0);
            this.setState({
                filteredData: filteredData,
                searchedName: name
            })
        } else {
            this.setState({
                filteredData: [],
                searchedName: ""
            })
        }
    };


    onHandleDropDownChange = (item)=> {
        let property = item;
        let sortedData;
        console.log(property);
        let initialData = this.state.userData;
        if (item === 'first_name') {
            sortedData = [...initialData].sort((a, b)=> a.first_name.localeCompare(b.first_name));
        } else if (item === "address.state") {
            sortedData = [...initialData].sort((a, b)=> a.address.state.localeCompare(b.address.state));
        }
        this.setState({userData: sortedData})
    };

    render() {
        const {userData, filteredData, error, searchedName, defaultOrderBy} = this.state;
        return (
            <div>
                {userData.length > 0 ? <TopContainer userData={userData} onSearchHandler={this.onSearchHandler}
                                                     onHandleDropDownChange={this.onHandleDropDownChange}/> : error}
                {searchedName.length > 0 ? filteredData.length > 0 ?
                    <UserProfileContainer userData={filteredData} defaultValue={defaultOrderBy}/> :
                    <div className="search-error">No results matching search query. Try your search
                        again!</div> :
                    <UserProfileContainer userData={userData}/>}
            </div>
        )
    }
}
