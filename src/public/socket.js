const socket = io();

export const loadNotes = (callback)=>{
    socket.on("server:loadnotes", callback);
}

export const saveNote = (title, description)=>{
    socket.emit("client:newnote", {
        
        title,
        description
    })
}


export const onNewnote = (callback) =>{
    socket.on("server:newnote", callback);
}


export const deleteNote = id =>{
    socket.emit("client:deletenote" , id)
}