import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../../ducks/reducer';
import './Browse.css';

class Browse extends Component {

    componentDidMount() {
        this.props.getBooks(this.props.allBooks);
        console.log(getBooks());
    }

    render() {
        return(
            <section className="books-container">
                {this.props.allBooks.map((book, index) => {
                   return (
                       <div className="book-card" key={index}>
                            <span>{book.title}</span>
                            <span>{book.author}</span>
                            <span>{book.genre}</span>
                            <p>{book.description}</p>
                            <img src={book.img_url} className="book-img" alt="img" />
                        </div>
                )})}
            </section>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {getBooks})(Browse);