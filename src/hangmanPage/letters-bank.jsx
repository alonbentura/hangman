import React from 'react';

export class LettersBank extends React.Component {
  renderFirstRowKeyboard() {
    const firstRow = this.props.letters.slice(0, 10).map(letter => {
      return (
        <div
          style={styles.letter}
          key={letter.id}
          onClick={
            letter.clicked || this.props.failure === 6
              ? null
              : this.props.onClick.bind(this, letter.value)
          }
        >
          {letter.clicked ? null : letter.value}
        </div>
      );
    });

    return firstRow;
  }
  renderMiddleRowKeyboard() {
    const firstRow = this.props.letters.slice(10, 19).map(letter => {
      return (
        <div
          style={styles.letter}
          key={letter.id}
          onClick={
            letter.clicked || this.props.failure === 6
              ? null
              : this.props.onClick.bind(this, letter.value)
          }
        >
          {letter.clicked ? null : letter.value}
        </div>
      );
    });

    return firstRow;
  }

  renderLastRowKeyboard() {
    const firstRow = this.props.letters
      .slice(19, this.props.letters.length)
      .map(letter => {
        return (
          <div
            style={styles.letter}
            key={letter.id}
            onClick={
              letter.clicked || this.props.failure === 6
                ? null
                : this.props.onClick.bind(this, letter.value)
            }
          >
            {letter.clicked ? null : letter.value}
          </div>
        );
      });

    return firstRow;
  }

  render() {
    return (
      <div style={styles.letterBankContainer}>
        <div style={styles.lettersRow}>{this.renderFirstRowKeyboard()}</div>
        <div style={styles.lettersRow}>{this.renderMiddleRowKeyboard()}</div>
        <div style={styles.lettersRow}>{this.renderLastRowKeyboard()}</div>
      </div>
    );
  }
}

const styles = {
  letter: {
    width: 50,
    height: 50,
    margin: 5,
    display: 'flex',
    borderRadius: 100,
    backgroundColor: '#ececf0',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  lettersRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  letterBankContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
};
