import _ from 'lodash';

export function paginate(post, currentPage, pageSize) {
    const startIndex = (currentPage - 1) * pageSize;
    return _(post)
        .slice(startIndex)
        .take(pageSize)
        .value();
}
