import { connect } from 'react-redux';
import Profile from './profile.jsx';
import {filterTags, selectTag} from './profileactions.jsx';

const mapStateToProps = (state) => {
    return {
        selectedTags: state.profile.selectedTags
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectTag: (tag) => {
            dispatch(selectTag(tag))
        },
        onSearchTags: (language,prefix) => {
            dispatch(filterTags(language,prefix))
        }
    }
};

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);

export default ProfileContainer;
