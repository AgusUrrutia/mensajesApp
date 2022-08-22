import Note from './models/Note';




export default (io)=>{
    io.on('connection' ,(socket)=>{
        console.log("New user connection");
        const emitirNotas = async () => {
            const notes = await Note.find()
            io.emit('server:loadnotes', notes)
            // console.log(notes);
        }
        emitirNotas();


        socket.on("client:newnote", async data=>{
            const newNote = new Note(data);
            const savedNote = await newNote.save();
            io.emit("server:newnote", savedNote)
        });

        socket.on("client:deletenote", async (id)=>{
            await Note.findByIdAndDelete(id);
            emitirNotas();
        })

    })
}