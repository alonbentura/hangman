import React from 'react';

export class LetterCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.letter === ' ' ? (
      <div style={styles.emptyLetterCellContainer}>-</div>
    ) : (
      <div
        style={{
          ...styles.letterCellContainer,
          color: this.props.didClick ? 'blue' : 'black',
          borderColor: this.props.didClick ? 'blue' : 'black'
        }}
      >
        {this.props.letter}
      </div>
    );
  }
}

const styles = {
  letterCellContainer: {
    width: 50,
    justifyContent: 'space-evenly',
    display: 'flex',
    height: 50,
    margin: 2,
    fontSize: 30,
    fontWight: 'bold',
    borderBottom: 'solid 3px',
    borderColor: 'black'
  },
  emptyLetterCellContainer: {
    width: 50,
    justifyContent: 'space-evenly',
    display: 'flex',
    height: 50,
    margin: 2,
    fontSize: 30,
    fontWight: 'bold',
  },
};
