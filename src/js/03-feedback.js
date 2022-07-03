import throttle from "lodash.throttle";

import '../css/03-feedback.css'

const STORAGE_KEY = "feedback-form-state";
let formData = {};

const feedBackForm = document.querySelector('form');
feedBackForm.addEventListener('input',throttle(onInput,500))
feedBackForm.addEventListener('submit',submitFeedBack)

populateData();

function onInput(evt) {
    evt.preventDefault();
    formData [evt.target.name] = evt.target.value;
    console.log(formData);
    
    localStorage.setItem(STORAGE_KEY,JSON.stringify(formData));

}

function populateData() {
    const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if(saveData) {
        feedBackForm.email.value = saveData.email;
        feedBackForm.message.value = saveData.message;
    }
}

function submitFeedBack(evt) {
    evt.preventDefault();

    feedBackForm.reset();
    localStorage.removeItem(STORAGE_KEY);
}

