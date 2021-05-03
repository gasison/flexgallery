const panels = document.querySelectorAll('.panel');

// listen for click on each panel
panels.forEach(panel => panel.addEventListener('click', () => {

	// check if panel does not contain class of open
    if (!panel.classList.contains('openActive')) {
    	panel.classList.remove('closeActive');
        panel.classList.toggle('open');
        panel.classList.toggle('openActive');

    }else{
    	panel.classList.remove('open', 'openActive');
    	panel.classList.toggle('closeActive')
    }
}));