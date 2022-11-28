fetch('../data/data.json')
.then((res)=> {
    return res.json();
})
.then((data)=> {
    console.table(data.laptop);
})
.catch(()=> {
    console.log("Error, Refresh and please try again later");
});