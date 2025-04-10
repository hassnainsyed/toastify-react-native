# toastify-react-native

[![npm version](https://badge.fury.io/js/toastify-react-native.svg)](https://badge.fury.io/js/toastify-react-native)

🎉 toastify-react-native allows you to add notifications to your React Native app (iOS, Android) with ease. No more nonsense!

## Demo

## [View examples on snack.expo.io](https://snack.expo.io/@zahidalidev/toastify-react-native)

<video src="https://github.com/user-attachments/assets/14b6336e-44e5-41b5-83ea-94f8571f1eee" autoplay loop muted playsinline></video>

## Features

- 🚀 **Simple API**: Easy to use with minimal setup
- 🎨 **Highly customizable**: Customize colors, icons, animations, and more
- 🧩 **Custom components**: Create your own toast components
- 🎭 **Custom icons**: Use different icon families, custom icon components, or JSX elements
- 📱 **Responsive**: Adapts to different screen sizes
- 🌓 **Dark & Light mode**: Built-in theme support
- 🔄 **RTL support**: Right-to-left language support
- ⏱️ **Progress bar**: Visual indicator of toast duration
- 🖐️ **Interactive**: Pause on touch, resume on release
- 🔄 **Animation options**: Choose from different animation styles
- 📝 **Multiple lines**: Support for title and description
- 🔍 **TypeScript support**: Full type definitions included
- ✨ **Smooth animations**: Beautiful enter/exit animations
- ⚡ **Quick setup**: Get up and running in less than 10 seconds!
- 🎛️ **Per-toast behavior**: Define different behaviors for each toast
- 📊 **Progress control**: Control the progress bar like nprogress
- 🔧 **Super easy to customize**: Modify every aspect to match your app's design
- 🎭 **And much more!**: Discover all the possibilities!

## Installation

```sh
npm install toastify-react-native
# or
yarn add toastify-react-native
```

### Required Dependencies

This package requires `react-native-vector-icons`:

```sh
npm install react-native-vector-icons
# or
yarn add react-native-vector-icons
```

Follow the [react-native-vector-icons installation guide](https://github.com/oblador/react-native-vector-icons#installation) to complete the setup for your platform.

## Basic Usage

```jsx
import React from 'react'
import { View, Button } from 'react-native'
import ToastManager, { Toast } from 'toastify-react-native'

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title='Show Success Toast'
        onPress={() => {
          Toast.success('Success message!')
        }}
      />

      <Button
        title='Show Error Toast'
        onPress={() => {
          Toast.error('Error message!')
        }}
      />

      <Button
        title='Show Info Toast'
        onPress={() => {
          Toast.info('Info message!')
        }}
      />

      <Button
        title='Show Warning Toast'
        onPress={() => {
          Toast.warn('Warning message!')
        }}
      />

      {/* Toast provider should be at the root level */}
      <ToastManager />
    </View>
  )
}
```

## Advanced Usage

### Custom Configuration

```jsx
import React from 'react'
import { View, Button, Text } from 'react-native'
import ToastManager, { Toast } from 'toastify-react-native'

// Custom toast configuration
const toastConfig = {
  success: (props) => (
    <View style={{ backgroundColor: '#4CAF50', padding: 16, borderRadius: 10 }}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.text1}</Text>
      {props.text2 && <Text style={{ color: 'white' }}>{props.text2}</Text>}
    </View>
  ),
  // Override other toast types as needed
}

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title='Show Custom Toast'
        onPress={() => {
          Toast.show({
            type: 'success',
            text1: 'Main message',
            text2: 'Secondary message',
            position: 'bottom',
            visibilityTime: 4000,
            autoHide: true,
            onPress: () => console.log('Toast pressed'),
            onShow: () => console.log('Toast shown'),
            onHide: () => console.log('Toast hidden'),
          })
        }}
      />

      {/* Toast provider with custom config */}
      <ToastManager config={toastConfig} />
    </View>
  )
}
```

### Toast Positions

```jsx
Toast.success('Top toast', 'top') // default
Toast.error('Center toast', 'center')
Toast.info('Bottom toast', 'bottom')
```

### Customizing Individual Toasts

```jsx
Toast.show({
  type: 'success',
  text1: 'Custom Toast',
  text2: 'With many options',
  position: 'bottom',
  visibilityTime: 5000,
  autoHide: true,
  backgroundColor: '#333',
  textColor: '#fff',
  iconColor: '#4CAF50',
  iconSize: 24,
  progressBarColor: '#4CAF50',
  theme: 'dark',
})
```

## Available Props

### ToastManager Props

| Prop            | Type                          | Default    | Description                                        |
| --------------- | ----------------------------- | ---------- | -------------------------------------------------- |
| width           | number \| string \| 'auto'    | '90%'      | Width of the toast                                 |
| minHeight       | number \| string \| 'auto'    | 61         | Minimum height of the toast                        |
| style           | StyleProp<ViewStyle>          | {}         | Custom style for the toast container               |
| textStyle       | StyleProp<TextStyle>          | {}         | Custom style for the toast text                    |
| theme           | 'light' \| 'dark'             | 'light'    | Theme of the toast                                 |
| animationStyle  | 'none' \| 'slide' \| 'fade'   | 'fade'     | Animation style for the toast                      |
| position        | 'top' \| 'center' \| 'bottom' | 'top'      | Position of the toast                              |
| duration        | number                        | 3000       | Duration in ms before the toast disappears         |
| showCloseIcon   | boolean                       | true       | Whether to show the close icon                     |
| showProgressBar | boolean                       | true       | Whether to show the progress bar                   |
| isRTL           | boolean                       | false      | Right-to-left support                              |
| topOffset       | number                        | 40         | Distance from the top when position is 'top'       |
| bottomOffset    | number                        | 40         | Distance from the bottom when position is 'bottom' |
| iconSize        | number                        | 22         | Size of the icon                                   |
| iconFamily      | string                        | 'Ionicons' | Default icon family to use                         |
| icons           | object                        | undefined  | Custom default icons for each toast type           |
| config          | ToastConfig                   | undefined  | Custom toast components configuration              |

### Toast.show() Options

| Option           | Type                                                  | Default   | Description                                 |
| ---------------- | ----------------------------------------------------- | --------- | ------------------------------------------- |
| type             | 'success' \| 'error' \| 'info' \| 'warn' \| 'default' | 'default' | Type of toast                               |
| text1            | string                                                | ''        | Main text                                   |
| text2            | string                                                | undefined | Secondary text                              |
| position         | 'top' \| 'center' \| 'bottom'                         | 'top'     | Position of the toast                       |
| visibilityTime   | number                                                | 3000      | Duration in ms before the toast disappears  |
| autoHide         | boolean                                               | true      | Whether the toast should hide automatically |
| onShow           | () => void                                            | undefined | Callback when toast is shown                |
| onHide           | () => void                                            | undefined | Callback when toast is hidden               |
| onPress          | () => void                                            | undefined | Callback when toast is pressed              |
| progressBarColor | string                                                | undefined | Color of the progress bar                   |
| backgroundColor  | string                                                | undefined | Background color of the toast               |
| textColor        | string                                                | undefined | Color of the text                           |
| icon             | string \| ReactNode                                   | undefined | Custom icon name or component               |
| iconFamily       | string                                                | undefined | Icon family for the icon                    |
| iconColor        | string                                                | undefined | Color of the icon                           |
| iconSize         | number                                                | undefined | Size of the icon                            |
| theme            | 'light' \| 'dark'                                     | undefined | Theme of the toast                          |

## Custom Components

You can create your own toast components by providing a custom configuration:

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ToastManager, { Toast } from 'toastify-react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const CustomToast = ({ text1, text2, hide }) => {
  return (
    <View style={styles.customToast}>
      <Icon name='star' size={24} color='#FFD700' />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{text1}</Text>
        {text2 && <Text style={styles.message}>{text2}</Text>}
      </View>
      <Icon name='close' size={20} color='#fff' onPress={hide} />
    </View>
  )
}

const styles = StyleSheet.create({
  customToast: {
    width: '90%',
    backgroundColor: '#673AB7',
    borderRadius: 10,
    padding: 16,
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
    marginLeft: 12,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
})

export default function App() {
  const toastConfig = {
    custom: (props) => <CustomToast {...props} />,
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title='Show Custom Toast'
        onPress={() => {
          Toast.show({
            type: 'custom',
            text1: 'Custom Component',
            text2: 'This is a fully custom toast component!',
          })
        }}
      />

      <ToastManager config={toastConfig} />
    </View>
  )
}
```

## Customizing Icons

```jsx
// Different icon name from the default family
Toast.show({
  type: 'success',
  text1: 'Different Icon',
  text2: 'Using a different icon name',
  icon: 'check', // Different icon name according to default icon family
})

// Using a different icon family
Toast.show({
  type: 'error',
  text1: 'FontAwesome Icon',
  text2: 'Using a different icon family',
  icon: 'exclamation-circle',
  iconFamily: 'FontAwesome',
})

// Using a custom React component as icon
const CustomIcon = ({ color }) => (
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

Toast.show({
  type: 'info',
  text1: 'Custom Component',
  text2: 'Using a custom React component as icon',
  icon: <CustomIcon color='#3498db' />,
})

// Using JSX directly as icon
Toast.show({
  type: 'success',
  text1: 'JSX Icon',
  text2: 'Using JSX directly as icon',
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
```

```jsx
// Setting default icons at the ToastManager level
<ToastManager
  config={toastConfig}
  theme='light'
  position='top'
  // Custom default icons configuration
  icons={{
    success: 'check-circle',
    error: 'error',
    info: 'info',
    warn: 'warning',
    default: 'notifications',
  }}
  // Default icon family
  iconFamily='MaterialIcons'
  // Default icon size
  iconSize={24}
/>
```

## API Reference

### Toast Functions

- `Toast.show(options)`: Show a toast with custom options
- `Toast.success(message, position?)`: Show a success toast
- `Toast.error(message, position?)`: Show an error toast
- `Toast.info(message, position?)`: Show an info toast
- `Toast.warn(message, position?)`: Show a warning toast
- `Toast.hide()`: Hide the current toast

## Upgrading from v6.x

If you're upgrading from version 6.x, please note the following changes:

- The animation system has been simplified to use React Native's built-in Modal animations
- Some props have been removed or renamed for clarity
- The styling system has been improved for better customization
- Custom components now receive more props for better control

For users of v6.x and below, refer to the [legacy documentation](./README-legacy.md).

## Contributing

We welcome contributions to make toastify-react-native even better!

- Check out our [contribution guidelines](./CONTRIBUTING.md) for details on the process
- Have questions? Open an issue or join the discussion
- Found a bug? Submit a pull request
- Have a feature request? Open an issue

Thank you to all our contributors!

## License

toastify-react-native is [MIT licensed](https://github.com/zahidalidev/toastify-react-native/blob/master/LICENSE).
