import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  containerRegistration: {
    paddingTop: 92,
    paddingBottom: 78,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  avatarImage: {
    position: 'absolute',
    top: -92 + -60,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    background: '#F6F6F6',
    borderRadius: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
  },

  containerAvatar: {
    alignItems: 'center',
  },
  containerForm: {},

  text: {
    fontSize: 30,
    lineHeight: 35,
    fontWeight: '500',
    letterSpacing: 0.16,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 33,
  },
  button: {
    marginTop: 43,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19,
  },
  formInput: {},
  textLogin: {
    color: '#1B4371',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 16,
    lineHeight: 19,
  },
});

export default styles;
