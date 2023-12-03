import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    tittle: '',
    description: '',
    duedate: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddTask = () => {
    const [user, setUser] = useState(initialValue);
    const { tittle, description, duedate} = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Tittle</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='tittle' value={tittle} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Duedate</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='duedate' value={duedate} id="my-input"/>
            </FormControl>
            
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add Task</Button>
            </FormControl>
        </Container>
    )
}

export default AddTask;