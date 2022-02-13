import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea} from '@mui/material';
import notfoundlogo from "../../../images/not found.png"
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Card sx={{ boxShadow: 0 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="540"
          image={notfoundlogo}
          alt="Not fOUND PAGE"
        //   style={{ backgroundColor: 'transparent' }}
        />
        <CardContent>
        <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/home"
              >
                  <Button
                    variant="contained"
                    sx={{mt:5}}
                  >
                   Go Back to Home
                  </Button>

              </NavLink>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default NotFoundPage;