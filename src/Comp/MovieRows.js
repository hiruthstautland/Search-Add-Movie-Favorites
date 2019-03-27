import React from 'react';

export default class MovieRows extends React.Component {
    render() {
        return(
            <table key={this.props.movie.id}>
            <tbody>
            <tr>
                <td>
                    <img src={this.props.movie.poster_src} alt="Movie Poster" width="100" />
                </td>
                <td>
                    <b> {this.props.movie.title} </b>
                    <br/>
                    {this.props.movie.overview}
                </td>
            </tr>
            </tbody>
        </table>
    );
    }
}

