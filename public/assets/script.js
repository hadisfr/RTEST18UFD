window.onload = () => {
    function toggle() {
        this.parentElement.classList.toggle('selected');
    }

    var param = location.search.substr(6);
    var data = db[param ? param : 'data'];
    data.forEach((datum) => {
        var group = document.createElement('div');
        group.classList.add('group');
        var header = document.createElement('button');
        header.classList.add('header');
        header.appendChild(document.createTextNode(datum.name));
        header.addEventListener('click', toggle.bind(header), false);
        group.appendChild(header);
        var cnt = document.createElement('div');
        cnt.classList.add('content');
        switch (datum.type) {
            case "linkList":
                datum.cnt.forEach((element) => {
                    var node = document.createElement('a')
                    node.setAttribute('href', element.link)
                    node.setAttribute('target', '_blank')
                    var title = document.createElement('em');
                    title.appendChild(document.createTextNode(element.name));
                    node.appendChild(title);
                    if (element.hover) {
                        node.appendChild(document.createTextNode(" (" + element.hover + ")"));
                        node.setAttribute('title', element.hover)
                    }
                    cnt.appendChild(node);
                });
                break;
            case "twoLevelList":
                var list = document.createElement('dl');
                datum.cnt.forEach((cluster) => {
                    var title = document.createElement('dt');
                    title.appendChild(document.createTextNode(cluster.title));
                    list.appendChild(title);
                    var det = document.createElement('dd');
                    var subList = document.createElement('ul');
                    det.appendChild(subList);
                    cluster.cnt.forEach((item) => {
                        var node = document.createElement('li');
                        node.appendChild(document.createTextNode(item));
                        subList.appendChild(node);
                    })
                    list.appendChild(det);
                })
                cnt.appendChild(list);
                break;
            case "text":
                datum.cnt.forEach((element) => {
                    var node = document.createElement('p');
                    node.appendChild(document.createTextNode(element));
                    cnt.appendChild(node);
                })
                break;
        }
        group.appendChild(cnt);
        document.getElementById('cnt').appendChild(group);
    });
}
