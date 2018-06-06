import React, {Component} from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base'; 
import { connect } from 'react-redux';
import * as actions from '../../actions'; 

class ListItem extends Component {

    renderDescription() {
        const {library, selectedLibraryId} = this.props;
        if(library.id === selectedLibraryId) {
            return (
                <Text>{this.props.library.description}</Text>
            )
        }
    }
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback
            onPress={()=> this.props.selectLibrary(id) }
            >
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={titleStyle}>{title}</Text>
                        </Body> 
                    </CardItem>
                    {this.renderDescription()}
                </Card>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem); // pass null everytime if you dont want to pass mapStateToProps