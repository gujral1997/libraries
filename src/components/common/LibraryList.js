import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ListView, View, ScrollView } from 'react-native'
import ListItem from './ListItem'

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2)=> r1!=r2
        });

        this.dataSource = ds.cloneWithRows(this.props.librariesProp);

    }

    renderRow (data) {
        return <ListItem library={data}/>;
    }

    render () {
        return (
            <ScrollView>
                <ListView
                dataSource = {this.dataSource}
                renderRow = {this.renderRow}
                />
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
  return {librariesProp: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);