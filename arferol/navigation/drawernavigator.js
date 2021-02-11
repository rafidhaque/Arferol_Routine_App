import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Classlist from "../screens/classlist";
import Courselist from  "../screens/courselist";
import Assignmentlist from '../screens/assignmentlist';
import Quizlist from '../screens/quizlist';
const AppDrawer = createDrawerNavigator();

const Drawernavigator = () => {
    return (
      <AppDrawer.Navigator >
        <AppDrawer.Screen name="Courses" component={Courselist} />
        <AppDrawer.Screen name="Classes" component={Classlist} />
        <AppDrawer.Screen name="Assignments" component={Assignmentlist} />
        <AppDrawer.Screen name="Quizlist" component={Quizlist}  />
      </AppDrawer.Navigator>
    );
};

export default Drawernavigator;



