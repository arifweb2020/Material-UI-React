import { Container, Grid, Box } from '@mui/material';
import React from 'react';
import { AppConatiner } from './components/Container.style';
import { styled } from '@mui/styles';
import Nav from './components/Nav';
import BillCard from './components/BillSummary/Card';
import { CheckCircle } from '@mui/icons-material';
import DataTable from './components/Table';
import MyTable from './components/MyTable';
import Item from './components/Item';
import SearchTable from './components/SearchTable';

const MyBox = styled(Box)({
  // backgroundColor:`${(props)=>props.bgColor}`
  background: "red",
  padding: "20px"
})

const MyDiv = styled('div')({
  // backgroundColor:`${(props)=>props.bgColor}`
  background: "green",
  padding: "4px",
  display: "flex",
  justifyContent: "space-around"
})


const InDiv = styled('div')({
  backgroundColor: "#f1f1f1",
  width: "100px",
  margin: "10px",
  textAlign: "center",
  lineHeight: "75px",
  fontSize: "30px",
})



function App(props) {
  return (
    <AppConatiner>
      <Nav />
      <Container fixed >
        <h1>First Case</h1>
        <Grid container>
          {/* offset grid with column you want to offset */}
          <Grid item lg={6} md={6} sm={6} />
          {/* main grid column! */}
          <Grid item lg={6} md={6} sm={6}>
            I am offset column!.🔥
          </Grid>
          <Grid item lg={4} md={4} sm={4} />
          {/* main grid column! */}
          <Grid item lg={4} md={4} sm={4}>
            I am offset column!...............🔥
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={4}>
          <Grid item xs={12} md={6}>
            <MyBox>xs=8</MyBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <MyDiv>
                <InDiv>1</InDiv>
                <InDiv>2</InDiv>
              </MyDiv>
            </Box>
          </Grid>
        </Grid>


        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }} mt={3}>
          <Grid item xs={3}>
            <BillCard icon={<CheckCircle />} heading="Total Payment" amount="322132" bgColor="#ecf7ee" />
          </Grid>
          <Grid item xs={3}>
            <BillCard icon={<CheckCircle />} heading="Total Disbursed" amount="322132" bgColor="#dbe8f6" />
          </Grid>

        </Grid>

        <DataTable mt={4} />
        {/* <MyTable/> */}
        <Item />
        <SearchTable />
      </Container>
    </AppConatiner>
  );
}

export default App;