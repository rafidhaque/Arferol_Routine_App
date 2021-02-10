import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Tabnavigator from '../navigation/tabnavigator';
import Classlist from "../screens/classlist";
import Assignmentlist from '../screens/assignmentlist';
import Quizlist from '../screens/quizlist';
const AppDrawer = createDrawerNavigator();

const Drawernavigator = () => {
    return (
      <AppDrawer.Navigator >
        <AppDrawer.Screen name="Home" component={Tabnavigator} />
        <AppDrawer.Screen name="Classlist" component={Classlist} />
        <AppDrawer.Screen name="Quizlist" component={Assignmentlist} />
        <AppDrawer.Screen name="Assignmentlist" component={Quizlist}  />
      </AppDrawer.Navigator>
    );
};

export default Drawernavigator;



