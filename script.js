document.getElementById("submit-btn").addEventListener("click", function () {
    sendToChatGPT();
  });
  
  
  
  function sendToChatGPT() {
    
    let value = document.getElementById("word-input").value;
  
    let body = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", "content": value}],
     
    };
  
    let headers = {
      "customer-id": "3947127269",
      "x-api-key":"zqt_60Rh5SCxyLs-a0ABdiR23OGYColm06h9XzQhmA"
    };
  
    axios
      .post("https://experimental.willow.vectara.io/v1/chat/completions", body, {
        headers: headers,
      })
      .then((response) => {
        console.log(response)
        let reply = response.data.choices[0].message.content;
        document.getElementById("reply-content").textContent = reply;
      });
  }