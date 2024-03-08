function newImage (src, left, bottom) {
    let picture = document.createElement('img');
    picture.src = src;
    picture.style.position = 'fixed';
    picture.style.left = left + 'px';
    picture.style.bottom = bottom + 'px';
    document.body.append(picture);
    return picture
    }
    
    function newItem(src, left, bottom){
        let item = newImage(src, left, bottom);
    
        item.addEventListener('dblclick', () => {
            item.remove()
        }) 
    }
    
    newImage('assets/green-character.gif', 100, 100)
    newImage('assets/pine-tree.png', 450, 200)
    newImage('assets/tree.png', 200, 300)
    newImage('assets/pillar.png', 350, 100)
    newImage('assets/crate.png', 150, 200)
    newImage('assets/well.png', 500, 425)
    
    newItem('assets/sword.png', 500, 405)
    newItem('assets/shield.png', 165, 185)
    newItem('assets/staff.png', 600, 100)