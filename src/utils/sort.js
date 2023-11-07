export function sortFromMostRecentToOldest(array) {
    let sortedList = [...array];
    sortedList = sortedList.sort((a, b) => new Date(b.dateOfCreation) - new Date(a.dateOfCreation));
    return sortedList;
}