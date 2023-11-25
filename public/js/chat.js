const socket = io();

let user = null;

if (!user) {
  Swal.fire({
    title: "¡Vienvenida al chat del ecommerce!",
    text: "Ingrese su correo electronico",
    input: "text",
    inputValidator: (value) => {
      if (!value) return "¡Tu correo es obligatorio!";
    },
  }).then((input) => {
    user = input.value;
    socket.emit("newUser", user);
  });
}

const message = document.getElementById("message");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const actions = document.getElementById("actions");

btn.addEventListener("click", () => {
  socket.emit("chat:message", {
    user,
    message: message.value,
  });
  message.value = "";
});

socket.on("messages", (data) => {
  actions.innerHTML = "";
  const chatRender = data
    .map((msg) => {
      return `<p><strong> ${msg.user} </strong>: ${msg.message} </p>`;
    })
    .join(" ");
  output.innerHTML = chatRender;
});

socket.on('newUser', (user)=>{
    Toastify({
        text: `${user} is logged in`,
        duration: 3000,
        close: true,
        // destination: 'http.....'
        gravity: 'top',
        position: 'right',
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)"
        }
    }).showToast();
});

message.addEventListener('keypress', ()=>{
    socket.emit('chat:typing', user)
})

socket.on('chat:typing', (data)=>{
    actions.innerHTML = `<p>${data} is writing a message...</p>`
})