import React from 'react';

export class FinishPic extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickAgain = () => {
    window.location.reload();
  };

  failPic() {
    return (
      <div style={styles.finishPicContainer}>
        <img src={`${process.env.PUBLIC_URL}/img/shit_symbol.png`} />
        <div style={styles.finishText}>
          <div>shit</div>
          <div>you</div>
          <div>dead!</div>
        </div>
        <div style={styles.againButton} onClick={this.onClickAgain}>
          Try again
        </div>
      </div>
    );
  }
  succussPic() {
    return (
      <div style={styles.finishPicContainer}>
        <img src={`${process.env.PUBLIC_URL}/img/yes_symbol.png`} />
        <div style={{ ...styles.finishText, color: 'rgb(113, 225, 142)' }}>
          <div>you</div>
          <div>did</div>
          <div>it</div>
        </div>
        <div style={styles.againButton} onClick={this.onClickAgain}>
          Try again
        </div>
      </div>
    );
  }
  render() {
    return this.props.failure === 6
      ? this.failPic()
      : this.props.selectedMovie === this.props.randomLetters.join('')
      ? this.succussPic()
      : null;
  }
}
const styles = {
  container: {
    display: 'flex',
    padding: '0px 10px 0px 10px',
    flexDirection: 'column',
    alignItems: 'center',
  },
  answer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  lettersContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 600,
    width: '60%',
  },
  againButton: {
    width: 200,
    height: 80,
    backgroundColor: 'blue',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    fontSize: 42,
    fontWeight: 'bold',
    borderRadius: 15,
    cursor:'pointer'
  },
  finishPicContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 10
  },
  finishText: {
    fontSize: 80,
    color: '#ff485e',
    textAlign: 'center',
  },
  finishImgContainer: {
    width: '20%',
  },
};
