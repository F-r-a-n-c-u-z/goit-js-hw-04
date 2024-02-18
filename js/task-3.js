const profile = {
    username: 'Jacob',
    playTime: 300,
  
    changeUsername(newName) {
      this.username = newName;
    },
  
    updatePlayTime(hours) {
      this.playTime += hours;
    },
  
    getInfo() {
      // `${username} has ${playTime} active hours!`;
  }
  
  };
  profile.changeUsername('Mila Poly');
  console.log(profile.username);
  profile.updatePlayTime(20);
  console.log(profile.playTime);
  
  console.log(profile.getInfo()); // "Jacob has 300 active hours!"
  
  profile.changeUsername("Marco");
  console.log(profile.getInfo()); // "Marco has 300 active hours!"
  
  profile.updatePlayTime(20);
  console.log(profile.getInfo()); // "Marco has 320 active hours!"