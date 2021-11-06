import styled from 'styled-components'
import { Box, FormControl } from '@mui/material';

export const HomeContainer = styled(Box)`

    & h3{
        color: #2C333A;
  font-family: Poppins;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 39px;
    }

    & .select{
        box-sizing: border-box;
        height: 46.03px;
        border: 1.5px solid #EBECF1;
        border-radius: 5px;
    }

        & .product{
            width: 135.5px;
           
        }

        & .month{
            width: 135.5px;
        }

        & .date{
            width: 95.5px;
        }
    }

`