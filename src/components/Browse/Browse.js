import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../../ducks/reducer';

class Browse extends Component {

    componentDidMount() {
        this.props.getBooks(this.props.allBooks);
        console.log(getBooks());
    }

    render() {
        let {title, author, genre} = this.props.allBooks;
        return(
            <section>
          
                    <div>
                    <span>{title}</span>
                    <span>{author}</span>
                    <span>{genre}</span>
                    </div>
             
            </section>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {getBooks})(Browse);