import React, { Component } from 'react';
import { Logo, Menu, Pesquisa, Avatar } from './index';

class NavBar extends Component {

    state = {
        page: 'início'
    }

    mudarItemMenuDestacado = (page) => this.setState({ page });

    render() {
        return (
            <div className="navbar-container">
                <Logo changeMenuMarker={(page) => this.mudarItemMenuDestacado(page)} />
                <Menu
                    page={this.state.page}
                    mudarItemMenuDestacado={(page) => this.mudarItemMenuDestacado(page)}
                />
                <Pesquisa
                    placeholder="Filmes, pessoas..."
                    onEnterPressed={query => this.props.onSearchMovies(query)}
                    onCollapseInputHandler={() => this.props.onCollapseInputHandler()}
                    onExpandInputHandler={() => this.props.onExpandInputHandler()}
                />
                <Avatar />
            </div>
        )
    }

}

export { NavBar };