function addItem() {
    const text = document.getElementById('newItemText');
    const newValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');
    const newMenuItem = document.createElement('option');
    newMenuItem.textContent = text.value;
    newMenuItem.value = newValue.value;
    menu.appendChild(newMenuItem);
    text.value = '';
    newValue.value = '';
}