import React from 'react';
import { userService } from './login'

class HomeView extends React.Component {
constructor(props){
    super();

}
    handleClick = () => {
        userService.logout();
        
    }
    render() {
        return (
            <div>Welcome
                <button type="button" onClick={this.handleClick}>Log out</button>
            </div>
        );
    }
}
export default HomeView;