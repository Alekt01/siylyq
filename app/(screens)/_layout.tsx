import { BlurView } from 'expo-blur';
import { Tabs, usePathname } from 'expo-router';
import {Book1, Gift} from 'iconsax-react-native';

import { NavigationBar } from '@/components/tab-bar';

export default function TabsLayout() {
  const path = usePathname();
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          shadowOpacity: 0,
          elevation: 0,
        },
      }}
      // @ts-ignore
      tabBar={(props: any): any => {
        if (
          !path.includes('chats/') &&
          !path.includes('home/') &&
          !path.includes('create-post')
        ) {
          return (
            <BlurView
              style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
              intensity={40}
            >
              <NavigationBar {...props} />
            </BlurView>
          );
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          href: '/home',
          tabBarLabel: 'Main',
          tabBarIcon: ({ focused, size }) => (
            <Book1
              size={size}
              color="#5eead4"
              {...(focused && { variant: 'Bold' })}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="billing"
        options={{
          href: '/billing',
          tabBarLabel: 'Billing',
          tabBarIcon: ({ focused, size }) => (
            <Gift
              size={size}
              color="#5eead4"
              {...(focused && { variant: 'Bold' })}
            />
          ),
        }}
      />
    </Tabs>
  );
}
