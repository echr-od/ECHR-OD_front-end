export function getReadyTableData(respondedList, configuredList) {
  return respondedList.map((row) => {
    const filteredRow = {};
    configuredList.forEach(({ name, fixed }) => {
      if (row.hasOwnProperty(name)) {
        filteredRow[name] = row[name];

        filteredRow.fixed = fixed;
      }
    });
    return filteredRow;
  });
}
