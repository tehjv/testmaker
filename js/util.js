const appendSelectOptions = (options, select) => {
    const opt = document.createElement('option');
    opt.value = "";
    opt.textContent = '--Select a section type--';
    select.appendChild(opt);

    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
};

const appendChildElements = (parent, ...children) => {
    children.forEach(child => parent.appendChild(child));
};

const addListener = (elem, event, fn) => {
    elem.addEventListener(event, fn);
}

const deferrable = () => {
	var res, rej;

	var promise = new Promise((resolve, reject) => {
		res = resolve;
		rej = reject;
	});

	promise.resolve = res;
	promise.reject = rej;

	return promise;
}