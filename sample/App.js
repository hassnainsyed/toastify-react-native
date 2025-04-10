// App.js
import React, { useState } from 'react'
import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native'
import ToastManager, { Toast } from 'toastify-react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// Custom icon component example
const CustomIconComponent = ({ color }) => (
  <View
    style={{
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: color || '#4CAF50',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <FontAwesome name='check' size={18} color='#FFFFFF' />
  </View>
)

// Custom toast component - simplified without progress bar
const CustomToast = ({ text1, text2, hide, iconColor }) => (
  <View style={styles.customToast}>
    <Icon name='star' size={24} color={iconColor || '#FFD700'} />
    <View style={styles.textContainer}>
      <Text style={styles.customTitle}>{text1}</Text>
      {text2 && <Text style={styles.customMessage}>{text2}</Text>}
    </View>
    <Icon name='close' size={20} color='#fff' onPress={hide} />
  </View>
)

// Custom toast configuration
const toastConfig = {
  customSuccess: (props) => (
    <View style={styles.customSuccessToast}>
      <Icon name='check-circle' size={24} color='#fff' />
      <View style={styles.textContainer}>
        <Text style={styles.customTitle}>{props.text1}</Text>
        {props.text2 && <Text style={styles.customMessage}>{props.text2}</Text>}
      </View>
    </View>
  ),
  custom: (props) => <CustomToast {...props} />,
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isRTL, setIsRTL] = useState(false)
  const [position, setPosition] = useState('bottom')
  const [showProgressBar, setShowProgressBar] = useState(true)
  const [showCloseIcon, setShowCloseIcon] = useState(true)

  // Toggle between positions
  const togglePosition = () => {
    if (position === 'top') setPosition('center')
    else if (position === 'center') setPosition('bottom')
    else setPosition('top')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Toastify React Native Demo</Text>
          <Text style={styles.subtitle}>Version 7.0.0</Text>

          <View style={styles.settingsContainer}>
            <View style={styles.settingRow}>
              <Text>Dark Mode</Text>
              <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
            </View>

            <View style={styles.settingRow}>
              <Text>RTL Support</Text>
              <Switch value={isRTL} onValueChange={setIsRTL} />
            </View>

            <View style={styles.settingRow}>
              <Text>Show Progress Bar</Text>
              <Switch value={showProgressBar} onValueChange={setShowProgressBar} />
            </View>

            <View style={styles.settingRow}>
              <Text>Show Close Icon</Text>
              <Switch value={showCloseIcon} onValueChange={setShowCloseIcon} />
            </View>

            <View style={styles.settingRow}>
              <Text>Position: {position}</Text>
              <Button title='Toggle' onPress={togglePosition} />
            </View>
          </View>

          <Text style={styles.sectionTitle}>Basic Toasts</Text>
          <View style={styles.buttonRow}>
            <Button
              title='Success'
              onPress={() => {
                Toast.success('Success message!', position)
              }}
            />

            <Button
              title='Error'
              onPress={() => {
                Toast.error('Error message!', position)
              }}
            />
          </View>

          <View style={styles.buttonRow}>
            <Button
              title='Info'
              onPress={() => {
                Toast.info('Info message!', position)
              }}
            />

            <Button
              title='Warning'
              onPress={() => {
                Toast.warn('Warning message!', position)
              }}
            />
          </View>

          <Text style={styles.sectionTitle}>Advanced Features</Text>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'flex-start',
              width: '100%',
            }}
          >
            <Button
              title='With Secondary Text'
              onPress={() => {
                Toast.show({
                  type: 'success',
                  text1: 'Main message',
                  text2: 'This is a secondary message',
                  position,
                })
              }}
            />

            <Button
              title='Custom Colors'
              onPress={() => {
                Toast.show({
                  type: 'error',
                  text1: 'Custom Colors',
                  text2: 'With custom background and progress bar',
                  position,
                  backgroundColor: '#673AB7',
                  textColor: '#FFFFFF',
                  progressBarColor: '#FF9800',
                })
              }}
            />

            <Button
              title='Custom Icon Size'
              onPress={() => {
                Toast.show({
                  type: 'info',
                  text1: 'Larger Icon',
                  text2: 'This toast has a larger icon',
                  position,
                  iconSize: 30,
                  iconColor: '#FF9800',
                })
              }}
            />

            <Button
              title='Long Duration (8s)'
              onPress={() => {
                Toast.show({
                  type: 'success',
                  text1: 'Long Duration',
                  text2: 'This toast will stay for 8 seconds',
                  position,
                  visibilityTime: 8000,
                })
              }}
            />

            <Button
              title='No Auto Hide'
              onPress={() => {
                Toast.show({
                  type: 'warn',
                  text1: 'No Auto Hide',
                  text2: 'This toast will not hide automatically',
                  position,
                  autoHide: false,
                })
              }}
            />

            <Button
              title='With Callbacks'
              onPress={() => {
                Toast.show({
                  type: 'success',
                  text1: 'With Callbacks',
                  text2: 'Check console for logs',
                  position,
                  onPress: () => console.log('Toast pressed'),
                  onShow: () => console.log('Toast shown'),
                  onHide: () => console.log('Toast hidden'),
                })
              }}
            />
          </View>

          <Text style={styles.sectionTitle}>Custom Icons</Text>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'flex-start',
              width: '100%',
            }}
          >
            {/* Different icon name from same family */}
            <Button
              title='Different Icon Name'
              onPress={() => {
                Toast.show({
                  type: 'success',
                  text1: 'Different Icon',
                  text2: 'Using a different icon name',
                  position,
                  icon: 'checkmark-circle-outline',
                })
              }}
            />

            {/* Different icon family */}
            <Button
              title='Different Icon Family'
              onPress={() => {
                Toast.show({
                  type: 'error',
                  text1: 'FontAwesome Icon',
                  text2: 'Using a different icon family',
                  position,
                  icon: 'exclamation-circle',
                  iconFamily: 'FontAwesome',
                })
              }}
            />

            {/* Custom icon component */}
            <Button
              title='Custom Icon Component'
              onPress={() => {
                Toast.show({
                  type: 'info',
                  text1: 'Custom Component',
                  text2: 'Using a custom React component as icon',
                  position,
                  icon: <CustomIconComponent color='#3498db' />,
                })
              }}
            />

            {/* Ionicons example */}
            <Button
              title='Ionicons Example'
              onPress={() => {
                Toast.show({
                  type: 'warn',
                  text1: 'Ionicons Example',
                  text2: 'Using Ionicons family explicitly',
                  position,
                  icon: 'alert',
                  iconFamily: 'Ionicons',
                  iconColor: '#FFC107',
                })
              }}
            />

            {/* Using JSX directly as icon */}
            <Button
              title='JSX Icon'
              onPress={() => {
                Toast.show({
                  type: 'success',
                  text1: 'JSX Icon',
                  text2: 'Using JSX directly as icon',
                  position,
                  icon: (
                    <View style={{ flexDirection: 'row' }}>
                      <FontAwesome name='thumbs-up' size={22} color='#4CAF50' />
                      <FontAwesome
                        name='thumbs-up'
                        size={22}
                        color='#4CAF50'
                        style={{ marginLeft: -8, marginTop: 5 }}
                      />
                    </View>
                  ),
                })
              }}
            />
          </View>

          <Text style={styles.sectionTitle}>Custom Components</Text>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'flex-start',
              width: '100%',
            }}
          >
            <Button
              title='Custom Success Toast'
              onPress={() => {
                Toast.show({
                  type: 'customSuccess',
                  text1: 'Custom Success',
                  text2: 'Using the custom success component',
                  position,
                })
              }}
            />

            <Button
              title='Fully Custom Toast'
              onPress={() => {
                Toast.show({
                  type: 'custom',
                  text1: 'Fully Custom',
                  text2: 'This is a completely custom component',
                  position,
                  iconColor: '#FF5722',
                  progressBarColor: '#4CAF50',
                })
              }}
            />
          </View>
        </View>
      </ScrollView>

      {/* Toast provider with all the configured options */}
      <ToastManager
        config={toastConfig}
        theme={isDarkMode ? 'dark' : 'light'}
        position={position}
        isRTL={isRTL}
        showProgressBar={showProgressBar}
        showCloseIcon={showCloseIcon}
        animationStyle='fade'
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
    textAlign: 'center',
  },
  settingsContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  customSuccessToast: {
    width: '90%',
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  customToast: {
    width: '90%',
    backgroundColor: '#673AB7',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  customTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  customMessage: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  customProgressContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
  },
})
