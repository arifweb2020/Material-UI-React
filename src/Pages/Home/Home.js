import React from 'react';
import { Box, Grid, InputLabel, FormControl, Select, MenuItem, FormHelperText } from '@mui/material';
import { HomeContainer } from './Home.Style';
import { CheckCircle } from '@mui/icons-material';
import BillCard from '../../components/BillSummary/Card';

function Home(props) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <HomeContainer>
            <Grid container spacing={2}>
                <Grid item lg={3}>
                    <h3>Md Arif Hussain</h3>
                </Grid>
                <Grid item lg={2} />
                <Grid item lg={2} >
                    <Box>
                        <FormControl fullWidth >
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                className="select product"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>

                        </FormControl>
                    </Box>
                </Grid>
                <Grid item lg={1} />
                <Grid item lg={2}>
                    <Box>
                        <FormControl fullWidth >
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                className="select month"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item lg={2}>
                    <label for="cars">Choose a car:</label>
                    <select id="cars" name="cars" className="select date">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </Grid>

            </Grid>

            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }} mt={3}>
                <Grid item lg={3} xs={6}>
                    <BillCard icon={<CheckCircle />} heading="Total Payment" amount="322132" bgColor="#ecf7ee" />
                </Grid>
                <Grid item lg={3} xs={6}>
                    <BillCard icon={<CheckCircle />} heading="Total Disbursed" amount="322132" bgColor="#dbe8f6" />
                </Grid>

            </Grid>


        </HomeContainer>
    );
}

export default Home;