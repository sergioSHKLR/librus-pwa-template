
// SETS COL2 LINKS TO TARGET EXT --------------------------------
(function () {
    const links = document.querySelectorAll("a[href^='https://en.m.wikipedia'], a[href^='http://en.m.wikipedia'], 'https://osm.org'")
    const host = window.location.hostname

    const isInternalLink = link => new URL(link).hostname === host

    links.forEach(link => {
        if (isInternalLink(link)) return

        link.setAttribute("target", "ext")
        link.setAttribute("rel", "noopener")
    })
})()


