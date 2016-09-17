export const FILTER_TAGS = 'FILTER-TAGS';
export const SELECT_TAG = 'SELECT_TAG';

export function filterTags(language, prefix) {
    return {type: FILTER_TAGS, language, prefix};
}

export function selectTag(tag) {
    return {type: SELECT_TAG, tag};
}