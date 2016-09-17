import {FILTER_TAGS, SELECT_TAG} from './profileactions.jsx';
import _ from 'underscore';

const initialState = {
    tags: [
        {
            en: 'Football',
            de: 'Fussball',
            fr: 'Football',
            it: 'Calcio'
        },
        {
            en: 'Tennis',
            de: 'Tennis',
            fr: 'Tennis',
            it: 'Tennis'
        },
        ,
        {
            en: 'Hockey',
            de: 'Hockey',
            fr: 'Hockey',
            it: 'Hockey'
        }
    ],
    selectedTags: []
};

export default function profile(state = initialState, action) {
    switch (action.type) {
        case FILTER_TAGS:
            return _.filter(state.tags, (tag) => tag[action.language].lastIndexOf(action.prefix, 0) === 0);
        case SELECT_TAG:
            return Object.assign({}, state, {
                selectedTags: [
                    ...state.selectedTags,
                    action.tag
                ]
            });
        default:
            return state;
    }
}