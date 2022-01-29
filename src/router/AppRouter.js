import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import { FirstExercise } from '../components/exercises/FirstExercise';
import { SecondExercise } from '../components/exercises/SecondExercise';
import { ThirdExercise } from '../components/exercises/ThirdExercise';
import { Navbar } from '../components/ui/Navbar';




export const AppRouter = () => {


    return (
        <Router>
            <div>
                <Navbar/>
                <Switch>

                    <Route exact path="/first" component={FirstExercise} />
                    <Route exact path="/second" component={SecondExercise} />
                    <Route exact path="/third" component={ThirdExercise} />
                   


                    <Redirect to="/first" />

                </Switch>
            </div>
        </Router>
    );


}


