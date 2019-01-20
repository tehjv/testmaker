const tmCreatePrompt = (() => {
    const wrap = document.createElement('div');
    const sectionTypes = {
        'Multiple Choice': () => { },
        'Fill in the Blanks': () => { },
        'Enumeration': () => { },
        'Matching Type': () => { }
    };
    const createSection = {};
    const selectSectionType = {};
    const outputConfig = {};
    const isFinished = deferrable();

    const addListenerCreateSection = () => {
        const proceedToTypeSelection = () => {
            console.log('clicked')
            console.log(createSection.button.validity)
            const name = createSection.value();
            const pg2 = populateSelectSectionType(name);
            wrap.removeChild(createSection.wrap);
            wrap.appendChild(pg2);
        };

        addListener(createSection.button, 'click', proceedToTypeSelection);
    };

    const addListenerSelectSectionType = (name) => {
        const proceedToAddQuestions = () => {

        };

        addListener(selectSectionType.button, 'click', fn);
    };

    const populateCreateSection = () => {
        const wrap = document.createElement('div');
        const header = document.createElement('h1');
        const form = document.createElement('form');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const button = document.createElement('input');

        header.textContent = 'Create Test Section';
        form.action = location.href;
        label.textContent = 'Section Name: ';
        input.placeholder = 'Enter section name';
        input.required = true;        
        button.type = 'submit';
        button.textContent = 'Next';

        label.appendChild(input);
        appendChildElements(form, label, button);
        appendChildElements(wrap, header, form);

        createSection['input'] = input;
        createSection['button'] = button;
        createSection['value'] = () => { return input.value; };
        createSection['wrap'] = wrap;
        createSection['reset'] = () => { input.value = ''; };

        addListenerCreateSection();

        return wrap;
    };

    const populateSelectSectionType = (name) => {
        const wrap = document.createElement('div');
        const header = document.createElement('h1');
        const input = document.createElement('select');
        const button = document.createElement('button');

        header.textContent = 'Select Section Type';
        appendSelectOptions(Object.keys(sectionTypes), input);
        button.textContent = 'Next';

        appendChildElements(wrap, header, input, button);

        selectSectionType['input'] = input;
        selectSectionType['button'] = button;
        selectSectionType['value'] = () => { return input.value; };
        selectSectionType['reset'] = () => { input.value = ''; };

        addListenerSelectSectionType(name);

        return wrap;
    };

    const initialize = () => {
        const pg1 = populateCreateSection();
        
        wrap.appendChild(pg1);
    };

    return {
        create: (parent) => {
            initialize();
            parent.appendChild(wrap)
        },
        output: outputConfig,
        done: isFinished
    };
})();