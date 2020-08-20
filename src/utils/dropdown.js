import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        const { title } = this.props;

        this.state = {
            listOpen: false,
            headerTitle: title,
            keyword: '',
        };

        this.searchField = React.createRef();
        this.close = this.close.bind(this);
    }

    static getDerivedStateFromProps(nextProps) {
        const { list, title } = nextProps;

        const selectedItem = list.filter((item) => item.selected);

        if (selectedItem.length) {
            return {
                headerTitle: selectedItem[0].title,
            };
        }
        return { headerTitle: title };
    }

    componentDidUpdate() {
        const { listOpen } = this.state;

        setTimeout(() => {
            if (listOpen) {
                window.addEventListener('click', this.close);
            } else {
                window.removeEventListener('click', this.close);
            }
        }, 0);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.close);
    }

    close() {
        this.setState({
            listOpen: false,
        });
    }

    selectItem(title, id, stateKey) {
        const { resetThenSet } = this.props;

        this.setState({
            headerTitle: title,
            listOpen: false,
        }, resetThenSet(id, stateKey));
    }

    toggleList() {
        this.setState((prevState) => ({
            listOpen: !prevState.listOpen,
            keyword: '',
        }), () => {
            // eslint-disable-next-line react/destructuring-assignment
            if (this.state.listOpen && this.searchField.current) {
                this.searchField.current.focus();
                this.setState({
                    keyword: '',
                });
            }
        });
    }

    filterList(e) {
        this.setState({
            keyword: e.target.value.toLowerCase(),
        });
    }

    listItems() {
        const { list, searchable } = this.props;
        const { keyword } = this.state;

        let tempList = list;

        if (keyword.length) {
            tempList = list
                .filter((item) => (
                    item.title.toLowerCase().slice(0, keyword.length).includes(keyword)
                )).sort((a, b) => {
                    if (a.title < b.title) { return -1; }
                    if (a.title > b.title) { return 1; }
                    return 0;
                });
        }

        if (tempList.length) {
            return (
                tempList.map((item) => (
                    <button
                        type="button"
                        className="dd-list-item"
                        key={item.id}
                        onClick={() => this.selectItem(item.title, item.id, item.key)}
                    >
                        {item.title}
                        {' '}
                        {item.selected && <i className="fas fa-angle-down"></i>}
                    </button>
                ))
            );
        }

        return <div className="dd-list-item no-result">{searchable[1]}</div>;
    }

    render() {
        const { searchable } = this.props;
        const { listOpen, headerTitle } = this.state;

        return (
            <div className="dd-wrapper">
                <button
                    type="button"
                    className="dd-header"
                    onClick={() => this.toggleList()}
                >
                    <div className="dd-header-title">{headerTitle}</div>
                    {listOpen
                        ? <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>}
                </button>
                {listOpen && (
                    <div
                        role="list"
                        className={`dd-list ${searchable ? 'searchable' : ''}`}
                        
                    >
                        {searchable
                            && (
                                <input
                                    ref={this.searchField}
                                    className="dd-list-search-bar"
                                    placeholder={searchable[0]}
                                    onChange={(e) => this.filterList(e)}
                                />
                            )}
                        <div className="dd-scroll-list">
                            {this.listItems()}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Dropdown;