import React from 'react';
import './App.css';
import {MuiThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SignUp from './SignUp';
import SignIn from './SingIn';
import './index.css';
import Profile from './Profile';
import {BrowserRouter as Switch, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <MuiThemeProvider>
      <Grid container alignItems='center' style={{height: '100%'}}>
        <Grid item xs={12}>
          <Paper elevation={4} style={{margin: 90}}>
            <Grid container alignItems='center' justify='center'>
              <Grid item xs={12} sm={6} style={{'text-align': 'center'}}>
                <img src='http://images4.fanpop.com/image/photos/24400000/Perry-the-platypus-perry-the-platypus-24402589-180-217.png' />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                alignContent='center'
                style={{padding: '3rem'}}>
                <BrowserRouter>
                  <Switch>
                    <Route exact path='/' component={SignIn} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/profile' component={Profile} />
                  </Switch>
                </BrowserRouter>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
