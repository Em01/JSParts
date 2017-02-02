//ScrollView = for scrolling content
//When you have this you must have flex 1 for index root element
//

//Touchable-BUTTONS-components for user presses differing on how they handle providing
//these also come with click handlers
//feedback to the user.
//Highlight
//NativeFeedback
//Opacity -fades on click
//WithoutFeedback
//

//Linking-link user over to a browser

//TEXT INPUT-like Image render with 0 height and width
//itself is not responsible for knowing its value we have to tell it its value
//value={this.state.text}
//onChangeText={text => this.setState({ text }) -called when user types input
//

/*
     const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles
  return (
    <View style = {containerStyle}>
      <Text style = {labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style = {inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}>
      </TextInput>
    </View>
    
    Note taken props from:
      <Input
            secureTextEntry            
            label="Email"
            placeholder="user@gmail.com" 
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
      />

      secureTextEntry for passwords
*/
