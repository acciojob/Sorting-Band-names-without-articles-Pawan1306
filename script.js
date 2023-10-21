function sortBandNames(names) {
  return names.sort((a, b) => {
    // Helper function to remove articles and leading/trailing spaces
    const removeArticles = (name) => name.replace(/^(a|an|the)\s+/i, '').trim();
    
    // Compare band names without articles
    const nameA = removeArticles(a).toLowerCase();
    const nameB = removeArticles(b).toLowerCase();

    return nameA.localeCompare(nameB);
  });
}

// Sort the band names and create the HTML list
function createBandList(names) {
  const sortedBandNames = sortBandNames(names);
  const bandList = document.getElementById('band');

  sortedBandNames.forEach((name) => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    bandList.appendChild(listItem);
  });
}

// Call the function to create the band list
createBandList(bandNames);

