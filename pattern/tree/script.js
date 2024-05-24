parent.onclick = function(e) {
    const target = e.target;

    if (target.tagName != "LI") {
        return;
    }

    const children = target.children && Array.from(target.children);

    if (!children) {
        return;
    }

    children.forEach(child => child.hidden = !child.hidden)
}