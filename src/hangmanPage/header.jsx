import React from 'react';

export class HangmanHeader extends React.Component {
  render() {
    return (
      <div style={styles.heederContainer}>
        <div style={styles.circle} />
        HANGMAN
        <div style={styles.circle} />
      </div>
    );
  }
}
const styles = {
  heederContainer: {
    backgroundColor: '#2c4246',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    padding: ('0  10px  0 10px'),
    borderRadius: 15,
  },
  circle: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 50,
  },
};
