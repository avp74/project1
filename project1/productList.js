(function () {

    var mockDatabase = [
        {id: 1, name: 'Chocolate Chip Cookies', price: "3.50", published: true},
        {id: 2, name: 'Macadamia Nut Cookies', price: "3.50", published: true},
        {id: 3, name: 'Peanut Butter Cookies', price: "3.50", published: false},
        {id: 4, name: 'Oatmeal Raisin Cookies', price: "3.50", published: false},
        {id: 5, name: 'M&M Cookies', price: "3.75", published: true},
        {id: 6, name: 'PB&J Cookies', price: "4.00", published: false},
        {id: 7, name: 'Smores Cookies', price: "4.50", published: true},
        {id: 8, name: 'Strawberry Shortcake Cookies', price: "4.75", published: false},
        {id: 9, name: 'Espresso Chocolate Chip Cookies', price: "5.00", published: true},
    ];

    function renderList (results) {
        var contTable = document.querySelector('#dataSet');

        // clear out inner HTML to get rid of any older results
        contTable.innerHTML = '';
        // Map each database record to a string containing the HTML for it's row
        var tableRows = results.map(function (result) {
            return  result.name + result.id + result.published ;
        });
        // Set the contents of the table body to the new set of rendered HTML rows
        tableRows.forEach(function () {
            contTable.innerHTML += row; // += adds to HTML instead of overwriting it entirely.
        });

        // Lower level scope once again overwrites what's above it.
        var foo = 'renderList';
        console.log(foo); // 'renderList'
    }

    renderList(mockDatabase);

    function orderBy(sortValue) {
        // Sort method varies based on what type of value we're sorting
        var sortedResults = (sortValue === 'name') ?
            mockDatabase.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                // Sorts alphabetically.  -1 puts it before. 1 puts it after
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }) :
            mockDatabase.sort(function (a, b) { // Numbers a booleans are much simpler.
                // Just need postive or negative number
                // Object properties can be accessed through a string representing their name
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }

    document.querySelector('#orderBy').addEventListener('change', function(event){
        // Event is the JavaScript event that transpired, in our change a CHANGE event.
        // Target is the element it was performed on, useful for when the event targets
        // multiple elements.
        // Value has the name implies is the current value of the input element, if there is one
        orderBy(event.target.value);
    });

})();

