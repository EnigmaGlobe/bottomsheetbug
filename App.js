/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useCallback, useMemo, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {
  const bottomSheetRef = useRef(null);

 // variables
 const snapPoints = useMemo(() => ['25%', '50%'], []);

 // callbacks
 const handleSheetChanges = useCallback((index: number) => {
   console.log('handleSheetChanges', index);
 }, []);

  return (


            <View style={styles.container}>
          <Text>Hello </Text>
          <BottomSheet
           ref={bottomSheetRef}
           index={1}
           snapPoints={snapPoints}
           onChange={handleSheetChanges}
         >
           <View style={styles.contentContainer}>
             <Text>Awesome 🎉</Text>
             <Button title="Press to test" onPress={()=>console.log("Console press to test")} />
           </View>
         </BottomSheet>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
     padding: 24,
     backgroundColor: 'grey',
   },
   contentContainer: {
     flex: 1,
     alignItems: 'center',
   },
});

export default App;
