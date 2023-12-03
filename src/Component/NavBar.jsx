import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #3e5172;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="/" exact>Home</Tabs>
                <Tabs to="all" exact>All Tasks</Tabs>
                <Tabs to="add" exact>Add Task</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;