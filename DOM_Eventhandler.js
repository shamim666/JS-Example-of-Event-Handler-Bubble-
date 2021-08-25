
// EventHandler Using Event Bubble ( if you set anything in parent then child will get it automatically)

document.getElementById('friend-container').addEventListener('click',function(event){

      
    if (event.target.tagName.toLowerCase() == 'div'){
        
        event.target.style.border = '2px solid red';
        event.target.style.borderRadius = '10px';
        event.target.style.margin = '10px';
        event.target.style.padding = '10px'
        event.target.style.backgroundColor = 'tomato'
    }

else {      event.target.parentNode.style.border = '2px solid red';
            event.target.parentNode.style.borderRadius = '10px';
            event.target.parentNode.style.margin = '10px';
            event.target.parentNode.style.padding = '10px' 
            event.target.parentNode.style.backgroundColor = 'tomato'
        }
})

// Normal EventHandler Example (Adding eventhandler in a button)

document.getElementById('add-border').addEventListener('click',function(){

    const friends = document.getElementsByClassName('friend')

    for(const friend of friends){
        friend.style.border = '5px solid blue';
        friend.style.borderRadius = '20px';
        friend.style.margin = '15px';
        friend.style.padding = '15px';

    }
})

// Normal EventHandler Example (Adding eventhandler in a button)

document.getElementById('add-back').addEventListener('click',function(){

    const friends = document.getElementsByClassName('friend')

    for(const friend of friends){
        friend.style.backgroundColor = 'green'

    }
})

// Adding a new element which does not get the above style properties automatically rather you
// should set those style properties in this block or you should use Event bubble.
// Here i add style properties and at the top of the code we use Event Bubble

document.getElementById('add-friend').addEventListener('click', function(){

    const friend = document.getElementById('friend-container'); 
    const newFriend = document.createElement('div') ;
    newFriend.innerHTML = `<h4>New Friend</h4>
    <p>Ab blanditiis cum quae suscipit!</p>`
    friend.appendChild(newFriend); 

        newFriend.style.border = '5px solid blue';
        newFriend.style.margin = '15px';
        newFriend.style.padding = '15px';
        newFriend.style.borderRadius = '20px';
        newFriend.style.backgroundColor = 'green'
})