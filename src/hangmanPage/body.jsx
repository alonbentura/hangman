import React from 'react';
import movies from '../movies.json';
import { LetterCell } from './letterCell';
import { LettersBank } from '../hangmanPage/letters-bank';
import letters from '../letters.json';
import { FinishPic } from './finishPic';

let randomMovie = movies[Math.floor(Math.random() * movies.length)];
let randomMovieUpperCase = randomMovie.title.toUpperCase();
const movieLetters = randomMovieUpperCase.split(''); // array of letters

export class HangmanBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {},
      failure: 0,
      randomLetters: [],
      clickedLetters: [],
      lettersBank: letters,
    };
  }
  componentDidMount() {
    this.selectMovie();
  }

  selectMovie() {
    this.generateAnswer();
  }

  generateAnswer() {
    const randomLetters = new Array(movieLetters.length).fill('');
    this.setState({ randomLetters }, () => {
      for (let i = 0; i < 4; i++) {
        const index = Math.floor(Math.random() * movieLetters.length); // the random index that chosen
        const draftedLetter = movieLetters[index];

        if (draftedLetter !== ' ') {
          movieLetters.forEach((element, index) => {
            if (draftedLetter === element) {
              randomLetters[index] = draftedLetter;
            }
          });
          this.setClicked(movieLetters[index]);
        }
      }

      movieLetters.forEach((element, index) => {
        if (element === ' ') {
          randomLetters[index] = ' ';
        }
      });

      this.setState({
        selectedMovie: randomMovieUpperCase,
        randomLetters,
      });
    });
  }

  renderImg() {
    return (
      <img src={`${process.env.PUBLIC_URL}/img/${this.state.failure}.png`} />
    );
  }

  renderLetters() {
    const mappedLetters = this.state.randomLetters.map((c, index) => {
      return (
        <LetterCell
          letter={c}
          key={index}
          didClick={this.state.clickedLetters.includes(c)}
        />
      );
    });
    return mappedLetters;
  }

  onClickLetter = (letter, e) => {
    const findLetter = this.setClicked(letter);
    let newA = this.state.randomLetters.slice();

    movieLetters.forEach((element, index) => {
      if (letter === element) {
        newA[index] = findLetter;
      }
    });

    this.setState({
      randomLetters: newA,
      clickedLetters: [...this.state.clickedLetters, letter],
    });

    if (!findLetter) {
      return this.setState({ failure: this.state.failure + 1 });
    }
  };

  setClicked(letter) {
    const findLetter = movieLetters.find(element => letter === element);
    const letterIndex = this.state.lettersBank.findIndex(
      letterInBank => letter === letterInBank.value,
    );
    const letterClicked = this.state.lettersBank.slice();
    letterClicked[letterIndex].clicked = true;
    this.setState({
      letterInBank: letterClicked,
    });
    return findLetter;
  }

  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>{this.renderImg()}</div>
          <div style={styles.lettersContainer}>
            <div style={styles.answer}>{this.renderLetters()}</div>
            <LettersBank
              onClick={this.onClickLetter}
              letters={this.state.lettersBank}
              failure={this.state.failure}
            />
          </div>
          <div style={styles.finishImgContainer}>
            <FinishPic
              failure={this.state.failure}
              randomLetters={this.state.randomLetters}
              selectedMovie={this.state.selectedMovie}
            />
          </div>
        </div>
      </div>
    );
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
  finishImgContainer: {
    width: '20%',
  },
};
