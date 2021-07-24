const submitBreed = () => {
    console.log('Submitting message...'); //Verify that the javascript is working


    const breedInput = document.querySelector('#breed');
    const breedValue = breedInput.value; //Store the input of the breed in breedValue
    console.log(breedValue);

    const sizeInput = document.querySelector('#selectAddSize');
    const sizeValue = sizeInput.value; //Store the input of the breed in breedValue
    console.log(sizeValue);

    const friendInput = document.querySelector('#selectAddFriend');
    const friendValue = friendInput.value; //Store the input of the breed in breedValue
    console.log(friendValue);

    const activityInput = document.querySelector('#selectAddActivity');
    const activityValue = activityInput.value; //Store the input of the breed in breedValue
    console.log(activityValue);

    //Send to firebase
    firebase.database().ref().push({
        breed: breedValue,
        size: sizeValue,
        friendliness: friendValue,
        activityLevel: activityValue
    });

    alert("Thanks for your input! Breed added.");

    // Clear value from input
    breedInput.value = '';
 
};