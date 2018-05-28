(function() {

    // All items we'd like to add
    var navItems = [
        {href: 'http://google.com', text: 'Google'},
        {href: 'http://bing.com', text: 'Bing'},
        {href: 'http://stackoverflow.com', text: 'StackOverflow'}
    ];
    
    // A few variables for use later
    var navElem = document.createElement("nav"),
        navList = document.createElement("ul"), 
        navItem, navLink;
    navElem.appendChild(navList);
    
    // Cycle over each nav item
    for (var i = 0; i < navItems.length; i++) {
        // Create a fresh list item, and anchor
        navItem = document.createElement("li");
        navLink = document.createElement("a");
        
        // Set properties on anchor
        navLink.href = navItems[i].href;
        navLink.innerHTML = navItems[i].text;
        
        // Add anchor to list item, and list item to list
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    }
    
    // Set first list item as current
    navList.children[0].className = "current";
    
    // Add list to body (or anywhere else)
    window.onload = function () {
        document.body.appendChild(navElem);
    }
    
});