function start(){

    let res_msg = document.createElement('div');
    res_msg.innerHTML="Hello myself Gayu, How can I help You?";
    res_msg.setAttribute("class","left")

    document.getElementById('msg_area').appendChild(res_msg);
}
document.getElementById('send').addEventListener("click",async(e)=>{
    e.preventDefault();

    var req = document.getElementById('text').value;
    if (req == undefined || req=="") {
        
    } else {
     let res="";
     await axios.get(`https://api.monkedev.com/fun/chat?msg=$req`).then(data=>{
        res = JSON.stringify(data.data.response)
     })
     let msg_req = document.createElement('div');
     let msg_res = document.createElement('div');

     let con1 = document.createElement('div');
     let con2 = document.createElement('div');

     con1.setAttribute("class","msgCon1");
     con2.setAttribute("class","msgCon2");

     msg_req.innerHTML = req;
     msg_res.innerHTML = res;

     msg_req.setAttribute("class","right");
     msg_res.setAttribute("class","left");

     let message = document.getElementById('msg_area');

     message.appendChild(con1);
     message.appendChild(con2);

     con1.appendChild(msg_req);
     con2.appendChild(msg_res);

     document.getElementById('text').value ="";

     function scroll(){
        var scrollMsg = document.getElementById('msg_area');
        scrollMsg.scrollTop = scrollMsg.scrollHeight;
     }
     scroll();
    }
})