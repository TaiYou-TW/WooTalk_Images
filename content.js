var inner = '<div><div><div id="changeButton"><input value="離開" onclick="changePerson()" type="button"></div>';
inner += '<div id="textBox"><input type="text" id="messageInput" placeholder="輸入訊息" autocomplete="off"></div>';
inner += '<div class="button" style="cursor: pointer;padding-right:0;" onclick="$(\'input[type=file]\').trigger(\'click\');">';
inner += '<i style="padding:0 6px;" class="material-icons"></i></div><div id="sendButton">';
inner += '<input type="button" value="傳送" onclick="sendMessage(); return false;"></div></div></div>';
document.getElementById('textBox').style.width = "90%";
document.getElementById('sendBox').innerHTML = inner;