

window.onload = async function () {
    tmCreatePrompt.create(document.body);
    await tmCreatePrompt.done;

    console.log("DONE!");
    
};