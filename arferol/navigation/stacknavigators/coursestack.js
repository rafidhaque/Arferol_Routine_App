import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Courselist from '../../screens/courselist';
import Classlist from '../../screens/classlist';
import Assignmentlist from '../../screens/assignmentlist';
import Quizlist from '../../screens/quizlist';
import Addnewcourse from '../../funtionality/addnewcourse';
import Addnewassignment from '../../funtionality/addnewassignment';
import Addnewquiz from '../../funtionality/addnewassignment';
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
            <CourseStack.Screen
                name ="Addnewcourse"
                component={Addnewcourse}
                options ={{headerShown:false}}
            /> 
             <CourseStack.Screen
                name ="Addnewassignment"
                component={Addnewassignment}
                options ={{headerShown:false}}
            /> 
            <CourseStack.Screen
                name ="Addnewquiz"
                component={Addnewquiz}
                options ={{headerShown:false}}
            /> 


        </CourseStack.Navigator>
 
    )

};

export default Coursestackscreen;

