fetch('https://gs4gj7j31h.execute-api.us-east-1.amazonaws.com/test/visitorcount', {
    method: 'post'
}).then(res => {return res.json();
}).then((data) =>{
    console.log(data.count);
    document.getElementById('count').
    innerHTML=data.count;
});