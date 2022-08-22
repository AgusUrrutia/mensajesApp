import {loadNotes, onNewnote} from "./socket.js";
import {onHadleSubmit, renderNotes,appendNote} from "./ui.js"

onNewnote(appendNote);
loadNotes(renderNotes);

const noteForm = document.querySelector('#noteForm');

noteForm.addEventListener('submit',onHadleSubmit);