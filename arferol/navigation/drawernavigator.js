import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Coursestackscreen from './stacknavigators/coursestack';
import Classlist from "../screens/classlist";
import Assignmentlist from '../screens/assignmentlist';
import Quizlist from '../screens/quizlist';
import Calenderscreen from '../screens/calenderscreen';
const AppDrawer = createDrawerNavigator();

const Drawernavigator = () => {
    return (
      <AppDrawer.Navigator >
        <AppDrawer.Screen name="Courses" component={Coursestackscreen} />
        <AppDrawer.Screen name="Classes" component={Classlist} />
        <AppDrawer.Screen name="Assignments" component={Assignmentlist} />
        <AppDrawer.Screen name="Quizlist" component={Quizlist}  />
        <AppDrawer.Screen name="Calenderscreen" component={Calenderscreen}  />
      </AppDrawer.Navigator>
    );
};

export default Drawernavigator;



