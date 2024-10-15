function UserGreeting() {
    const isLoggedIn = false;
    let message;
  
    if (isLoggedIn) {
      message = <div>Welcome, Vishwas!</div>;
    } else {
      message = <div>Welcome, Guest!</div>;
    }
  
    return <div>{message}</div>;
  }

export default UserGreeting;