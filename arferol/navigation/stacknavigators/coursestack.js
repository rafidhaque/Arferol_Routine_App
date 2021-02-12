import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Courselist from '../../screens/courselist';
import Classlist from '../../screens/classlist';
import Assignmentlist from '../../screens/assignmentlist';
import Quizlist from '../../screens/quizlist';

const CourseStack = createStackNavigator();

const Coursestackscreen =(props)=>{
    
    return(
        <CourseStack.Navigator initialRouteName="">
            <CourseStack.Screen
                name ="Courselist"
                component={Courselist}
                options={{headerShown:false}}
            /> 
            <CourseStack.Screen
                name ="Classlist"
                component={Classlist}
                options ={{headerShown:false}}
            /> 
             <CourseStack.Screen
                name ="Assignmentlist"
                component={Assignmentlist}
                options ={{headerShown:false}}
            /> 
             <CourseStack.Screen
                name ="Quizlist"
                component={Quizlist}
                options ={{headerShown:false}}
            /> 
        </CourseStack.Navigator>
 
    )

};

export default Coursestackscreen;

