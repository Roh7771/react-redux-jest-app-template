export default state => state.data.title;

// Пример использования селектора:
// export const getSpecificTitle = createSelector(
//   getAllTitle,
//   getIndex,
//   (titleList, index) => titleList[index],
// );
